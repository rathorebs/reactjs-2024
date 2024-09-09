import { FunctionComponent } from "react";
import dftarrowback from "../../../assets/Admin/dftarrowback.svg";
import PlanOfCare from "../../../components/Admin/client/PlanOfCare";

const PlanOfCarePage: FunctionComponent = () => {
    return (
        <div className="w-full relative themebg-cts-blg  overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] tracking-[normal] leading-[normal] text-left text-xl text-dark-font font-body-reg mq1900:max-w-full mq450:max-w-full mq950:max-w-full mq1425:max-w-full">
            <div id="cts-respon-p-dv" className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-40 min-h-screen px-5 box-border max-w-full z-[1] mq950:pt-[34px] mq950:pb-[34px] mq950:box-border mq1425:pt-[52px] mq1425:pb-[52px] mq1425:box-border">
                <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                            loading="lazy"
                            alt=""
                            src={dftarrowback}
                        />
                        <h3 className="m-0 h-[27px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
                            Plan Of Care
                        </h3>
                    </div>
                    <PlanOfCare />
                    {/* <PayerInformationSection /> */}
                </div>
            </div>
        </div>
    );
};

export default PlanOfCarePage;
