import { FunctionComponent } from "react";
import dftarrowback from "../../../../assets/delete-shift/dftarrowback.svg";
import { useHistory } from "react-router-dom";
import InputsNew from "../../../../components/Common/InputsNew";
import CheckboxSelection from "../../../../components/Schedular/AskCary/documents/EDWPNotificationForm/CheckBoxSelection";
import StackForForm from "../../../../components/Schedular/AskCary/documents/EDWPNotificationForm/StackForForm";

const EDWPNotificationForm: FunctionComponent = () => {
    const history = useHistory()

    function onBackClick() {
        history.push('/askcary')
    }

    return (
        // <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] text-left text-xl text-dark-font font-body-reg">
        //     <Header />
        <div className="self-stretch themebg-cts-blg overflow-hidden flex flex-col items-center justify-start relative gap-[24px] max-w-full">
            {/* <div className="w-[3241px] h-[3394px] absolute !m-[0] top-[-889px] left-[-745px] flex items-center justify-center z-[0]">
                <img
                    className="w-full h-full object-contain absolute left-[0px] top-[24px] [transform:scale(1.014)]"
                    alt=""
                />
            </div> */}
            <div id="cts-respon-p-dv" className="w-full flex flex-col items-start justify-start py-40 rounded-lg px-5 box-border gap-[24px] max-w-[1366px] z-[1] mq1600:max-w-full ">
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                    <img
                        className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={dftarrowback}
                        onClick={onBackClick}
                    />
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
                        ( Change ) form
                    </h3>
                </div>
                <div id="edwp-main-dv" className="self-stretch rounded-radius-radius-lg bg-light-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-sm mq1275:pt-5 mq1275:pb-5 mq1275:box-border">
                    <div id="cts-fullwidth-input" className="self-stretch flex flex-row flex-wrap items-center justify-start">
                        <InputsNew label="Client" contentPlaceholder="White, Rachel" type="text" disabled={true} />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                        <p className="my-0 self-stretch relative">
                           <b> EDWP form generated from your interaction</b>
                        </p>
                        <div id="cts-radio-btn" className="self-stretch flex flex-row items-start justify-start py-0 pr-[627px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq900:pr-[156px] mq900:box-border mq1275:pr-[313px] mq1275:box-border mq1600:flex-wrap">
                            <label className="my-0 w-[35px] relative font-bold inline-block shrink-0">
                                <b>1.</b>
                            </label>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-1"
                                />
                                <label className="my-0 relative inline-block min-w-[35px]">
                                    Initial
                                </label>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-1"
                                />
                                <label className="my-0 relative inline-block min-w-[51px]">
                                    Change
                                </label>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-1"
                                />
                                <label className="my-0 relative inline-block min-w-[128px]">
                                    Complaint/Concern
                                </label>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-2"
                                />
                                <label className="my-0 relative inline-block min-w-[54px]">
                                    Transfer
                                </label>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-2"
                                />
                                <label className="my-0 relative inline-block min-w-[66px]">
                                    Discharge
                                </label>
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="radio"
                                    name="radioGroup-2"
                                />
                                <label className="my-0 relative inline-block min-w-[38px]">
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <label className="w-[35px] relative font-bold inline-block shrink-0">
                              <b>  2.</b>
                            </label>
                            <InputsNew label="To" contentPlaceholder="Lopez, Ashley" type="text" />
                            <InputsNew label="Date" contentPlaceholder="" type="datetime-local" />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div id="cts-fullwidth-input"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <label className="w-[35px] relative font-bold inline-block shrink-0">
                               <b> 3.</b>
                            </label>
                            <InputsNew label="From" contentPlaceholder="Happy Home Care" type="text" />
                            <InputsNew label="Phone" contentPlaceholder="(987) 654-3210" type="text" />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                        <div id="cts-fullwidth-input"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <label className="w-[35px] relative font-bold inline-block shrink-0">
                               <b> 4</b>
                            </label>
                            <InputsNew label="Client" contentPlaceholder="Williams, Michael" type="text" />
                            <InputsNew label="Medicaid" contentPlaceholder="123456789101" type="text" />
                        </div>
                        <div id="cts-fullwidth-input"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[213px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[53px] mq900:box-border mq1275:pr-[106px] mq1275:box-border">
                            <label className="h-[19px] w-[35px] relative font-bold inline-block shrink-0 opacity-[0]">
                               <b> 4</b>
                            </label>
                            <div className="flex-1 flex flex-row flex-wrap items-start justify-start min-w-[195px] max-w-[322px]">
                                <div className="flex flex-row items-center justify-start gap-[6px]">
                                    <input
                                        className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                        type="checkbox"
                                    />
                                    <label className="relative"> Check here if new address</label>
                                </div>
                            </div>
                            <InputsNew label="Address" contentPlaceholder="6391 Elgin St. Celina, Delaware 10299" type="text" />
                            <InputsNew label="Phone" contentPlaceholder="(987) 654-3210" type="text" />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                        <b className="w-[35px] relative font-bold inline-block shrink-0">
                            5.
                        </b>
                        <div id="cts-flex-blg" className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[787px] max-w-full mq1275:min-w-full">
                            <b className="self-stretch relative">Services</b>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[940px] pl-0 gap-[8px_16px] mq450:pr-5 mq450:box-border mq900:pr-[235px] mq900:box-border mq1275:pr-[470px] mq1275:box-border">
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[26px]">
                                            PSS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[34px]">
                                            PSSX
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[49px]">
                                            CD PSS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[26px]">
                                            SFC
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn"  className="self-stretch flex flex-row flex-wrap items-center justify-start">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[26px]">
                                            ERS
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn"  className="self-stretch flex flex-row flex-wrap items-center justify-start">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[25px]">
                                            ALS
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn"  className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[816px] pl-0 gap-[8px_16px] mq450:pr-5 mq450:box-border mq900:pr-[204px] mq900:box-border mq1275:pr-[408px] mq1275:box-border">
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <div className="relative inline-block min-w-[28px]">
                                            ADH
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <div className="relative inline-block min-w-[33px]">
                                            HALF
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <div className="relative inline-block min-w-[26px]">
                                            Half
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <div className="relative inline-block min-w-[22px]">
                                            Full
                                        </div>
                                    </div>
                                    <div className="relative inline-block min-w-[47px]">
                                        LEVEL 1
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <div className="relative inline-block min-w-[49px]">
                                            LEVEL 2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn" className="self-stretch flex flex-row flex-wrap items-center justify-start">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[31px]">
                                            HDM
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[1041px] pl-0 gap-[8px_16px] mq450:pr-5 mq450:box-border mq900:pr-[260px] mq900:box-border mq1275:pr-[520px] mq1275:box-border">
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[27px]">
                                            SNS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[19px]">
                                            RN
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[26px]">
                                            LPN
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn"  className="self-stretch flex flex-row flex-wrap items-center justify-start">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[28px]">
                                            HDS
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start">
                                <div id="cts-radio-btn" className="self-stretch flex flex-row flex-wrap items-center justify-start">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[38px]">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="cts-fullwidth-input" className="self-stretch flex flex-col items-start justify-start gap-[8px] text-light-font">
                        <input
                            className="w-full [border:none] [outline:none] font-semibold font-body-reg text-sm bg-[transparent] self-stretch h-[19px] relative text-dark-font text-left inline-block min-w-[250px] p-0"
                            placeholder="Comments"
                            type="text"
                        />
                        <div id="pb0-cts-dv" className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-start justify-start pt-spacing-1-and-half px-4 pb-[47px] ">
                            <div className="relative inline-block min-w-[6px]">-</div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                            <label className="w-[35px] relative font-bold inline-block shrink-0">
                                6.
                            </label>
                            <div className="w-[318px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <InputsNew label="RN/Staff completed initial evaluation with client" contentPlaceholder="" type="datetime-local" />
                            </div>
                            <div className="flex-1 rounded-lg flex flex-row items-center justify-start p-2 box-border min-w-[570px] max-w-full mq900:min-w-full">
                                <p className="my-0 flex-1 relative inline-block max-w-full">
                                    Must be RN for ALS, ADH and PSS/X
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="cts-fullwidth-input"  className="cts-checkbox-blg self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[213px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[53px] mq900:box-border mq1275:pr-[106px] mq1275:box-border">
                        <label className="h-[19px] w-[35px] relative font-bold inline-block shrink-0 opacity-[0]">
                            6.
                        </label>
                        <CheckboxSelection label="Services were accepted" />
                        <CheckboxSelection label="Services were not accepted" />
                        <InputsNew label="Reason" contentPlaceholder="-" type="text" />
                    </div>
                    <div id="addshift-date-time-dv" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[889px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[222px] mq900:box-border mq1275:pr-[444px] mq1275:box-border">
                        <b className="w-[35px] relative font-bold inline-block shrink-0">
                            7.
                        </b>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                            <InputsNew label="RN/Staff completed initial evaluation with client" contentPlaceholder="" type="datetime-local" />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                            <label className="w-[35px] relative font-bold inline-block shrink-0">
                                <b>8.</b>
                            </label>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[787px] max-w-full mq1275:min-w-full">
                                <label className="self-stretch relative font-bold">
                                    <b> Service Issues</b>
                                </label>
                                <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[23px] pl-0 box-border gap-[8px_16px] min-h-[73px]">
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">
                                            Request for service increase
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">
                                            Request for service decrease
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">Failure to pay cost share</label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[94px]">
                                            Missed visit(s)
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[112px]">
                                            Services initiated
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[117px]">
                                            Client termination
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">
                                            respite care plans utilized this quarter
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">Requested provider change</label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[128px]">
                                            Health/Safety Issue
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[119px]">
                                            Client out of home
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">Request for information</label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">Admission to Rehab/NH</label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">
                                            Request for PA info/PA update
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative">
                                            Scheduled day surgery/no hospital admission
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="checkbox"
                                        />
                                        <label className="relative inline-block min-w-[38px]">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <StackForForm prop="9." label="Discharge Reason" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-0 box-border gap-[16px] max-w-full mq1600:flex-wrap">
                        <label className="w-[35px] relative font-bold inline-block shrink-0">
                          <b>  10.</b>
                        </label>
                        <div className="w-[1527px] flex flex-row items-start justify-start gap-[32px] max-w-[121%] shrink-0 mq900:gap-[16px] mq1600:flex-wrap">
                            <div className="w-[233px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <label className="relative font-semibold">
                                    Date discharge (30 day) letter sent
                                </label>
                                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0">
                                    <div className="flex-1 flex flex-row items-center justify-start">
                                        <div className="flex-1 relative">4/17/2024</div>
                                    </div>
                                    <img
                                        className="h-4 w-4 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/otlcalendar1.svg"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[820px] max-w-full mq1275:min-w-full">
                                <label className="self-stretch relative">
                                    Are services continuing through 30 day notice?
                                </label>
                                <div className="flex flex-row items-start justify-start py-0 pr-[1161px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border mq900:pr-[290px] mq900:box-border mq1275:pr-[580px] mq1275:box-border mq1600:flex-wrap">
                                    <div className="flex flex-row items-center justify-start gap-[6px]">
                                        <input
                                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="radio"
                                            name="radioGroup-3"
                                        />
                                        <label className="relative inline-block min-w-[23px]">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                        <input
                                            className="cursor-pointer m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                            type="radio"
                                            name="radioGroup-3"
                                        />
                                        <label className="relative inline-block min-w-[18px]">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                        <label className="w-[35px] relative font-bold inline-block shrink-0">
                            <b>11.</b>
                        </label>
                        <div id="cts-fullwidth-input"  className="flex-1 flex flex-row items-start justify-start py-0 pr-[535px] pl-0 box-border gap-[32px] min-w-[787px] max-w-full mq450:pr-5 mq450:box-border mq900:gap-[16px] mq900:pr-[133px] mq900:box-border mq1275:flex-wrap mq1275:pr-[267px] mq1275:box-border mq1275:min-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <label className="self-stretch relative font-semibold">
                                    Actual Discharge Date
                                </label>
                                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0 [row-gap:20px] mq450:flex-wrap">
                                    <div className="flex-1 flex flex-row items-center justify-start min-w-[199px]">
                                        <div className="flex-1 relative">4/17/2024</div>
                                    </div>
                                    <img
                                        className="h-4 w-4 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/otlcalendar1.svg"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <label className="self-stretch relative font-semibold">
                                    Last day service
                                </label>
                                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0 [row-gap:20px] mq450:flex-wrap">
                                    <div className="flex-1 flex flex-row items-center justify-start min-w-[199px]">
                                        <div className="flex-1 relative">4/17/2024</div>
                                    </div>
                                    <img
                                        className="h-4 w-4 relative overflow-hidden shrink-0"
                                        alt=""
                                        src="/otlcalendar1.svg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <div id="services-type-blg-row" className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px]">
                            <label className="h-[19px] w-[35px] relative font-bold inline-block shrink-0 opacity-[0]">
                                12.
                            </label>
                            {/* <Inputs
                                    label="Enter final units below"
                                    hint="PSS"
                                    propWidth="unset"
                                    propFlex="1"
                                    propMinWidth="191px"
                                    propDisplay="unset"
                                /> */}
                            {/* <InputsNew label="Enter final units below" /> */}
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">PSSX</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">CD PSS</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">SFC</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">ADH</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">ERS</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">HDM</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">ALS</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">RN</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">LPN</div>
                                </div>
                            </div>
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-end justify-start pt-[39px] px-0 pb-spacing-1-and-half box-border min-w-[56px]">
                                <div className="flex-1 flex flex-row items-center justify-start">
                                    <div className="flex-1 relative">Other</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <StackForForm
                        prop="12."
                        label="Initial or Current Services in the Home"
                    />
                    <StackForForm prop="13." label="Frequency Changes Requested" />
                    <StackForForm prop="14." label="Complaint/Concern/Other" />
                    <StackForForm prop="15." label="ER/Hospital/Rehab visit" />
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div id="cts-fullwidth-input" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <b className="w-[35px] relative font-bold inline-block shrink-0">
                                16.
                            </b>
                            <InputsNew label="Sender name" contentPlaceholder="Demo Agency" type="text" />
                            <InputsNew label="Title" contentPlaceholder="-" type="text" />
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-dark-font font-body-reg "
                    >
                        <div id="addshift-date-time-dv"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <b className="h-[19px] w-[35px] relative font-bold inline-block shrink-0 opacity-[0]">
                                17.
                            </b>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <InputsNew label="Date" contentPlaceholder="" type="datetime-local" />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <InputsNew label="Email" contentPlaceholder="email@agencyname.com" type="email" />
                            </div>
                        </div>
                    </div>
                    {/* <Stack /> */}
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                        <div id="cts-fullwidth-input"   className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <b className="w-[35px] relative font-bold inline-block shrink-0">
                                17.
                            </b>
                            <InputsNew label="Recipient name" contentPlaceholder="Demo Agency" type="text" />
                            <InputsNew label="Title" contentPlaceholder="-" type="text" />
                        </div>
                    </div>
                    <div
                        className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-dark-font font-body-reg"
                    >
                        <div id="addshift-date-time-dv"  className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[551px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq900:pr-[137px] mq900:box-border mq1275:pr-[275px] mq1275:box-border">
                            <b className="h-[19px] w-[35px] relative font-bold inline-block shrink-0 opacity-[0]">
                                17.
                            </b>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <InputsNew label="Date" contentPlaceholder="" type="datetime-local" />
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]">
                                <InputsNew label="Email" contentPlaceholder="email@agencyname.com" type="email" />
                            </div>
                        </div>
                    </div>
                    <StackForForm prop="18." label="Recipient Response" />
                    <div id="btn-row-blg-edwp" className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[698px] gap-[8px] mq450:pl-5 mq450:box-border mq900:pl-[174px] mq900:box-border mq1275:flex-wrap mq1275:pl-[349px] mq1275:box-border">
                        <button className="cursor-pointer py-2.5 px-[30px] bg-white flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[71px] whitespace-nowrap border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue">
                            <p className=" my-0 relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[71px]">
                                Send Email
                            </p>
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/post-icon5.svg"
                            />
                        </button>
                        <button className="cursor-pointer py-2.5 px-[33px] bg-white flex-[0.9155] rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[71px] whitespace-nowrap border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue mq450:flex-1">
                            <p className=" my-0 relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[64px]">
                                Fax EDWP
                            </p>
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/post-icon3.svg"
                            />
                        </button>
                        <button className="cursor-pointer py-2.5 px-[42px] bg-white flex-[0.662] rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[71px] border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue mq450:flex-1">
                            <p className=" my-0 relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[46px]">
                                Cancel
                            </p>
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/post-icon3.svg"
                            />
                        </button>
                        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue">
                            <p className=" my-0 relative text-sm font-body-reg text-white text-center inline-block min-w-[32px]">
                                Save
                            </p>
                            <img
                                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/post-icon4.svg"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default EDWPNotificationForm;
