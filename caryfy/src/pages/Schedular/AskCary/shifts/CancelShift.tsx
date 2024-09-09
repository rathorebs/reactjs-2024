import { FunctionComponent } from "react";
import CancelShiftContainer from "../../../../components/Schedular/AskCary/shifts/CancelShiftContainer";

const CancelShift: FunctionComponent = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-20 px-5 box-border max-w-full z-[1] mq950:pt-[34px] mq950:pb-[34px] mq950:box-border mq1425:pt-[52px] mq1425:pb-[52px] mq1425:box-border" style={{ paddingTop: "80px" }}>
      <CancelShiftContainer />
    </div>
  );
};

export default CancelShift;
