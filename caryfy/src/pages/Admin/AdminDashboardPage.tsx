import { FunctionComponent } from "react";
import posticon from '../../assets/Admin/posticon.svg'
import AdminDashboard from "../../components/Admin/Dashboard/AdminDashboard";

const AdminDashboardPage: FunctionComponent = () => {
  function handleClick() {
    alert("Button Clicked");
  }

  return (
    <div id="cts-respon-p-dv" className="w-full relative themebg-cts-blg bg-surface-bg-primary overflow-hidden flex flex-col items-start py-40 justify-start min-w-[360px] max-w-[1920px] tracking-[normal] leading-[normal] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full">
      <img
        className="w-[3241px] h-[3394px] absolute !m-[0] bottom-[-1048px] left-[-745px]"
        alt=""
      />
      <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center px-5 box-border max-w-full z-[1] mq950:pt-[34px] mq950:pb-[34px] mq950:box-border mq1425:pt-[52px] mq1425:pb-[52px] mq1425:box-border">
        <div className="w-[1326px] flex flex-col items-start justify-start gap-[20px] max-w-[1326px] mq1425:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full mq1425:flex-wrap">
            <h3 className="m-0 h-[27px] flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[82px] max-w-full mq450:text-base">
              Dashboard
            </h3>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-sm text-text-text-secondary">
              <div className="relative">{`Updated 4 mins. ago `}</div>
            </div>
            <button id="reset-cts-dv" className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-main-blue rounded-radius-radius-sm flex flex-row items-start justify-start gap-[4px]" onClick={handleClick}>
              <span className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[39px]">
                Reset
              </span>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  alt=""
                  src={posticon}
                />
              </div>
            </button>
          </div>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
