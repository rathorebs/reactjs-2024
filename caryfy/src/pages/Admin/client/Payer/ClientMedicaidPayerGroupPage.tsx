import { FunctionComponent } from "react";
import ClientMedicaidPayerGroupContainer from "../../../../components/Admin/client/Payer/ClientMedicaidPayerGroupContainer";
import dftarrowback from "../../../../assets/Admin/dftarrowback.svg";


const ClientMedicaidPayerGroupPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] tracking-[normal] leading-[normal] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <div className="w-[3265px] h-[3394px] absolute !m-[0] bottom-[-564px] left-[-745px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-contain absolute left-[0px] top-[163px] [transform:scale(1.13)]"
          alt=""
        />
      </div>
      {/* <Header /> */}
      <div id="cts-respon-p-dv" className="themebg-cts-blg self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-40 px-5 box-border max-w-full z-[1] mq450:pt-[22px] mq450:pb-[22px] mq450:box-border mq950:pt-[34px] mq950:pb-[34px] mq950:box-border mq1425:pt-[52px] mq1425:pb-[52px] mq1425:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={dftarrowback}
            />
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
              Medicaid Payer Group
            </h3>
          </div>
          {/* <Section /> */}
          <ClientMedicaidPayerGroupContainer/>
        </div>
      </div>
      {/* <KPIContainer /> */}
    </div>
  );
};

export default ClientMedicaidPayerGroupPage;
