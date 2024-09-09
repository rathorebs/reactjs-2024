import { FunctionComponent } from "react";
import dftarrowback from"../../../../assets/Admin/dftarrowback.svg"
import ClientLTCIdetailsContainer from "../../../../components/Admin/client/Payer/ClientLTCIdetailsContainer";

const ClientLTCIDetailsPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <img
        className="w-[3265px] h-[3394px] absolute !m-[0] bottom-[-1176px] left-[-745px]"
        alt=""
      />
      <div id="cts-respon-p-dv" className="self-stretch overflow-hidden themebg-cts-blg flex flex-row flex-wrap items-start justify-center py-40 px-5 box-border max-w-full z-[1] mq950:pt-[34px] mq950:pb-[34px] mq950:box-border mq1425:pt-[52px] mq1425:pb-[52px] mq1425:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={dftarrowback}
            />
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`LTCI Details  `}</h3>
          </div>
          <ClientLTCIdetailsContainer/>
        </div>
      </div>
    </div>
  );
};

export default ClientLTCIDetailsPage;
