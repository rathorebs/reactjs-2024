import { FunctionComponent } from "react";
import AskCaryCard from "./AskCaryCard";
import InputsNew from "../../Common/InputsNew";
import ioniconmmicoutline from "../../../assets/ask-cary/ioniconmmicoutline.svg";

const AskCaryContainer: FunctionComponent = () => {
    return (
        <div id="inner-askcary-blg"
            className="w-full flex flex-col items-center justify-start py-0 px-5 box-border gap-[24px] max-w-[1366px] z-[1] text-left text-xl text-dark-font font-body-reg mq1425:max-w-full"
        >
            <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start cts-justify-center max-w-full">
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">{`Accounting `}</h3>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start cts-justify-center gap-[8px_6.7px] min-h-[168px] max-w-full text-sm">
                    <AskCaryCard label="Drive" />
                    <AskCaryCard
                        label="Holiday"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Interest "
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Mileage"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Week Range"
                        propTextDecoration="unset"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start cts-justify-center max-w-full">
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">
                        Configuration
                    </h3>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start cts-justify-center py-0 pl-0 box-border gap-[8px_6.7px] max-w-full">
                    <AskCaryCard
                        label="On Call"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Call Type"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="EVV Aggregator"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Rates"
                        propTextDecoration="unset"
                    />
                </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start cts-justify-center max-w-full">
                    <h3 className="m-0 h-[27px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">
                        Add New
                    </h3>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start cts-justify-center gap-[8px_6.7px] min-h-[168px] max-w-full">
                    <AskCaryCard
                        label="Add Client "
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Add Caregiver "
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="Add Employee "
                        propTextDecoration="unset"
                        link="/assesor_details"
                    />
                    <AskCaryCard
                        label="Add Prospect "
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="View Client"
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="View Caregiver "
                        propTextDecoration="unset"
                    />
                    <AskCaryCard
                        label="View Employee "
                        propTextDecoration="unset"
                        link="/view_assesor_details"
                    />
                </div>
                <div id="askcary_input_blg" className="min-w-full flex flex-col items-start justify-start gap-[24px] mq1425:max-w-full">
                <InputsNew contentPlaceholder="How can i Help you?" label="" type="text" imgSrc={ioniconmmicoutline} />
                </div>
            </div>
           
        </div>
    );
};

export default AskCaryContainer;
