import { FunctionComponent } from "react";
import InputsDropdown from "../../../components/Common/InputsDropdown";
import dftarrowback from "../../../assets/Admin/dftarrowback.svg";
import AssessorViewDetail from "../../../components/Admin/employee/AssessorViewDetail";

const ClientDetailsPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq1900:max-w-full mq450:max-w-full mq950:max-w-full mq1425:max-w-full">
      <section
        id="cts-respon-p-dv"
        className="self-stretch overflow-hidden flex flex-row flex-wrap themebg-cts-blg items-start justify-center py-40 h-screen px-5 box-border max-w-full z-[1] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border"
      >
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
              loading="lazy"
              alt=""
              src={dftarrowback}
            />
            <h3 className="m-0 h-[27px] flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
              View Assessor Details
            </h3>
          </div>
          <div
            id="clientview-card-cts"
            className="self-stretch min-h-[431px] relative rounded-radius-radius-lg bg-light-blue min-w-[398px] text-center text-sm clientview-card-assessor"
          >
            <div id="cts-width-full"  className="absolute top-[32px] left-[32px] w-[322px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px] text-left">
              <InputsDropdown
                label=""
                placeHolder="White, Rachel"
                options={[]}
              />
            </div>
            <div id="card-cts-row">
              <AssessorViewDetail
                label="Personal Information"
                propLeft="32px"
              />
              <AssessorViewDetail label="Payment Terms" propLeft="351.5px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientDetailsPage;
