import { FunctionComponent } from "react";
import InputsDropdown from "../../../components/Common/InputsDropdown";
import dftarrowback from '../../../assets/Admin/dftarrowback.svg'

const LanguageOptions = ["English", "German", "Spanish"];

const AdminHealthInfoPage: FunctionComponent = () => {
    function handleClick() {
        alert("Button clicked!");
    }

    return (
        <div id="healthinf-main"
            className={`w-[1920px] bg-surface-bg-primary max-w-[1920pxoverflow-hidden flex flex-col items-center justify-start relative min-w-[360px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full`}
        >
            <section id="cts-respon-p-dv" className="themebg-cts-blg self-stretch overflow-hidden flex ] py-40 flex-row flex-wrap items-start justify-center min-h-screen px-5 box-border max-w-full z-[1] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq950:pt-[52px] mq950:pb-[52px] mq950:box-border">
                <div className="w-[1326px] flex flex-col items-center justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={dftarrowback}
                        />
                        <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`Health Information `}</h3>
                    </div>
                    <form className="m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
                        <div id="addhealth_info_dv" className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                                <p className="my-0 flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
                                   <b> Physician Information</b>
                                </p>
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
                                {/* <Inputs label="Primary Physician" /> */}
                                <InputsDropdown label="Primary Physician" placeHolder="Choose" options={LanguageOptions} />
                                <InputsDropdown label="Ordering Physician" placeHolder="Choose" options={LanguageOptions} />
                            </div>
                        </div>
                        <div id="addhealth_info_dv" className="my-0 self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                                <p className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
                                    <b>Health Care Information</b>
                                </p>
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[264px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[66px] mq950:box-border mq1425:pr-[132px] mq1425:box-border">
                                <InputsDropdown label="Other Physician(s)" placeHolder="Choose" options={LanguageOptions} />
                                <InputsDropdown label="Hospital" placeHolder="Choose" options={LanguageOptions} />
                                <InputsDropdown label="Pharmacy" placeHolder="Choose" options={LanguageOptions} />
                            </div>
                            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq950:pr-[150px] mq950:box-border mq1425:pr-[301px] mq1425:box-border">
                                <InputsDropdown label="Other Agencies" placeHolder="Choose" options={LanguageOptions} />
                                <InputsDropdown label="Other Treatments" placeHolder="Choose" options={LanguageOptions} />
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
                            <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
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
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AdminHealthInfoPage;
