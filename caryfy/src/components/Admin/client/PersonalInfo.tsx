import { ChangeEvent, FunctionComponent, useRef } from "react";
import icon from '../../../assets/Admin/icon.svg'
import icon1 from '../../../assets/Admin/icon-1.svg'
import InputsNew from "../../Common/InputsNew";
import InputsDropdown from "../../Common/InputsDropdown";

const maritalOptions = ["Single", "Married", "Divorced"];
const LanguageOptions = ["English", "German", "Spanish"];

const PersonalInfo: FunctionComponent = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            // Handle the uploaded file here
            console.log('File uploaded:', file);
            // we can also upload the file to a server or display a preview
        }
    };

    function handleIconClick() {
        fileInputRef.current?.click();
    };

    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <form id="persnal_info-frm-dv"
            className="m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-5 mq950:pb-5 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border"
        >
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <p className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
                        <b>Personal Information</b>
                    </p>
                </div>
                <div id="cts-inner-fullwidth"  className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[24px_22px] max-w-full">
                    <div id="personal-info-cts-dv" className="flex-1 flex flex-col items-start justify-center gap-[24px] min-w-[335px] max-w-full">
                        <div id="cts-fullwidth" className="self-stretch flex flex-row items-start justify-start gap-[16px] mq950:flex-wrap">

                            <InputsNew label="First Name*" contentPlaceholder="First Name*" type="text" />
                            <InputsNew label="Last Name*" contentPlaceholder="Last Name*" type="text" />
                        </div>
                        <div id="cts-fullwidth" className="gender-blg self-stretch flex flex-row items-end justify-start gap-[16px] max-w-full mq950:flex-wrap">

                            <InputsNew label="SSN" contentPlaceholder="SSN" type="text" />
                            <div className="w-[280.7px] flex flex-row items-start justify-start py-0 pr-[66px] pl-0 box-border gap-[16px] mq450:pr-5 mq450:box-border">
                                <div className="flex flex-row items-center justify-start gap-[6px]">
                                    <input
                                        className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                        type="radio"
                                        name="radioGroup-1"
                                    />
                                    <label className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[32px]">
                                        Male
                                    </label>
                                </div>
                                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                                    <input
                                        className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                        type="radio"
                                        name="radioGroup-1"
                                    />
                                    <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[46px]">
                                        Female
                                    </label>
                                </div>
                                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                                    <input
                                        className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                        type="radio"
                                        name="radioGroup-1"
                                    />
                                    <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[38px]">
                                        Other
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[0.9677] rounded bg-surface-bg-blue flex flex-col items-center justify-center p-0 box-border min-w-[335px] max-w-full">
                        <div id="upload-img-dv" className="self-stretch rounded bg-surface-bg-primary flex flex-col items-center justify-center py-[35px] px-[9px] border-[1px] border-dashed border-neutral-200">
                            <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                                <img
                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={icon}
                                />
                                <label className="self-stretch relative text-sm capitalize font-body-xs-semi-bold text-colors-text-black text-center">
                                    Agency Logo Upload
                                </label>
                                <div className="rounded bg-surface-primary-surface flex flex-row items-center justify-center p-1.5 cursor-pointer" onClick={handleIconClick}>
                                    <img className="h-5 w-5 relative" alt="" src={icon1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept="image/*"
                />

            </div>
            <div id="cts-fullwidth"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
                <InputsNew label="Email" contentPlaceholder="Email" type="text" />
                <InputsNew label="Mobile Number" contentPlaceholder="Mobile Number" type="text" />
                <InputsNew label="Home Number" contentPlaceholder="Home Number" type="text" />
            </div>
            <div id="billing-cts-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
                <div className="w-[322px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                    <InputsNew label="Billing Address" contentPlaceholder="New De" type="text" />
                    <div id="billing-cts-dv"  className="w-full rounded bg-surface-bg-primary box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-[8px] max-w-[322px] border-[1px] border-solid border-surface-border">
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-2"
                            />
                            <label className="flex-1 relative text-sm capitalize text-colors-text-black text-left">
                                <b className="font-body-xs-semi-bold">New De</b>
                                <span className="font-body-xs-semi-bold">
                                    lhi, Delhi, India
                                </span>
                            </label>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-2"
                            />
                            <label className="flex-1 relative text-sm capitalize text-colors-text-black text-left">
                                <b className="font-body-xs-semi-bold">New De</b>
                                <span className="font-body-xs-semi-bold">
                                    lhi, Ajmeri Gate, New Delhi, Delhi
                                </span>
                            </label>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                            <input
                                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="radio"
                                name="radioGroup-2"
                            />
                            <label className="flex-1 relative text-sm capitalize text-colors-text-black text-left">
                                <b className="font-body-xs-semi-bold">New De</b>
                                <span className="font-body-xs-semi-bold">
                                    lhi, 193, Ajmeri Gate, New Delhi
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                <p className="my-0 self-stretch relative text-base font-body-xs-semi-bold text-colors-text-black text-left">
                    Care Delivery Address
                </p>
                <div id="care_dlr-_address" className="self-stretch flex flex-row items-center justify-start py-0 pr-[268px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[67px] mq950:box-border mq1425:flex-wrap mq1425:pr-[134px] mq1425:box-border">
                    <div className="flex flex-row items-center justify-start py-5 px-0 gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-3"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left">
                            Same as Billing Address
                        </label>
                    </div>
                    <div className="flex flex-row items-center justify-start py-5 px-0 gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-3"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                            Other than Billing Address
                        </label>


                    </div>
                    <div className="flex flex-row items-center justify-start py-5 px-0 gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioGroup-3"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left">
                            Other Contact Care Delivery Address
                        </label>
                    </div>
                    {/* <Inputs1
                        label="Care Delivery Address"
                        contentPlaceholder="Care Delivery Address"
                        propMinWidth="191px"
                        propMinWidth1="174px"
                    /> */}
                    <InputsNew label="Care Delivery Address" contentPlaceholder="Care Delivery Address" type="text" />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div id="cts-fullwidth"  className="self-stretch flex flex-row items-start justify-start max-w-full">
                    <p className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
                     <b> Other Information</b>
                    </p>
                </div>
                <div id="billing-cts-dv"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
                    {/* <Inputs label="Marital Status" hint="Marital Status" />
                    <Inputs1
                        label="Spouse Name"
                        contentPlaceholder="Spouse Name"
                        propMinWidth="191px"
                        propMinWidth1="174px"
                    /> */}
                    <InputsDropdown label="Marital Status" placeHolder="Marital Status" options={maritalOptions} />
                    <InputsNew label="Spouse Name" contentPlaceholder="Spouse Name" type="text" />
                </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <p className="self-stretch relative text-base font-body-xs-semi-bold text-colors-text-black text-left">
                    <b>Is Veteran</b>
                </p>
                <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[1073px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[268px] mq950:box-border mq1425:flex-wrap mq1425:pr-[536px] mq1425:box-border">
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioFroup-4"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[23px]">
                            Yes
                        </label>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioFroup-4"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[50px]">
                            Spouse
                        </label>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[6px]">
                        <input
                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                            type="radio"
                            name="radioFroup-4"
                        />
                        <label className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[18px]">
                            No
                        </label>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
                {/* <Inputs
                    label="Language"
                    hint="Choose"
                    propFlex="unset"
                    propWidth="322px"
                /> */}
                <InputsDropdown label="Language" placeHolder="Choose" options={LanguageOptions} />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                {/* <b className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
                    Office Notes
                </b>
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-start justify-start pt-2.5 px-4 pb-[47px] border-[1px] border-solid border-surface-border">
                    <input
                        className="w-full [border:none] [outline:none] font-body-xs-semi-bold text-sm bg-[transparent] h-[19px] relative text-text-text-secondary text-left inline-block p-0"
                        placeholder="Add Notes"
                        type="text"
                    />
                </div> */}
                <InputsNew label="Office Notes" contentPlaceholder="Add Note" type="text" />
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
        </form>
    );
};

export default PersonalInfo;
