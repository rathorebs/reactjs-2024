import { FunctionComponent } from "react";
import InputsNew from "../../Common/InputsNew";
import InputsDropdown from "../../Common/InputsDropdown";
import icon from "../../../assets/icon.svg";
import icon_1 from "../../../assets/icon-1.svg";
import { useHistory } from "react-router-dom";

const PayerInformationSection: FunctionComponent = () => {
  const history = useHistory();

  const HandlegoBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    history.push("/admin_employee_personal_add_payment");
  }

  return (
    <div id="" className="self-stretch rounded-radius-radius-lg bg-light-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-left text-sm text-dark-font font-body-reg mq950:pt-[21px] mq950:pb-[21px] mq950:box-border">
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <b className="flex-1 relative inline-block max-w-full">
            Personal Information
          </b>
        </div>
        <div id="cts_block_respon" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[24px_22px] max-w-full text-sm">
          <div className="flex-1 flex flex-col items-start justify-center gap-[24px] min-w-[335px] max-w-full">
            <div id="inner_dis_blk" className="self-stretch flex flex-row items-start justify-start gap-[16px] mq950:flex-wrap">
              <InputsNew
                label="First Name*"
                contentPlaceholder="First Name*"
                type="text"
              />
              <InputsNew
                label="Last Name*"
                contentPlaceholder="Last Name*"
                type="text"
              />
            </div>
            <div id="inner_dis_blk" className="self-stretch flex flex-row items-end justify-start gap-[16px] max-w-full mq950:flex-wrap">
              <InputsNew label="SSN" contentPlaceholder="SSN" type="text" />
              {/* <Inputs1
                label="SSN"
                contentPlaceholder="SSN"
                propMinWidth="209px"
                propMinWidth1="174px"
              /> */}
              <div className="w-[280.7px] flex flex-row items-start justify-start py-0 pr-[66px] pl-0 box-border gap-[16px] mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                    name="radioGroup-1"
                  />
                  <span className="relative inline-block min-w-[32px]">
                    Male
                  </span>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                  />
                  <span className="relative inline-block min-w-[46px]">
                    Female
                  </span>
                </div>
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                    type="radio"
                  />
                  <span className="relative inline-block min-w-[38px]">
                    Other
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.9677] rounded bg-light-blue flex flex-col items-center justify-center p-2.5 box-border min-w-[335px] max-w-full text-center">
            <div className="self-stretch rounded bg-white flex flex-col items-center justify-center py-[35px] px-[9px] border-[1px] border-dashed border-neutral-200">
              <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={icon}
                />
                <div className="self-stretch relative capitalize">
                  Agency Logo Upload
                </div>
                <button className="rounded bg-main-blue flex flex-row items-center justify-center p-1.5 cursor-pointer">
                  <img className="h-5 w-5 relative" alt="" src={icon_1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="inner_dis_blk" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
        <InputsNew label="Email" contentPlaceholder="Email" type="email" />
        <InputsNew
          label="Mobile Number"
          contentPlaceholder="Mobile Number"
          type="text"
        />
        <InputsNew
          label="Home Number"
          contentPlaceholder="Home Number"
          type="text"
        />
      </div>
      <div id="inner_dis_blk"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
        <InputsDropdown label="Country*" placeHolder="Choose" options={[]} />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
          <InputsNew
            label="Date of Joining*"
            contentPlaceholder=""
            type="datetime-local"
          />
          <InputsNew label="Designation" contentPlaceholder="" type="text" />
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
        <div id="inner_checcts_row"  className="flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[217px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[54px] mq950:box-border mq1425:pr-[108px] mq1425:box-border">
          <div className="w-[322px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch relative font-semibold">Status*</div>
            <div className="flex flex-row items-start justify-start py-0 pr-[177px] pl-0 box-border gap-[8px] max-w-[322px] text-main-blue mq450:flex-wrap mq450:pr-5 mq450:box-border">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="radio"
                />
                <span className="relative inline-block min-w-[41px]">
                  Active
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px] text-dark-font">
                <input
                  className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="radio"
                />
                <span className="relative inline-block min-w-[52px]">
                  Inactive
                </span>
              </div>
            </div>
          </div>
          <div className="w-[369px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch relative font-semibold">Access</div>
            <div className="flex flex-row items-start justify-start gap-[8px] mq950:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <span className="relative inline-block min-w-[41px]">
                  Admin
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <span className="relative inline-block min-w-[66px]">
                  Scheduler
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <span className="relative inline-block min-w-[91px]">
                  Care Manager
                </span>
              </div>
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <span className="relative inline-block min-w-[59px]">
                  Marketer
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
            <div className="self-stretch relative font-semibold">
              Send Email
            </div>
            <div className="w-full flex flex-col items-start justify-start max-w-[322px] text-main-blue">
              <div className="flex flex-row items-center justify-start gap-[6px]">
                <input
                  className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                  type="checkbox"
                />
                <span className="relative inline-block min-w-[23px]">Yes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button
          onClick={HandlegoBack}
          className="cursor-pointer py-2.5 px-[42px] bg-white flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue"
        >
          <span className="relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[46px]">
            Cancel
          </span>
        </button>
        <button onClick={handleClick} className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue">
          <span className="relative text-sm font-body-reg text-white text-center inline-block min-w-[32px]">
            Save
          </span>
        </button>
      </div>
    </div>
  );
};

export default PayerInformationSection;
