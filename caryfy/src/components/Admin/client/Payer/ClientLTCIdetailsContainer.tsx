import { FunctionComponent } from "react";
import InputsDropdown from "../../../Common/InputsDropdown";
import InputsNew from "../../../Common/InputsNew";
import Table from "../../../Common/Table";

const clientoptions = ["White, Rachel", "Black, Rachel"];

interface DataRow {
  ' Modified On': string;
  ' Modified By': string;
}
const columns: (keyof DataRow)[] = [' Modified On', ' Modified By'];
const data: DataRow[] = [
  { ' Modified On': '', ' Modified By': '' }
];

const ClientLTCIdetailsContainer: FunctionComponent = () => {
  function handleClick(){
    alert("Button Clicked");
  }

  return (
    <form id="ltc-client-form"
      className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-5 mq950:pb-5 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border`}
    >
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <InputsDropdown label={"LTCI Carrier *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"LTCI Policy Type *"} placeHolder={"select"} options={clientoptions} />
        <InputsNew label={"LTCI Policy Number *"} contentPlaceholder={""} type={"text"} />
        <InputsNew label={"LTCI Claim Number *"} contentPlaceholder={""} type={"text"} />
      </div>
      <InputsDropdown label={"Benefit Allowance *"} placeHolder={"select"} options={clientoptions} />
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <InputsDropdown label={"Unlimited Benefit *"} placeHolder={"select"} options={clientoptions} />
        <InputsNew label={"Benefit Multiplier *"} contentPlaceholder={""} type={"text"} />
        <InputsNew label={"Elimination Period Days *"} contentPlaceholder={""} type={"text"} />
        <div id="cts-width-full"  className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
            Lifetime Max Benefit ($) *
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0">
            <div className="flex-1 flex flex-row items-center justify-start">
              <div className="flex-1 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <InputsDropdown label={"Elimination Period Details *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Inflation Rate *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Inflation Type *"} placeHolder={"select"} options={clientoptions} />
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Anniversary Date *"} contentPlaceholder={""} type={"datetime-local"} />
        </div>
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]">
        <InputsDropdown label={"Restoration Of Benefits *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Premium Waiver *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Respite Care Details *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Home Modification *"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="pr-0-cts self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <InputsDropdown label={"Functional Limitation Claim"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Daily HRS Approved By Carrier"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"ADL Type Policy Requires"} placeHolder={"select"} options={clientoptions} />
      </div>
      <InputsDropdown label={"Number Of LTCI Policies *"} placeHolder={"select"} options={clientoptions} />
      <div id="cts-width-full" className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <InputsNew label={"LTCI Policy Notes"} contentPlaceholder={"Add Notes"} type={"text"} />
      </div>
      <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
          <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
            Cancel
          </span>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={handleClick}>
          <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
            Save
          </span>
        </button>
      </div>
      <Table columns={columns} initialData={data} showActionColumn={true} />
    </form>
  );
};

export default ClientLTCIdetailsContainer;
