import { FunctionComponent } from "react";
import InputsDropdown from "../../../Common/InputsDropdown";
import InputsNew from "../../../Common/InputsNew";
import otlwarning from "../../../../assets/ask-cary/otlwarning.svg";

const clientOptions = ["White,Rachel", "White,Rachel"];
const callTypeOptions = ["CCSP", "VA", "Medicaid"];
const timeOptions = ["AM", "PM"];


const AddShift: FunctionComponent = () => {

    function handleClick() {
        alert("Button clicked!");
    }


    return (
        <form id="addshift-form-dv"
            className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq825:pt-5 mq825:pb-5 mq825:box-border mq1400:pt-[21px] mq1400:pb-[21px] mq1400:box-border`}
        >
            <InputsDropdown label="Client" placeHolder="White,Rachel" options={clientOptions} />
            <InputsDropdown label="Call Type" placeHolder="CCSP" options={callTypeOptions} />
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <p className="my-0 self-stretch relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                    <b> prior authorization</b>
                </p>
                <div id="cts-block-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[728px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq825:pr-[182px] mq825:box-border mq1400:pr-[364px] mq1400:box-border">
                    <div id="" className="flex flex-row items-center justify-start gap-[8px]">
                        <p className="my-0 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[67px]">
                            <b>  Start Date</b>
                        </p>
                        <p className="my-0 relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[80px]">
                            04-29-2024
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                        <p className="my-0 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[59px]">
                            <b>End Date</b>
                        </p>
                        <p className="my-0 relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[80px]">
                            04-29-2024
                        </p>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[80px]">
                        <p className="my-0 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">{`Authorized Hours per week `}</p>
                        <p className="my-0 relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[18px]">
                            <b>  20</b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <p className="self-stretch relative text-sm font-bold font-body-xs-semi-bold text-colors-text-black text-left"><b>{`Anticipated Schedule `}</b></p>
                <div className="self-stretch flex flex-row items-center justify-start">
                    <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                        Monday, Wednesday, Friday - 9 am to 2 pm, 5 hrs each day
                    </p>
                </div>
            </div>
            <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-1 pl-0 box-border gap-[16px_14.7px] max-w-full">

                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                    <InputsNew label="Start Date*" contentPlaceholder="" type="datetime-local" />
                </div>
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">

                    <InputsNew label="Time" contentPlaceholder="09" type="text" />

                    <div className="flex-1 flex flex-row items-center justify-start">

                        <InputsNew label="" contentPlaceholder="30" type="text" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">

                        <InputsDropdown label="" placeHolder="AM" options={timeOptions} />
                        {/* </div>  */}
                    </div>
                </div>
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">

                    <InputsNew label="Duration" contentPlaceholder="5" type="text" />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">

                        <InputsNew label="" contentPlaceholder="00" type="text" />
                    </div>
                </div>
                <div className="flex-[0.9652] rounded-lg flex flex-row items-center justify-start p-2 box-border gap-[10px] min-w-[335px] max-w-full mq825:flex-wrap">
                    <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={otlwarning}
                    />
                    <p className="m-0 flex-1 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[247px] max-w-full">{`Your current selection is exceeding allowed monthly hours limit, you may check again before saving the shift allowed - 5.00 hrs, Current selection - 99.00 hrs `}</p>
                    <div className="flex flex-row items-start justify-end gap-[16px]">
                        <div className="h-4 w-[268px] hidden flex-row items-center justify-end gap-[8px]">
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                                alt=""
                            />
                            <div className="self-stretch relative text-base leading-[100%] font-medium font-component-heading3 text-neutrals-text-primary text-left whitespace-nowrap">
                                Infobox title
                            </div>
                        </div>
                        <div className="h-6 w-6 rounded-81xl flex flex-row items-start justify-start p-1 box-border">
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                loading="lazy"
                                alt=""
                                src="/iconsclose.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[370px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq825:pr-[92px] mq825:box-border mq1400:pr-[185px] mq1400:box-border">
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                    <InputsNew label="End Date*" contentPlaceholder="" type="datetime-local" />
                </div>
                <div className="w-[216px] flex flex-row items-end justify-start gap-[8px] min-w-[191px] max-w-[322px]">

                    <InputsNew label="Time" contentPlaceholder="09" type="text" />

                    <div className="flex-1 flex flex-row items-center justify-start">

                        <InputsNew label="" contentPlaceholder="30" type="text" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">

                        <InputsDropdown label="" placeHolder="AM" options={timeOptions} />
                        {/* </div>  */}
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center pt-[25.5px] px-0 box-border min-w-[129px] max-w-[322px]">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                        <input
                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="checkbox"
                        />
                        <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[76px]">
                            Recurrence
                        </p>
                    </div>
                </div>
            </div>
            <div className="self-stretch rounded-radius-md1 bg-surface-bg-primary flex flex-col items-start justify-start p-4 box-border gap-[16px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <p className="self-stretch relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                        <b>Range and Recurrence :</b>
                    </p>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[898px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq825:pr-56 mq825:box-border mq1400:flex-wrap mq1400:pr-[449px] mq1400:box-border">
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-1"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[32px]">
                                Daily
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-1"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[47px]">
                                Weekly
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-1"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[64px]">
                                Bi-Weekly
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-1"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[53px]">
                                Monthly
                            </p>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
                    <div className="flex-1 flex flex-row flex-wrap items-center justify-start py-0 pr-[161px] pl-0 box-border gap-[16px] max-w-full mq825:pr-10 mq825:box-border mq1400:pr-20 mq1400:box-border">
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[52px]">
                                Monday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[55px]">
                                Tuesday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[52px]">
                                Monday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[76px]">
                                Wednesday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[61px]">
                                Thursday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[39px]">
                                Friday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[59px]">
                                Saturday
                            </p>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                            />
                            <p className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[49px]">
                                Sunday
                            </p>
                        </div>
                        <div id="repeat-input-dv" className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                            {/* <input
                className="w-full [border:none] [outline:none] font-semibold font-body-xs-semi-bold text-sm bg-[transparent] self-stretch h-[19px] relative text-colors-text-black text-left inline-block min-w-[193px] p-0"
                placeholder="Repeat in Months"
                type="text"
              /> */}
                            <label htmlFor="repeatMonths" className="block text-sm font-semibold font-body-xs-semi-bold text-colors-text-black">
                                Repeat in Months
                            </label>
                            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <input id="repeatMonths"
                                        className="w-full [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 flex flex-row items-center justify-start font-body-xs-semi-bold text-sm text-text-text-secondary min-w-[43px]"
                                        placeholder="1"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[570px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq825:pr-[142px] mq825:box-border mq1400:pr-[285px] mq1400:box-border">
                    {/* <Inputs label="Start Date*" />
          <Inputs label="End Date*" /> */}
                    <InputsNew label="Start Date*" contentPlaceholder="" type="datetime-local" />
                    <InputsNew label="End Date*" contentPlaceholder="" type="datetime-local" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[1112px] gap-[8px] mq450:pl-5 mq450:box-border mq825:pl-[278px] mq825:box-border mq1400:flex-wrap mq1400:pl-[556px] mq1400:box-border">
                    <div className="rounded-radius-radius-sm bg-surface-bg-primary flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px]">
                        {/* <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/lefticon.svg"
            />
            <div className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
              Cancel
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/lefticon.svg"
            /> */}

                        <button id="status-btn-dv" className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-surface-primary-surface rounded-radius-radius-sm flex flex-row items-center justify-center gap-[4px]" onClick={handleClick}>

                            <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
                                Cancel
                            </span>

                        </button>



                        <button id="status-btn-dv" className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-surface-primary-surface rounded-radius-radius-sm flex flex-row items-center justify-center gap-[4px]" onClick={handleClick}>

                            <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
                                Save
                            </span>

                        </button>
                    </div>
                </div>
            </div>
            <div id="cts-width-full" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[16px_14px] max-w-full">
                {/* <Inputs1
          label="Caregiver"
          hint="Brown, Sarah"
          propWidth="unset"
          propFlex="1"
          propFlexWrap="unset"
        /> */}
                <InputsDropdown label="Caregiver" placeHolder="White,Rachel" options={clientOptions} />
                <div className="flex-[0.9827] rounded-lg flex flex-row items-center justify-start p-2 box-border gap-[10px] min-w-[370px] max-w-full lg:flex-wrap">
                    <p className="flex-1 pt-5 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[331px] max-w-full">
                        She is living 3 miles away from White, Rachel and speaks Spanish.
                    </p>
                    <div className="flex flex-row items-start justify-end gap-[16px]">
                        {/* <div className="h-4 w-[268px] hidden flex-row items-center justify-end gap-[8px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                alt=""
              />
              <div className="self-stretch relative text-base leading-[100%] font-medium font-component-heading3 text-neutrals-text-primary text-left whitespace-nowrap">
                Infobox title
              </div>
            </div> */}
                        <div className="h-6 w-6 rounded-81xl flex flex-row items-start justify-start p-1 box-border">
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0"
                                alt=""
                                src="/iconsclose.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start max-w-full">
                <InputsNew label="Notes" contentPlaceholder="Add Note" type="text" />

            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq825:pl-[246px] mq825:box-border mq1400:pl-[492px] mq1400:box-border">
                <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
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

export default AddShift;
