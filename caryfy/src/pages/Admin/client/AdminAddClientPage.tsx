import { FunctionComponent } from "react";
import AdminAddClient from "../../../components/Admin/client/AdminAddClient";

const AdminAddClientPage: FunctionComponent = () => {
  return (
    <div id="admin-client-detail-blg" className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <section className="self-stretch overflow-hidden flex flex-row flex-wrap items-start min-h-screen justify-center px-5 box-border max-w-full z-[1] mq450:pt-[52px] mq450:pb-[52px] mq450:box-border">
        <AdminAddClient />
      </section>
    </div>
  );
};

export default AdminAddClientPage;
