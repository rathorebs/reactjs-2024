import { FunctionComponent } from "react";
import ioniconmmicoutline from "../../../assets/ask-cary/ioniconmmicoutline.svg";
import AskCaryShifts from "../../../components/Schedular/AskCary/shifts/AskCaryShifts";
import AskcaryDocuments from "../../../components/Schedular/AskCary/documents/AskCaryDocuments";
import InputsNew from "../../../components/Common/InputsNew";

const AskCaryPage: FunctionComponent = () => {
  return (
    <div className="self-stretch themebg-cts-blg overflow-hidden flex flex-col items-center justify-start relative gap-[24px] min-h-[screen] max-w-full" id="askcary-cts-main ">
      <div id="cts-respon-p-dv" className="w-full flex flex-col items-center justify-start py-40 px-5 box-border gap-[24px] max-w-[1366px] z-[1] mq1400:max-w-full">
        <AskCaryShifts />
        <AskcaryDocuments />
        <InputsNew contentPlaceholder="How can i Help you?" label="" type="text" imgSrc={ioniconmmicoutline} />
      </div>
    </div>
  );
};

export default AskCaryPage;