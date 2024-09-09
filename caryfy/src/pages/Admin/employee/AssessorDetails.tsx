import { FunctionComponent } from "react"; 
import AssesorDetailScreen from "../../../components/Admin/employee/AssessorDetailScreen";

const AssessorDetails: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <section className="self-stretch overflow-hidden flex flex-row flex-wrap items-start themebg-cts-blg h-screen justify-center py-40 px-5 box-border max-w-full z-[1] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
        <AssesorDetailScreen />
      </section>
    </div>
  );
};

export default AssessorDetails;
