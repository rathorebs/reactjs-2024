import { useContext, useEffect, useRef, useState } from "react";
import ProgramTable from "./Programtable";
import CallTypeTable from "./CallTypeTable";
import Table from "../Common/Table";
import { useHistory } from "react-router-dom";
import pluslg from "../../assets/pluslg.svg";
import { ONBOARD_PAYER_TYPE, ONBOARD_PAYER_TYPE_BY_AGENCY_ID, ONBOARD_PROGRAM_NAME, ONBOARD_PROGRAM_NAME_BY_AGENCY_ID, GET_CALL_TYPE } from "../../api/query";
import {
  CREATE_AGENCY_PROGRAM, DELETE_AGENCY_PROGRAM, DELETE_AGENCY_PROGRAM_WITH_PAYER, CREATE_CALLTYPE,
  DELETE_CALLTYPE,
  UPDATE_CALLTYPE,
} from "../../api/mutation";
import { useQuery, useMutation, useLazyQuery, ApolloError } from "@apollo/client";
import Loader from "../Common/Loader";
import { UserContext } from "../../providers/MainContext";
import { showError, showSuccess } from "../Common/ToastNotification";

const shiftTypeOptions = [
  {
    key: "1",
    name: "Hourly"
  },
  {
    key: "2",
    name: "Community"
  },
  {
    key: "3",
    name: "Visit"
  },
  {
    key: "4",
    name: "Live-in"
  },
]

interface DataRow {
  "Call Type": string;
  "Procedure Code": string;
  "Description": string;
  "Bill Rate": string;
  "Pay Rate": string;
  "Shift Type": string;
  calltypeid: any;
}

const columns: (keyof DataRow)[] = [
  "Call Type",
  "Procedure Code",
  "Description",
  "Bill Rate",
  "Pay Rate",
  "Shift Type",
  "calltypeid",
];


interface SelectedItems {
  [key: string]: string | 'loading';
}

const ContainerForPayerInfo = () => {
  const { userInfo } = useContext<any>(UserContext)
  const { loading: payerNameloading, error: payerNameError, data: payerNameData } = useQuery(ONBOARD_PAYER_TYPE, {
    fetchPolicy: 'no-cache',
  });
  const [getAgencyPayerById, { loading: payerNameloadingById, data: payerNameDataById, error: payerNameErrorById }] = useLazyQuery(ONBOARD_PAYER_TYPE_BY_AGENCY_ID, {
    fetchPolicy: 'no-cache',
  });
  const [
    getProgramByStatePayer,
    {
      loading: programNameloading,
      error: programNameError,
      data: programNameData,
    },
  ] = useLazyQuery(ONBOARD_PROGRAM_NAME, {
    fetchPolicy: 'no-cache',
  });
  const [getAgencyProgramById, { loading: programNameloadingById, data: programNameDataById, error: programNameErrorById }] = useLazyQuery(ONBOARD_PROGRAM_NAME_BY_AGENCY_ID, {
    fetchPolicy: 'no-cache',
  });

  const [createAgencyProgram, { loading: createAgencyLoading, error: createAgencyError }] = useMutation(CREATE_AGENCY_PROGRAM, {
    fetchPolicy: 'no-cache',
  });
  const [deleteAgencyProgram, { loading: deleteAgencyProgramLoading, error: deleteAgencyProgramAgencyError }] = useMutation(DELETE_AGENCY_PROGRAM, {
    fetchPolicy: 'no-cache',
  });
  const [deleteAgencyProgramWithPayer, { loading: deleteAgencyProgramWithPayerLoading, error: deleteAgencyProgramWithPayerError }] = useMutation(DELETE_AGENCY_PROGRAM_WITH_PAYER, {
    fetchPolicy: 'no-cache',
  });
  const {
    loading: callTypeLoading,
    error: callTypError,
    data: callTypeData,
    refetch: refetchCallType,
  } = useQuery(GET_CALL_TYPE, {
    variables: { agencyId: Number(userInfo?.agency?.id) },
    skip: !userInfo,
    fetchPolicy: "no-cache"
  });
  const [
    deleteCallType,
    {
      data: deleteCallTypeData,
      loading: deleteCallTypeLoading,
      error: deleteCallTypeError,
    },
  ] = useMutation(DELETE_CALLTYPE);
  const [
    updateCalltype,
    {
      data: updateCallTypeData,
      loading: updateCallTypeLoading,
      error: updateCallTypeError,
    },
  ] = useMutation(UPDATE_CALLTYPE);
  const [
    createCalltype,
    {
      data: createCallTypeData,
      loading: createCallTypeLoading,
      error: createCallTypeError,
    },
  ] = useMutation(CREATE_CALLTYPE);

  const payerTypesById = payerNameDataById?.agency_payer_by_agency_id.data

  const payerTypes = payerNameData?.payers_by_state?.data;
  const programNameById = programNameDataById?.agency_program_by_agency_id?.data
  const [programName, setProgramName] = useState<SelectedItems>({});
  const [selectedPayerTypes, setSelectedPayerTypes] = useState<any>([]);
  const [selectedProgramNames, setSelectedProgramNames] = useState<any>(
    []
  );
  const [refetchMainApi, setRefetchMainApi] = useState(false)
  const [showProgramTable, setShowProgramTable] = useState(false);
  const [showCallTypeTable, setShowCallTypeTable] = useState(false);
  const [dataTableCall, setDataTableCall] = useState<any>(null);
  const history = useHistory();


  useEffect(() => {
    if (payerTypes && userInfo) {
      getAgencyPayerById({ variables: { agency_id: Number(userInfo?.agency?.id) } }).then(res => {
        if (res?.data?.agency_payer_by_agency_id?.data?.length > 0 && payerTypes?.length > 0) {
          res?.data?.agency_payer_by_agency_id?.data?.map((value: any) => {
            const payerNameData = payerTypes?.find((item: any) => item?.id == value.payer_id)
            handlePayerTypeClick(value.payer_id, payerNameData?.payer_name)
            getProgramByStatePayer({ variables: { stateId: 10, payerId: value.payer_id } });
          });
        }
      });
      getAgencyProgramById({ variables: { agency_id: Number(userInfo?.agency?.id) } })
    }
  }, [userInfo, payerTypes, refetchMainApi])


  useEffect(() => {
    if (callTypeData?.call_type?.data?.length > 0) {
      setDataTableCall(convertData(callTypeData?.call_type?.data));
    }
  }, [callTypeData]);

  const fetchProgram = async (stateId: number, payerId: number, payerName: string) => {
    try {
      const { data } = await getProgramByStatePayer({ variables: { stateId, payerId } });
      setProgramName((prevSelectedItems) => ({
        ...prevSelectedItems,
        [payerName]: data?.program_by_state_payer.data || 'error',
      }));
    } catch (error) {
      if (error instanceof ApolloError) {
        console.log("error message", error.message)
        showError(error.message);
      } else {
        console.error(`error message: ${error}`);
        showError(error);
      }
    }

  };

  const convertData = (data: any[]): DataRow[] => {
    return data?.map((item) => {
      const billRate =
        item.rates_set.length > 0 ? item.rates_set[0].shift_rate : "";
      const payRate =
        item.agencypayrate_set.length > 0
          ? item.agencypayrate_set[0].payrate.toFixed(2)
          : "";
      const shiftType =
        item.agencypayrate_set.length > 0
          ? item.agencypayrate_set[0].shifttype
          : "";
      return {
        "Call Type": item.calltypecode,
        "Procedure Code": item.calltypeprocedurecode,
        "Description": item.calltypedescription,
        "Bill Rate": `$${billRate}`,
        "Pay Rate": `$${payRate}`,
        "Shift Type": shiftType,
        calltypeid: item.calltypeid,
      };
    });
  };


  function handleNextClick() {
    history.push("/planofcare");
  }

  function agencyClick() {
    history.push("/agency");
  }


  const handleProgramsAndPayer = (item: any, itemName: any, userClick?: any) => {
    const payerName = itemName
    const payerPresent = payerTypesById?.find((payersData: any) => payersData?.payer_id == item)
    if (userClick && payerPresent) {
      deleteAgencyProgramWithPayer({
        variables: {
          agency_id: Number(userInfo?.agency?.id),
          payer_id: Number(item)
        }
      }).then((response: any) => {
        if (response.data.
          delete_agency_program_with_payer
        ) {
          const { message } = response.data.
            delete_agency_program_with_payer
            getAgencyPayerById({ variables: { agency_id: Number(userInfo?.agency?.id) } })
          getAgencyProgramById({ variables: { agency_id: Number(userInfo?.agency?.id) } }).then((res: any) => {
            setProgramName((prevState) => {
              const newState = { ...prevState };
              delete newState[payerName];
              return newState;
            });
          });
          showSuccess(message)
        }
      }).catch((error: any) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message)
          showError(error.message);
        } else {
          console.error(`error message: ${error}`);
          showError(error);
        }
      })
    } else {
      setProgramName((prevSelectedItems: any) => {
        if (prevSelectedItems[payerName]) {
          const newSelectedItems = { ...prevSelectedItems };
          delete newSelectedItems[payerName];
          return newSelectedItems;
        }
        else {
          // If the item is not already selected, call the API
          fetchProgram(10, Number(item), payerName);
          return { ...prevSelectedItems, [payerName]: 'loading' };
        }
      });
    }

  };

  function handlePayerTypeClick(payerType: string, payerName: string, userClick?: any): void {
    setSelectedPayerTypes((prevState: any) =>
      prevState.find((item: any) => item.key == payerType)
        ? prevState.filter((type: any) => type.key != payerType)
        :
        [...prevState, { key: payerType, name: payerName }]
    );
    handleProgramsAndPayer(payerType, payerName, userClick)
  }

  function handleProgramNameClick(programNameMain: string, id: any, payerName?: any): void {
    const createdProgram = programNameById?.some((payer: any) => payer.id == id)
    const payerId = payerTypes?.find((i: any) => i.payer_name == payerName)?.id
    if (createdProgram) {
      deleteAgencyProgram({
        variables: {
          agency_program_ids: Number(id)
        }
      }).then((response: any) => {
        getAgencyProgramById({ variables: { agency_id: Number(userInfo?.agency?.id) } });
        showSuccess("Program deleted successfully")
      }).catch((error: any) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message)
          showError(error.message);
        } else {
          console.error(`error message: ${error}`);
          showError(error);
        }
      })
    } else {
      setSelectedProgramNames((prevState: any) =>
        prevState.find((item: any) => item.key == id)
          ? prevState.filter((type: any) => type.key != id)
          : [...prevState, { key: id, name: programNameMain, payerName: payerName || null, payerId: payerId || null, showProgram: true }]
      );
    }
  }

  function handleAddProgramTable(): void {
    setShowProgramTable(true);
  }

  function handleCancelProgramTable(type?: any, id?: any, currentPayerId?: any): void {
    if (type === "multiple") {
      setSelectedProgramNames((prevState: any) =>
        prevState.find((ite: any) => ite.key == id)
          ? prevState.filter((it: any) => it.key != id)
          : [...prevState]
      );
    } else if (type === "normal") {
      setSelectedProgramNames((prevState: any) =>
        prevState.find((ite: any) => ite.key == id)
          ? prevState.filter((it: any) => it.key != id)
          : [...prevState]
      );
    }
    setShowProgramTable(false);
  }

  function handleAddCallTypetable(): void {
    setShowCallTypeTable(true);
  }

  function handleCancel(): void {
    setShowCallTypeTable(false);
  }

  function activePayerName(id: string, type: string) {
    const checkActive = selectedPayerTypes?.some((payer: any) => payer.key == id) || payerTypesById?.some((payer: any) => payer?.payer_id == id)
    if (type === "button") {
      if (checkActive) {
        return "bg-main-blue hover:bg-dodgerblue"
      } else {
        return "bg-text-text-tertiary border-solid border-stroke hover:bg-gainsboro-300 "
      }
    } else if (type === "text") {
      if (checkActive) {
        return "text-text-text-tertiary"
      } else {
        return "text-text-text-primary"
      }
    }
  }

  function activeProgramName(id: string, type: string) {
    const checkActive = selectedProgramNames?.some((payer: any) => payer.key == id) || programNameById?.some((payer: any) => payer.id == id)
    if (type === "button") {
      if (checkActive) {
        return "bg-main-blue hover:bg-dodgerblue"
      } else {
        return "bg-text-text-tertiary border-solid border-stroke hover:bg-gainsboro-300 "
      }
    } else if (type === "text") {
      if (checkActive) {
        return "text-text-text-tertiary"
      } else {
        return "text-text-text-primary"
      }
    }
  }

  if (programNameloading || createAgencyLoading || payerNameloading || payerNameloadingById || programNameloadingById || deleteAgencyProgramLoading || deleteAgencyProgramWithPayerLoading || createCallTypeLoading || callTypeLoading) {
    return <Loader />
  }

  return (
    <div
      id="agency-respom-blg"
      className={`flex-1 flex flex-row flex-wrap items-start justify-start px-5 box-border gap-[24px_22px] max-w-[1366px] z-[1] text-left text-base text-text-text-primary font-body-reg mq1425:max-w-full`}
    >
      <div className="w-[1286px] flex flex-row items-center justify-start max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">
          Onboarding
        </h3>
      </div>
      <div
        id="leftbar-blg"
        className="flex-1 rounded-radius-radius-lg bg-text-text-tertiary flex flex-col items-start justify-start p-4 box-border min-w-[328px] max-w-[328px]"
      >
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-text-text-tertiary">
          <div className="w-10 rounded-45xl bg-main-blue flex flex-col items-center justify-center py-[9px] px-4 box-border">
            <div className="relative capitalize inline-block min-w-[7px] text-xl">
              1
            </div>
          </div>
          <p className="flex-1 relative text-text-text-primary cursor-pointer">
            <b> Payer Information</b>
          </p>
        </div>
        <div
          id="bdr-leftbar-dv"
          className="flex flex-row items-center justify-center py-0 px-5"
        >
          <div className="relative box-border border-r-[2px] border-solid border-surface-border" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="w-10  rounded-45xl bg-stroke-light flex flex-col items-center justify-center py-[9px] px-[15px]">
            <div className="relative capitalize inline-block min-w-[10px] text-xl">
              2
            </div>
          </div>
          <p
            className="flex-1 relative text-sm cursor-pointer"
            onClick={handleNextClick}
          >
            Plan of Care
          </p>
        </div>
        <div
          id="bdr-leftbar-dv"
          className="flex flex-row items-center justify-center py-0 px-5"
        >
          <div className="relative box-border border-r-[2px] border-solid border-surface-border" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <div className="w-10 rounded-45xl bg-stroke-light flex flex-col items-center justify-center py-[9px] px-[15px] box-border">
            <div className="relative capitalize inline-block min-w-[9px] text-xl">
              3
            </div>
          </div>
          <p
            className="cursor-pointer flex-1 relative text-sm"
            onClick={agencyClick}
          >
            Agency Information
          </p>
        </div>
      </div>
      <div id="onborading-right" className="flex-[0.966] rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] min-w-[925px] max-w-full text-sm mq950:pt-5 mq950:pb-5 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border mq1425:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-start">
          <h4 className="flex-1 relative inline-block max-w-full">
            <b> Payer Information</b>
          </h4>
        </div>
        {/* Payer Type Screen */}
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px] min-w-[191px]">
          <label className="self-stretch relative mb-4">
            <b>Payer Type</b>
          </label>
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-[62px] pl-0 gap-[8px] mq950:pr-[31px] mq950:box-border">
            {payerTypes?.map((pt: any) => (
              <button
                key={pt.id}
                className={`cursor-pointer [border:none] py-spacing-1 px-spacing-3 rounded-81xl flex flex-row items-center justify-center 
                 ${activePayerName(pt.id, "button")}`}
                onClick={() => handlePayerTypeClick(pt.id, pt?.payer_name, true)}
              >
                <div
                  className={`relative text-sm font-body-reg text-left inline-block ${activePayerName(pt.id, "text")}`}
                >
                  {pt?.payer_name}
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Program Name */}
        {
          (programNameById?.length > 0 || Object?.keys(programName)?.length > 0) && <div className="self-stretch flex flex-col items-start justify-start gap-[8px] min-w-[191px]">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
              <label className="self-stretch relative mb-4">
                <b>Program Name</b>
              </label>
              <div
                className="cursor-pointer rounded-radiuscomponent-button bg-main-blue flex flex-row items-center justify-center p-2.5"
                onClick={handleAddProgramTable}
              >
                <img className="h-3 w-3 relative" alt="" src={pluslg} />
              </div>
            </div>
            {(Object?.keys(programName)?.length > 0) && Object?.entries(programName)?.map(([key, programs]: any) => {
              if (programs?.length === 0) {
                return null; // Skip rendering if there are no programs
              } else if (Array.isArray(programs) && programs.length > 0) {
                const filteredPrograms = programs.filter(program =>
                  !programNameById?.some((agencyProgram: any) =>
                    agencyProgram?.program_id === parseInt(program.id)
                  )
                );
                return (
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[74px] pl-0 gap-[8px] mq950:pr-[37px] mq950:box-border">
                    {(programNameById?.length > 0 ? [...filteredPrograms, ...programNameById] : programs).map((pn: any) => (
                      <button
                        key={pn.id}
                        className={`cursor-pointer [border:none] py-spacing-1 px-spacing-3 rounded-81xl flex flex-row items-center justify-center ${activeProgramName(pn.id, 'button')}`}
                        onClick={() => handleProgramNameClick(pn.program_name, pn.id, key)}
                      >
                        <div
                          className={`relative text-sm font-body-reg text-text-text-primary text-left inline-block ${activeProgramName(pn.id, 'text')}`}
                        >
                          {pn.program_name}
                        </div>
                      </button>
                    ))}
                  </div>
                )
              }
            })}

            {Object?.keys(programName)?.every(key => programName[key]?.length === 0) && programNameById?.length > 0 &&
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[74px] pl-0 gap-[8px] mq950:pr-[37px] mq950:box-border">
                {programNameById?.map((pn: any) => (
                  <button
                    key={pn.id}
                    className={`cursor-pointer [border:none] py-spacing-1 px-spacing-3 rounded-81xl flex flex-row items-center justify-center ${activeProgramName(pn.id, 'button')}`}
                    onClick={() => handleProgramNameClick(pn.program_name, pn.id)}
                  >
                    <div
                      className={`relative text-sm font-body-reg text-text-text-primary text-left inline-block  ${activeProgramName(pn.id, 'text')}`}
                    >
                      {pn.program_name}
                    </div>
                  </button>
                ))}
              </div>
            }
            {
              (Object?.keys(programName)?.every(key => programName[key]?.length === 0) && programNameById?.length == 0) &&
              <div>No Programs found</div>
            }
          </div>
        }
        {selectedProgramNames?.length > 0 && (
          <>
            {selectedProgramNames?.map((pn: any) => {
              if (pn.showProgram) {
                return (
                  <ProgramTable
                    pn={pn.name}
                    key={pn.name}
                    id={pn.key}
                    payerName={pn.payerName}
                    payerId={pn.payerId}
                    onCancel={handleCancelProgramTable}
                    payerTypes={selectedPayerTypes}
                    createAgencyProgram={createAgencyProgram}
                    getAgencyProgramById={getAgencyProgramById}
                    setRefetchMainApi={setRefetchMainApi}
                    getAgencyPayerById={getAgencyPayerById}
                  />
                )
              }
            })}
          </>
        )}
        {showProgramTable && (Object?.keys(programName)?.length > 0 || programNameById?.length > 0) && (
          <ProgramTable
            id={0}
            onCancel={handleCancelProgramTable}
            payerTypes={selectedPayerTypes}
            createAgencyProgram={createAgencyProgram}
            getAgencyProgramById={getAgencyProgramById}
            setRefetchMainApi={setRefetchMainApi}
            getAgencyPayerById={getAgencyPayerById}
          />
        )}
        {
          (programNameById?.length > 0 || Object?.keys(programName)?.length > 0 ) && (
            <>

              {/* Call Type Section */}
              <div className="self-stretch flex flex-row items-center justify-center gap-[8px] max-w-full text-base mq950:flex-wrap calltype-agency-dv">
                <p className="relative inline-block min-w-[71px]">
                  <b>Call Type</b>
                </p>
                <span className="flex-1 relative text-xs text-text-text-secondary inline-block min-w-[323px] max-w-full">
                  Call Type (Call type can not be deleted which has shift associated
                  with it).
                </span>
                {!showCallTypeTable && (
                  <div
                    className="cursor-pointer rounded-radiuscomponent-button bg-main-blue flex flex-row items-center justify-center p-2.5"
                    onClick={handleAddCallTypetable}
                  >
                    <img className="h-3 w-3 relative" alt="" src={pluslg} />
                  </div>
                )}
              </div>
              {/* Call type form */}
              {showCallTypeTable && (
                <CallTypeTable
                  shiftTypeOptions={shiftTypeOptions}
                  onCancel={handleCancel}
                  createCalltype={createCalltype}
                  refetchCallType={refetchCallType}
                  userInfo={userInfo}
                />
              )}
              {callTypeData?.call_type?.data?.length > 0 && (
                <Table
                  columns={columns}
                  initialData={dataTableCall}
                  showActionColumn={true}
                  deleteCallType={deleteCallType}
                  updateCalltype={updateCalltype}
                  userInfo={userInfo}
                  tableType="callType"
                  callTypeData={callTypeData?.call_type?.data}
                  refetchCallType={refetchCallType}
                />
              )}

            </>
          )
        }


        <div className="self-stretch flex flex-col items-end justify-center mq950:items-center mq950:justify-center mq950:pb-20 mq950:box-border">
          <button
            className="cursor-pointer [border:none] py-[12.5px] px-[52px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue"
            onClick={handleNextClick}
          >
            <span className="relative text-sm font-body-reg text-text-text-tertiary text-center inline-block min-w-[31px]">
              Next
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContainerForPayerInfo;
