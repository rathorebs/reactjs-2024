import { FunctionComponent } from "react";
import AskCaryContainer from "../../components/Admin/AskCary/AskCaryContainer";

const AskCaryPage: FunctionComponent = () => {
    return (
        <div className="w-full relative themebg-cts-blg pt-0 overflow-hidden flex flex-col items-start min-h-screen justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq1900:max-w-full mq450:max-w-full mq950:max-w-full mq1425:max-w-full">
            <div id="cts-respon-p-dv" className="self-stretch overflow-hidden flex flex-col items-center justify-center relative gap-[24px] py-40 max-w-full">
                <AskCaryContainer />
            </div>
        </div>
    );
};

export default AskCaryPage;
