import { FunctionComponent } from "react";
import InputsDropdown from "../../../Common/InputsDropdown";
import InputsNew from "../../../Common/InputsNew";
import otlclose from "../../../../assets/Admin/otlclose.svg"
import Table from "../../../Common/Table";

const clientoptions = ["White, Rachel", "Black, Rachel"];

const ClientLTCIClaimsContainer: FunctionComponent = () => {
  interface DataRow {
    ' Modified On': string;
    ' Modified By': string;
  }
  const columns: (keyof DataRow)[] = [' Modified On', ' Modified By'];
  const data: DataRow[] = [
    { ' Modified On': '', ' Modified By': '' }
  ];
  return (
    <form id="client-itcclaims-blg"
       className={`m-0 self-stretch min-h-[1066px] relative rounded-radius-radius-lg bg-surface-bg-blue max-w-full p-8`}
    >
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"LTCI Claims Documents"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"HIPAA Form Signed"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Assignment Of Benefits Signed"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"RN Assessment Done"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Doctors Order On File"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Cognitive Testing"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"Initial Claim Submitted *"} placeHolder={"select"} options={clientoptions} />
        <InputsNew label={"Initial Claim Submitted (Date)"} contentPlaceholder={""} type={"datetime-local"} />
        <InputsNew label={"Claim Approved Thru (Date)"} contentPlaceholder={""} type={"datetime-local"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"Initial Claim Status"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Claims Appeal"} placeHolder={"select"} options={clientoptions} />
        <InputsNew label={"Date Appeal Submitted"} contentPlaceholder={"06-05-2024"} type={"datetime-local"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"Call Type *"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Shift Type *"} placeHolder={"select"} options={clientoptions} />
        <InputsNew label={"Hourly Billed Rate ($) *"} contentPlaceholder={"06-05-2024"} type={"text"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mb-7">
        <InputsDropdown label={"Functional Limitation Claim"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Daily HRS Approved By Carrier"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"ADL Type Policy Requires"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <div className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[px] max-w-[322px] mb-7">
          <InputsDropdown label={"ADL's Approved By Carrier"} placeHolder={"Choose"} options={clientoptions} />
          <div className="flex flex-row items-start justify-start  mt-0 pt- pb-2 pr-[1089px] pl-5 gap-[16px]">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[51px]">
                  Bathing
                </div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={otlclose}
              />
            </div>
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <div className="flex flex-row items-center justify-start">
                <div className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[58px]">
                  Dressing
                </div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={otlclose}
              />
            </div>
          </div>
          
        </div>
      </div>
      <div id="cts-width-full" className=" self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-5 box-border gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
            <InputsNew label={" Claims Notes"} contentPlaceholder={"Add Notes"} type={"text"} />
          </div>
      <div id="client-itcclaims-btn" className="flex flex-row items-center justify-end py-0 pr-0  box-border gap-[8px] max-w-full mq1425:flex-wrap mt-7">
        <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue ">
          <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
            Cancel
          </span>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue">
          <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
            Save
          </span>
        </button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-5 box-border gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border mt-7">
        <Table columns={columns} initialData={data} showActionColumn={true} />
      </div>
    </form>
  );
};

export default ClientLTCIClaimsContainer;
