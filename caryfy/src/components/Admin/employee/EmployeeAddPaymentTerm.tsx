import { ChangeEvent, FunctionComponent, useState } from "react";
import InputsNew from "../../Common/InputsNew";
import { useHistory } from "react-router-dom";

const EmployeeAddPaymentTerm: FunctionComponent = () => {
  const history = useHistory();
  const [checkedItems, setCheckedItems] = useState({
    SFC: false,
    SOURCE: false,
    Assessor_Visit: false,
    Call_Test: false,
    Client_Billing: false,
    Community_Shift: false,
  });

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const HandlegoBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    history.push("/admin_employee_personal_payment");
  };

  return (
    <div className="self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-left text-sm text-colors-text-black font-body-xs-semi-bold mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <b className="flex-1 relative inline-block max-w-full">Call Type</b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[59px] pl-0 box-border gap-[8px_16px] min-h-[73px] mq1425:pr-[29px] mq1425:box-border">
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SFC"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="SFC"
              checked={checkedItems["SFC"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[84px]">
              SFC ($99.72)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SOURCE"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="SOURCE"
              checked={checkedItems["SOURCE"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[117px]">
              SOURCE ($121.20)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Assessor_Visit"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Assessor_Visit"
              checked={checkedItems["Assessor_Visit"]}
              onChange={handleCheckboxChange}
            />

            <div className="relative inline-block min-w-[117px]">
              Assessor Visit ($50)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Call_Test"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Call_Test"
              checked={checkedItems["Call_Test"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
              Call Test ($30)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Client_Billing"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Client_Billing"
              checked={checkedItems["Client_Billing"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[116px]">
              Client Billing ($18)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Community_Shift"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Community_Shift"
              checked={checkedItems["Community_Shift"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative">Community Shift ($40)</div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SFC"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              type="checkbox"
              name="SFC"
              checked={checkedItems["SFC"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[84px]">
              SFC ($99.72)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SOURCE"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="SOURCE"
              checked={checkedItems["SOURCE"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[117px]">
              SOURCE ($121.20)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Assessor_Visit"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Assessor_Visit"
              checked={checkedItems["Assessor_Visit"]}
              onChange={handleCheckboxChange}
            />

            <div className="relative inline-block min-w-[117px]">
              Assessor Visit ($50)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Call_Test"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Call_Test"
              checked={checkedItems["Call_Test"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
              Call Test ($30)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Client_Billing"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Client_Billing"
              checked={checkedItems["Client_Billing"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[116px]">
              Client Billing ($18)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Community_Shift"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Community_Shift"
              checked={checkedItems["Community_Shift"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative">Community Shift ($40)</div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SFC"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              type="checkbox"
              name="SFC"
              checked={checkedItems["SFC"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[84px]">
              SFC ($99.72)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["SOURCE"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="SOURCE"
              checked={checkedItems["SOURCE"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative inline-block min-w-[117px]">
              SOURCE ($121.20)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Assessor_Visit"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Assessor_Visit"
              checked={checkedItems["Assessor_Visit"]}
              onChange={handleCheckboxChange}
            />

            <div className="relative inline-block min-w-[117px]">
              Assessor Visit ($50)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Call_Test"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Call_Test"
              checked={checkedItems["Call_Test"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[95px]">
              Call Test ($30)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Client_Billing"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Client_Billing"
              checked={checkedItems["Client_Billing"]}
              onChange={handleCheckboxChange}
            />
            <div className="[text-decoration:none] relative text-[inherit] inline-block min-w-[116px]">
              Client Billing ($18)
            </div>
          </div>
          <div
            className={`flex flex-row items-center justify-start gap-[6px] ${
              checkedItems["Community_Shift"] ? "text-blue-500" : "text-black"
            }`}
          >
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
              name="Community_Shift"
              checked={checkedItems["Community_Shift"]}
              onChange={handleCheckboxChange}
            />
            <div className="relative">Community Shift ($40)</div>
          </div>
        </div>
        <div id="addshift-date-time-dv" className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px] mt-5">
          <InputsNew
            label="Make Effective Date From"
            contentPlaceholder="05-17-2021"
            type="datetime-local"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full text-surface-primary-surface mq1425:flex-wrap mt-3">
          <div id="cts-full-width" className="flex-1 flex flex-row flex-wrap items-center justify-start py-5 px-0 box-border min-w-[128px] max-w-[322px]">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="checkbox"
              />
              <div className="relative inline-block min-w-[106px]">
                Change Bill Rate
              </div>
            </div>
          </div>
          <div id="cts-full-width" className="flex-1 flex flex-row flex-wrap items-center justify-start min-w-[322px] max-w-full text-colors-text-black ml-8">
            <div className="w-[322px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
              {/* <b className="self-stretch relative font-semibold">Bill Rate</b>
                        <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
                            <input
                                className="w-full [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 flex flex-row items-center justify-start font-body-xs-semi-bold text-sm text-gray min-w-[174px]"
                                placeholder="Bill Rate"
                                type="text"
                            />
                        </div> */}
              <InputsNew
                label="Bill Rate"
                contentPlaceholder="Bill Rate"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
          <button
            className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue"
            onClick={HandlegoBack}
          >
            <span className="[text-decoration:none] relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
              Cancel
            </span>
          </button>
          <button
            className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue"
            onClick={handleClick}
          >
            <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAddPaymentTerm;
