import { FunctionComponent } from "react";
import AdminPaymentTerms from "../../../components/Admin/client/AdminPaymentTerms";

const AdminPaymentTermsPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <section id="cts-respon-p-dv" className="self-stretch overflow-hidden py-40  flex flex-row flex-wrap themebg-cts-blg items-start justify-center min-h-screen px-5 box-border max-w-full z-[1] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
        <AdminPaymentTerms />
      </section>
    </div>
  );
};

export default AdminPaymentTermsPage;
