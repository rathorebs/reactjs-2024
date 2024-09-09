import { FunctionComponent } from "react";
import InputsNew from "../../../Common/InputsNew";
import InputsDropdown from "../../../Common/InputsDropdown";

const timeOptions = ["AM", "PM"];
const clientOptions = ["White,Rachel", "White,Rachel"];

const EditShift: FunctionComponent = () => {

    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <div id="addshift-form-dv"
            className={`self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-left text-sm text-colors-text-black font-body-xs-semi-bold mq825:pt-[21px] mq825:pb-[21px] mq825:box-border `}
        >
            <div className="w-full flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                <p className="self-stretch relative font-semibold"><b>Client</b></p>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                        <input
                            className="w-full [border:none] [outline:none] bg-[transparent] flex-1 flex flex-row items-center justify-start max-w-full"
                            placeholder=" White, Rachel"
                            type="text"
                        />
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <p className="self-stretch relative"><b>prior authorization</b></p>
                <div id="cts-fullwidth-input" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[728px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq825:pr-[182px] mq825:box-border mq1400:pr-[364px] mq1400:box-border">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <p className="relative inline-block min-w-[67px]"><b>Start Date</b></p>
                        <p className="relative inline-block min-w-[80px]">
                            04-29-2024
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <p className="relative inline-block min-w-[59px]"><b>End Date</b></p>
                        <p className="relative inline-block min-w-[80px]">
                            04-29-2024
                        </p>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[80px]">
                        <p className="relative"><b>Authorized Hours per week </b></p>
                        <p className="relative inline-block min-w-[18px]">
                            20
                        </p>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <b className="self-stretch relative font-bold">Anticipated Schedule </b>
                <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="relative">
                        Monday, Wednesday, Friday - 9 am to 2 pm, 5 hrs each day
                    </div>
                </div>
            </div>
            <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[476px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq825:pr-[119px] mq825:box-border mq1400:pr-[238px] mq1400:box-border">
                <InputsNew label="Start Date*" contentPlaceholder="" type="datetime-local" />
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                    <InputsNew label="Time" contentPlaceholder="09" type="text" />
                    <div className="flex-1 flex flex-row items-center justify-start">
                        <InputsNew label="" contentPlaceholder="30" type="text" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                        <InputsDropdown label="" placeHolder="AM" options={timeOptions} />
                    </div>
                </div>
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">

                    <InputsNew label="Duration" contentPlaceholder="5" type="text" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">

                        <InputsNew label="" contentPlaceholder="00" type="text" />
                    </div>
                </div>
            </div>
            <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[708px] pl-0 box-border gap-[16px] max-w-full text-text-text-secondary mq450:pr-5 mq450:box-border mq825:pr-[177px] mq825:box-border mq1400:pr-[354px] mq1400:box-border">
                <InputsNew label="End Date*" contentPlaceholder="" type="datetime-local" />
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                    <InputsNew label="Time" contentPlaceholder="09" type="text" />
                    <div className="flex-1 flex flex-row items-center justify-start">
                        <InputsNew label="" contentPlaceholder="30" type="text" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                        <InputsDropdown label="" placeHolder="AM" options={timeOptions} />
                    </div>
                </div>
            </div>
            <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[16px_14px] max-w-full">
                <InputsDropdown label="Caregiver" placeHolder="White,Rachel" options={clientOptions} />
                <div className="flex-[0.9827] rounded-lg flex flex-row items-center justify-start p-2 box-border min-w-[370px] max-w-full">
                    <p className="m-0 flex-1 relative inline-block max-w-full">
                        She is living 3 miles away from White, Rachel and speaks Spanish.
                    </p>
                </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq825:pl-[246px] mq825:box-border mq1400:pl-[492px] mq1400:box-border">
                <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
                    <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
                        Cancel
                    </span>
                    <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/post-icon.svg"
                    />
                </button>
                <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={handleClick}>
                    <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
                        Save
                    </span>
                    <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/post-icon1.svg"
                    />
                </button>
            </div>
        </div>
    );
};

export default EditShift;
