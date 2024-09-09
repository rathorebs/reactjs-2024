import { FunctionComponent } from "react";
import InputsNew from "../../../Common/InputsNew";
import InputsDropdown from "../../../Common/InputsDropdown";

const clientoptions = ["White, Rachel", "Black, Rachel"];

const ClientPrivatePayContainer: FunctionComponent = () => {
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <form id="va-form-blg"
      className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-[21px] mq950:pb-[21px] mq950:box-border`}
    >
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <InputsNew label={"VA Client ID Number *"} contentPlaceholder={""} type={"text"} />
        <InputsNew label={"Authorization Number"} contentPlaceholder={""} type={"text"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <InputsNew label={"Authorization Date Start of Care"} contentPlaceholder={""} type={"datetime-local"} />
        <InputsNew label={"Authorization Date Ends"} contentPlaceholder={""} type={"datetime-local"} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <InputsNew label={"Monthly Hrs Approved (Not Units)"} contentPlaceholder={""} type={"text"} />
        <InputsNew label={"VA Location"} contentPlaceholder={""} type={"text"} />
        <InputsDropdown label={"Case Manager"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start w-80 q450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] cts-pr-crts">
        <InputsNew label={"Client Account No.*"} contentPlaceholder={""} type={"text"} />
      </div>
      <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
          <div className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
            Cancel
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={handleClick}>
          <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
            Save
          </div>
        </button>
      </div>
    </form>
  );
};

export default ClientPrivatePayContainer;
