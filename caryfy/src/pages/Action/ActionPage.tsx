import { FunctionComponent } from "react";
import Action from "../../components/Action/Action";

const ActionPage: FunctionComponent = () => {
  return (
    <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row flex-wrap items-start justify-center py-20 px-5 box-border max-w-full z-[1] mq950:pt-[22px] mq950:pb-[22px] mq950:box-border mq1425:pt-[34px] mq1425:pb-[34px] mq1425:box-border">
      <Action />
    </div>
  );
};

export default ActionPage;
