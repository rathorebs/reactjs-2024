import { FunctionComponent } from "react"
import dftarrowback from '../../../assets/Admin/dftarrowback.svg'
import AdminAddPaymentTerm from "../../../components/Admin/client/AdminAddPaymentTerm";

const AdminAddPaymentTermsPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <section id="cts-respon-p-dv" className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center themebg-cts-blg py-40 min-h-screen px-5 box-border max-w-full z-[1] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq950:pt-[52px] mq950:pb-[52px] mq950:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={dftarrowback}
            />
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
              Add Payment Terms
            </h3>
          </div>
          <AdminAddPaymentTerm />
        </div>
      </section>
    </div>
  );
};

export default AdminAddPaymentTermsPage;
