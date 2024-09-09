import { FunctionComponent } from "react";
import EmployeePersonalInfo from "../../../components/Admin/employee/EmployeePersonalInfo";
import dftarrowback from '../../../assets/Admin/dftarrowback.svg'

const EmployeePernolInfoPage: FunctionComponent = () => {

  return (
    <div className="w-full relative themebg-cts-blg overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] tracking-[normal] leading-[normal] text-left text-xl text-dark-font font-body-reg mq1900:max-w-full mq450:max-w-full mq950:max-w-full mq1425:max-w-full">
      <div id="cts-respon-p-dv" className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-40 px-5 box-border max-w-full z-[2] mq450:pt-[34px] mq450:pb-[34px] mq450:box-border mq950:pt-[52px] mq950:pb-[52px] mq950:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
              loading="lazy"
              alt=""
              src={dftarrowback}
            />
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`Personal Information - Employee `}</h3>
          </div>
          <EmployeePersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default EmployeePernolInfoPage;
