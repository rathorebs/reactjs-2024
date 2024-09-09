import { FunctionComponent, useContext, useEffect, useRef, useState } from "react";
import Stack from "./Stack";
import { useHistory } from "react-router-dom";
import checkoutcheck from '../../assets/checkout-check-icon.svg';
import checkAgencyicon from '../../assets/check-agency-icon.svg'
import { ApolloError, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { ALL_SERVICE_LIST_CATEGORIES_BY_AGENCY_ID } from "../../api/query";
import Loader from "../Common/Loader";
import { UserContext } from "../../providers/MainContext";
import { ADD_PLAN_OF_CARE_MUTATION } from "../../api/mutation";
import { showError, showSuccess } from "../Common/ToastNotification";

const ContainerPlanOfcare: FunctionComponent = () => {
    const { userInfo } = useContext<any>(UserContext)
    // const [allCheckBoxData, setAllCheckBoxData] = useState<any>([])
    const allCheckBoxData = useRef<any>([])
    const agencyUUID = userInfo?.agency?.uuid
    const agencyId = parseInt(userInfo?.agency?.id)
    const businessTypeId = parseInt(userInfo?.agency?.business_type_id)

    const history = useHistory();
    const [getCategories, { data, loading, error }] = useLazyQuery(ALL_SERVICE_LIST_CATEGORIES_BY_AGENCY_ID,{
        fetchPolicy:'no-cache'
    })
    const [addPlanOfCare, { loading: planOfCareLoading, error: planOfCareError, data: planOfCareData }] = useMutation(ADD_PLAN_OF_CARE_MUTATION);

    useEffect(() => {
        if (agencyId) {
            getCategories({ variables: { agency_id: agencyId, business_type_id: businessTypeId } });
        }
    }, [agencyId]);

    if (loading || planOfCareLoading) {
        return <Loader />
    }

    if (error) {
        if (error instanceof ApolloError) {
            console.log({ error })
        }
        console.log("error in api rees:", error)
    }

    const categories = data?.all_service_list_categories_by_agency_id.data || [];

    function payerinfoClick() {
        history.push('/onBoard');
    };

    function handleNextClick() {
        handleAddPlanOfCare()
    };

    const handleAddPlanOfCare = () => {
        addPlanOfCare({
            variables: {
                inputs: allCheckBoxData.current,
                agency_id: agencyId,
                createdby: agencyUUID,
            },
        }).then(response => {
            const { status_code, message } = response?.data?.add_plan_of_care
            if (status_code == 201) {
                showSuccess(message)
                history.push("/agency")
            }
        }).catch((error) => {
            if (error instanceof ApolloError) {
                console.log("error message", error.message)
                showError(error.message);
            } else {
                console.error(`error message: ${error}`);
                showError(error);
            }
        });
    };

    const handleCheckBoxData = (subcategoryqueid: string, mainCategoryId: any, subcategoryid: any) => {
        const itemExists = allCheckBoxData?.current?.some((item: any) => item.subcategoryqueid == subcategoryqueid);
        if (itemExists) {
            const result = allCheckBoxData?.current?.filter((it: any) => it.subcategoryqueid !== subcategoryqueid);
            allCheckBoxData.current = result
        } else {
            allCheckBoxData.current = [...allCheckBoxData.current, {
                servicelistid: mainCategoryId,
                subcategoryqueid,
                subcategoryid
            }]
        }
    }

    return (
        <div id="cts-respon-p-dv"
            className={`flex-1 flex flex-row flex-wrap items-start justify-start py-40 px-5 box-border gap-[24px_22px] max-w-[1366px] z-[1] text-left text-xl text-text-text-primary font-body-reg mq1425:max-w-full`}
        >
            <div className="w-[1286px] flex flex-row items-center justify-start max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">
                    Onboarding
                </h3>
            </div>
            <div id="leftbar-blg" className="flex-1 rounded-radius-radius-lg bg-text-text-tertiary flex flex-col items-start justify-start p-4 box-border min-w-[328px] max-w-[328px] text-base text-text-text-tertiary">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-text-text-primary">
                    <div className="w-10 rounded-45xl bg-green-600 flex flex-col items-center justify-center py-[9px] px-[15px] box-border count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[7px] text-xl">
                            <img className="h-4 w-4 relative" alt="" src={checkAgencyicon} />
                        </p>
                    </div>
                    <p className="flex-1 relative text-sm cursor-pointer" onClick={payerinfoClick}>Payer Information</p>
                </div>
                <div id="bdr-leftbar-dv" className="flex flex-row items-center justify-center py-0 px-5">
                    <div className="h-10 w-0.5 relative box-border border-r-[2px] border-solid border-surface-border" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="rounded-45xl bg-main-blue flex flex-col items-center justify-center py-[9px] px-[15px] count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[10px] text-xl ">
                            2
                        </p>
                    </div>
                    <p className="flex-1 relative text-text-text-primary cursor-pointer"><b>Plan of Care</b></p>
                </div>
                <div id="bdr-leftbar-dv" className="flex flex-row items-center justify-center py-0 px-5">
                    <div className="h-10 w-0.5 relative box-border border-r-[2px] border-solid border-surface-border" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-text-text-primary">
                    <div className="w-10 rounded-45xl bg-stroke-light flex flex-col items-center justify-center py-[9px] px-[15px] box-border count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[9px] text-xl ">
                            3
                        </p>
                    </div>
                    <p className="flex-1 relative text-sm cursor-pointer" onClick={handleNextClick}>Agency Information</p>
                </div>
            </div>
            <div id="onborading-right" className="flex-[0.966] rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] min-w-[925px] max-w-full text-sm mq950:pt-[21px] mq950:pb-[21px] mq950:box-border mq1425:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
                    <h4 className="flex-1 relative inline-block max-w-full">
                        <b>Plan of Care</b>
                    </h4>
                </div>
                {categories?.map((category: { id: any, subcategory: any }) =>
                    category.subcategory.map((sub: any) => (
                        <Stack mainCategoryId={category.id} subCategoryId={sub.subcategoryid} key={sub.subcategoryid} heading={sub.subcategory} rows={sub.questions.map((q: { subcategoryquestion: any; }) => q)} handleCheckBoxData={handleCheckBoxData} />
                    ))
                )}
                <div id="fom_btn-blg" className="self-stretch flex gap-[12px] items-end justify-center mq950:items-center mq950:justify-center mq950:pb-5 mq950:box-border">
                    <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary  rounded-radiuscomponent-button box-border flex flex-row items-center 
                justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro hover:box-border 
                hover:border-[2px] hover:border-solid hover:border-dodgerblue">
                        <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface 
                text-center inline-block min-w-[46px]">Back</span></button>
                    <button className="cursor-pointer [border:none] py-[12.5px] px-[52px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={handleNextClick}>
                        <div className="relative text-sm font-body-reg text-text-text-tertiary text-center inline-block min-w-[31px]">
                            Next
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContainerPlanOfcare