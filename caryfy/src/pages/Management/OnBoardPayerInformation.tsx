import { FunctionComponent } from "react";
import ContainerForPayerInfo from "../../components/management/ContainerForPayerInfo";

const OnBoardPayerInformation: FunctionComponent = () => {
  return (
    <div id="cts-respon-p-dv" className="py-40 self-stretch themebg-cts-blg overflow-hidden flex flex-row flex-wrap items-start justify-center relative gap-[24px_22px] max-w-full ctc-onborad-hscreen">
      <ContainerForPayerInfo />
    </div>
  );
};

export default OnBoardPayerInformation;