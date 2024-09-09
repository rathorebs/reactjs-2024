import { FunctionComponent, useState } from "react";
import InputsNew from "../../../Common/InputsNew";
import InputsDropdown from "../../../Common/InputsDropdown";
import Row from "./Row";
import icons from '../../../../assets/Admin/icons.svg'
import icons1 from "../../../../assets/Admin/icons-1.svg";
import ScheduleTable from "./ScheduleTable";
import ClientMonthlyHrsRow from "./ClientMonthlyHrsRow";


const clientoptions = ["White, Rachel", "Black, Rachel"];

const ClientMedicaidPayerGroupContainer: FunctionComponent = () => {
  const[open,setOpen]=useState(false);

  function handleClick(){
    alert("Button Clicked");
  }

  function toggleMonthlyHrsTable(){
    setOpen(!open);
  }
  // function hideMonthlyhrs(){
  //   setOpen(true);
  // }

  return (
    <form id="medical-payergroup-form"
      className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-5 mq950:pb-5 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border`}
    >
      <div id="pr-cts-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <div id="cts-width-full"  className="h-[70px] flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Medicaid ID*"} contentPlaceholder={"Medicaid ID*"} type={"text"} />
        </div>
        <div id="cts-width-full" className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={" Authorization Number"} contentPlaceholder={""} type={"text"} />
        </div>
        <InputsDropdown label={"Medicaid Diagnosis*"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <InputsNew label={"Authorization Start Date"} contentPlaceholder={"06-04-24"} type={"datetime-local"} />
        <InputsNew label={"Authorization End Date"} contentPlaceholder={"06-04-24"} type={"datetime-local"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <div className="h-[70px] flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Total Authorized Hours"} contentPlaceholder={""} type={"text"} />
        </div>
        <div className="h-[70px] flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Weekly Authorized Hours"} contentPlaceholder={""} type={"text"} />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
            Monthly Hrs Approved
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 pr-[13px] pl-spacing-2 border-[1px] border-solid border-surface-border">
            <div className="flex-1 flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
              <div className="flex-1 relative text-sm font-body-xs-semi-bold text-text-text-secondary text-left inline-block min-w-[5px]">
                5
              </div>
              <img className="h-4 w-4 relative" alt="" src={icons} onClick={toggleMonthlyHrsTable} />
              <img className="h-4 w-4 relative" alt="" src={icons1} />
            </div>
          </div>
        </div>
        <div className="h-[70px] flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Clients Responsibility/Month ($)"} contentPlaceholder={""} type={"text"} />
        </div>
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <InputsDropdown label={"Disaster Level"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Internal Care Manager"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[129px] max-w-[322px]">
          <b className="self-stretch relative text-base font-body-xs-semi-bold text-colors-text-black text-left">{`Is this client a MAO or PMAO? `}</b>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-48 pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq950:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="radio"
                name="radioGroup-1"
              />
              <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[31px]">
                MAO
              </label>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="radio"
                name="radioGroup-1"
              />
              <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[39px]">
                PMAO
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center py-[25.5px] px-0 box-border min-w-[129px] max-w-[322px]">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <input
              className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="checkbox"
            />
            <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left">
              {" "}
              Is this client a rebroker?
            </label>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <InputsNew label={"Notes"} contentPlaceholder={"Add Notes"} type={"text"} />
      </div>
      {open&&
      <ClientMonthlyHrsRow handleClick={toggleMonthlyHrsTable} />
}
      <div className="self-stretch rounded-lg bg-surface-bg-primary flex flex-col items-start justify-start">
      <ScheduleTable/>
      </div>
     
      <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
          <div className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
            Cancel
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue"  onClick={handleClick}>
          <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
            Save
          </div>
        </button>
      </div>
    </form>
  )
}


export default ClientMedicaidPayerGroupContainer;
