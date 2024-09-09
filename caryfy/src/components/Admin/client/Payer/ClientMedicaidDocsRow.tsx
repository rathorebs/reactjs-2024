import { FunctionComponent } from "react";
import InputsNew from "../../../Common/InputsNew";
import InputsDropdown from "../../../Common/InputsDropdown";
import attach1 from"../../../../assets/Admin/attach-1.svg"

const clientoptions = ["White, Rachel", "Black, Rachel"];
 interface ClientMedicaidDocsProps{
  onCancel?:any;
 }

const ClientMedicaidDocsRow: FunctionComponent<ClientMedicaidDocsProps>= ({onCancel}) => {
  
  return (
    <div  id="form-medicaid-doc" className="self-stretch bg-surface-bg-primary flex flex-col items-end justify-start p-4 box-border gap-[16px] max-w-full">
      <div id="inner-form-medicaid-doc"
        className={`self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-[419px] pl-0 box-border gap-[16px] max-w-full text-left text-sm text-text-text-secondary font-body-xs-semi-bold mq450:pr-5 mq450:box-border mq950:pr-[104px] mq950:box-border mq1425:pr-[209px] mq1425:box-border`}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Document Name"} contentPlaceholder={""} type={"text"} />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px] text-colors-text-black">
          <InputsDropdown label={"Document Type"} placeHolder={"select"} options={clientoptions} />
        </div>
        <button className="cursor-pointer py-2.5 px-[17px] bg-surface-bg-primary w-[135px] rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] whitespace-nowrap border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src={attach1}
          />
          <div className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[68px]">
            Attach File
          </div>
        </button>
        <div id="ctc-timedate-dv" className="self-stretch flex flex-row  items-start justify-start py-0 pr-[570px] pl-0 box-border gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[142px] mq950:box-border mq1425:pr-[285px] mq1425:box-border max-w-full">
          <InputsNew label={"Start Date"} contentPlaceholder={""} type={"datetime-local"} />
          <InputsNew label={"Expiry Date"} contentPlaceholder={""} type={"datetime-local"} />
        </div>
        <div id="btn-cts-row" className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[1112px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[278px] mq950:box-border mq1425:flex-wrap mq1425:pl-[556px] mq1425:box-border">
          <div className="rounded-radius-radius-sm bg-surface-bg-primary flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]" onClick={onCancel}>
              Cancel
            </button>
          </div>
          <button className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-surface-primary-surface rounded-radius-radius-sm flex flex-row items-center justify-center gap-[4px]"  >
            <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
              Save
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientMedicaidDocsRow;
