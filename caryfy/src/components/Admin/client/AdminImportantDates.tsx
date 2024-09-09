import { FunctionComponent } from "react";
import InputsNew from "../../Common/InputsNew";

const AdminImportantDates: FunctionComponent = () => {
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <form id="add-infofrm-blg"
            className="m-0 self-stretch  relative rounded-radius-radius-lg bg-surface-bg-blue max-w-full mq1425:h-auto mq1425:min-h-[296] pb-5"
           >
            <div className="mb-5">
                <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start mb-5 mt-5 py-0 pr-1 pl-5 box-border gap-[16px_14.7px] ">
                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Date of Referral" contentPlaceholder="" type="datetime-local" />
                    </div>
                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Date of Initial Contact" contentPlaceholder="" type="datetime-local" />
                    </div>
                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Date of Admission" contentPlaceholder="" type="datetime-local" />
                    </div>
                </div>
                <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-1 pl-5 box-border gap-[16px_14.7px] max-w-full">

                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Start of Case" contentPlaceholder="" type="datetime-local" />
                    </div>
                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Discharge Date" contentPlaceholder="" type="datetime-local" />
                    </div>
                    <div className="w-[380px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                        <InputsNew label="Expected Reassessment Date" contentPlaceholder="" type="datetime-local" />
                    </div>
                </div>
            </div>
            <div  className="self-stretch flex flex-row items-center justify-end py-0 pr-5 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
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
        </form>
    );
};

export default AdminImportantDates;
