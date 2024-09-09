import { FunctionComponent } from "react";
import dftarraoback from '../../../../assets/Admin/dftarrowback.svg';
import ClientPayerContainer from "../../../../components/Admin/client/Payer/ClientPayerContainer";

const ClientPayerPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <img
        className="w-[3265px] h-[3394px] absolute !m-[0] bottom-[-1789px] left-[-745px]"
        alt=""
      />
      {/* <Header /> */}
      <section id="cts-respon-p-dv"  className="themebg-cts-blg self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center py-40 min-h-screen px-5 box-border max-w-full z-[1] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq950:pt-[52px] mq950:pb-[52px] mq950:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={dftarraoback}
            />
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
              Payer
            </h3>
          </div>
          <ClientPayerContainer/>
        </div>
      </section>
      {/* <KPIContainer /> */}
    </div>
  );
};

export default ClientPayerPage;
