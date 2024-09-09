import { ChangeEvent, FunctionComponent, useRef } from "react";
import InputsNew from "../../Common/InputsNew";
import InputsDropdown from "../../Common/InputsDropdown";
import icon from "../../../assets/Admin/icon.svg"
import icon1 from "../../../assets/Admin/icon-1.svg"

const clientoptions = ["White, Rachel", "Black, Rachel"];

const CaregiverPersonalInfoContainer: FunctionComponent= () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleClick(){
   alert("Button Clicked");
  }
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

  return (
    <form id="caregiver_personalinfo-form"
      className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-5 mq950:pb-5 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border `}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <b className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
            Personal Information
          </b>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[24px_22px] max-w-full">
          <div id="cts-width-full" className="flex-1 flex flex-col items-start justify-center gap-[24px] min-w-[335px] max-w-full">
            <div id="cts-width-full" className="self-stretch flex flex-row items-start justify-start gap-[16px] mq950:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[196px]">
                <InputsNew label={"First Name*"} contentPlaceholder={"  First Name*"} type={""}/>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[196px]">
                  <InputsNew label={"Last Name*"} contentPlaceholder={"Last Name*"} type={""}/>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-end justify-start gap-[16px] max-w-full mq950:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[209px] max-w-full">
                 <InputsNew label={"SSN"} contentPlaceholder={"SSN"} type={""}/>
              </div>
              <div className="w-[280.7px] flex flex-row items-start justify-start py-0 pr-[66px] pl-0 box-border gap-[16px] mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[32px]">
                    Male
                  </label>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[46px]">
                    Female
                  </label>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[38px]">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="csts-p-dv flex-[0.9677] rounded bg-surface-bg-blue flex flex-col items-center justify-center p-2.5 box-border min-w-[335px] max-w-full">
            <div className="self-stretch rounded bg-surface-bg-primary flex flex-col items-center justify-center py-[35px] px-[9px] border-[1px] border-dashed border-neutral-200">
              <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={icon}
                />
                <div className="self-stretch relative text-sm capitalize font-body-xs-semi-bold text-colors-text-black text-center">
                  Agency Logo Upload
                </div>
                <button className="cursor-pointer [border:none] p-1.5 bg-surface-primary-surface rounded flex flex-row items-center justify-center"  onClick={handleIconClick}>
                  <img className="h-5 w-5 relative" alt="" src={icon1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Email"} contentPlaceholder={"Email"} type={""}/>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Mobile Number"} contentPlaceholder={"Mobile Number"} type={""}/>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew label={"Home Number"} contentPlaceholder={"Home Number"} type={""}/>
        </div>
      </div>
      <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <InputsDropdown label={"Location"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"Country*"} placeHolder={"select"} options={clientoptions} />
        <InputsDropdown label={"County*"} placeHolder={"select"} options={clientoptions} />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:flex-wrap mq1425:pr-[301px] mq1425:box-border">
          <div id="cts-width-full"  className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
            <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
              Enrolment Status
            </div>
            <div className="w-full flex flex-col items-start justify-start max-w-[322px]">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[83px]">
                  Independent
                </label>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
            <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
              Caregiver ID
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0 box-border max-w-full">
              <div className="flex-1 flex flex-row items-center justify-start max-w-full">
                <div className="flex-1 relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block max-w-full">
                  61232807
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <b className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
            Other Information
          </b>
        </div>
        <div id="cts-width-full"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
          <InputsDropdown label={"Marital Status"} placeHolder={"select"} options={clientoptions} />
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
            {/* <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
              Spouse Name
            </div>
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 flex flex-row items-center justify-start font-body-xs-semi-bold text-sm text-text-text-secondary min-w-[174px]"
                placeholder="Spouse Name"
                type="text"
              />
            </div> */}
            <InputsNew label={"Spouse Name"} contentPlaceholder={"Spouse Name"} type={"text"}/>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <b className="self-stretch relative text-base font-body-xs-semi-bold text-colors-text-black text-left">
          Is Veteran
        </b>
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[1073px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq950:pr-[268px] mq950:box-border mq1425:flex-wrap mq1425:pr-[536px] mq1425:box-border">
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <input
              className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="radio"
              name="radiogroup-2"
            />
            <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[50px]">
             Yes
            </label>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <input
              className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="radio"
              name="radiogroup-2"
            />
            <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[50px]">
              Spouse
            </label>
          </div>
          <div className="flex flex-row items-center justify-start gap-[6px]">
            <input
              className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
              type="radio"
              name="radiogroup-2"
            />
             <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[50px]">
             No
            </label>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div id="cts-width-full" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
          {/* <Inputs2 label="Hire Date*" />
          <Inputs2 label="Termination Date" /> */}
          <InputsNew label={"Hire Date*"} contentPlaceholder={""} type={"datetime-local"}/>
          <InputsNew label={"Termination Date"} contentPlaceholder={"Spouse Name"} type={"datetime-local"}/>
        </div>
      </div>
      <div id="cts-width-full" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <div id="cts-width-full" className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[129px] max-w-full">
          <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
            Referred By
          </div>
          <div className="w-full flex flex-row items-start justify-start py-0 pr-[35px] pl-0 box-border gap-[8px] max-w-[322px] mq950:flex-wrap">
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="radio"
                name="radiogroup3"
              />
              <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[39px]">
                Client
              </label>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="radio"
                name="radiogroup3"
              />
              <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block min-w-[63px]">
                Caregiver
              </label>
            </div>
            <div className="flex flex-row items-center justify-start gap-[6px]">
              <input
                className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                type="radio"
                name="radiogroup3"
              />
              <label className="cursor-pointer relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-left inline-block min-w-[103px]">{`Referral  Source `}</label>
            </div>
          </div>
        </div>
        {/* <Inputs1 label="Referral " hint="Choose" /> */}
        <InputsDropdown label={"Referral"} placeHolder={"Select"} options={clientoptions}/>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        {/* <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
          Office Notes
        </div>
        <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-start justify-start pt-2.5 px-4 pb-[47px] border-[1px] border-solid border-surface-border">
          <input
            className="w-[68px] [border:none] [outline:none] font-body-xs-semi-bold text-sm bg-[transparent] h-[19px] relative text-text-text-secondary text-left inline-block p-0"
            placeholder="Add Notes"
            type="text"
          />
        </div> */}
        <InputsNew label={"Office Notes"} contentPlaceholder={"Add Notes"} type={"text"}/>
      </div>
      <footer className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
        <div id="cts-width-full"  className="w-[322px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
          {/* <div className="self-stretch relative text-sm font-semibold font-body-xs-semi-bold text-colors-text-black text-left">
            ADP/Payroll ID
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] h-[19px] flex-1 flex flex-row items-center justify-start font-body-xs-semi-bold text-sm text-text-text-secondary min-w-[174px]"
              placeholder="-"
              type="text"
            />
          </div> */}
          <InputsNew label={"ADP/Payroll ID"} contentPlaceholder={""} type={"text"}/>
        </div>
      </footer>
      <div id="btn-cts-row" className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
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
      <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
            />
    </form>
    
  );
};

export default CaregiverPersonalInfoContainer;
