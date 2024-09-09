import { FunctionComponent } from "react";
import ContainerPlanOfcare from "../../components/management/ContainerPlanOfCare";

const OnBoardplanOfcare: FunctionComponent = () => {
  return (
    <section className="self-stretch themebg-cts-blg overflow-hidden flex flex-row flex-wrap items-start justify-center relative gap-[24px_22px] max-w-full">
      <img
        className="h-[3394px] w-[3241px] absolute !m-[0] top-[-889px] left-[-745px]"
        alt=""
      />
      <ContainerPlanOfcare />
    </section>
  );
};

export default OnBoardplanOfcare;