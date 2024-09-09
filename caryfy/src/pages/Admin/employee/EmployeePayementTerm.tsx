import { FunctionComponent } from "react"; 
import EmployeePayement from "../../../components/Admin/employee/EmployeePayement";

const EmployeePayementTerm: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <img
        className="w-[3265px] h-[3394px] absolute !m-[0] bottom-[-1965px] left-[-745px]"
        alt=""
      />
      <section className="self-stretch overflow-hidden flex flex-row flex-wrap themebg-cts-blg items-start justify-center py-40 h-screen px-5 box-border max-w-full z-[1] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
        <EmployeePayement />
      </section>
    </div>
  );
};

export default EmployeePayementTerm;
