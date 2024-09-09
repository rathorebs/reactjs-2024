import { FunctionComponent } from "react";
import dftarrowback from "../../../assets/Admin/dftarrowback.svg";
import icon1 from "../../../assets/Admin/icon-1.svg";
import Table from "../../Common/Table";
import { useHistory } from "react-router-dom";

interface DataRow {
  "Call Type": string;
  "Shift Type": string;
  "Bill Rate": string;
  "Effective Date": string;
}

const columns: (keyof DataRow)[] = [
  "Call Type",
  "Shift Type",
  "Bill Rate",
  "Effective Date",
];
const data: DataRow[] = [
  {
    "Call Type": "SFC ($99.72), SFC ($99.72)",
    "Shift Type": "Weekly",
    "Bill Rate": "$39.95",
    "Effective Date": "04-12-2021",
  },
];

const EmployeePayement: FunctionComponent = () => {
  const history = useHistory();
  const HandlegoBack = () => {
    history.goBack();
  };

  const handleClick = () => {
    history.push("/admin_employee_personal_add_payment");
  };

  return (
    <div
      id="arjun"
      className={`w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq1425:max-w-full `}
    >
      <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full mq1425:flex-wrap">
        <img onClick={HandlegoBack}
          className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
          loading="lazy"
          alt=""
          src={dftarrowback}
        />
        <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[117px] max-w-full mq450:text-base">
          Payment Terms
        </h3>
        <button  onClick={handleClick} className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-surface-primary-surface rounded-radius-radius-sm flex flex-row items-center justify-center gap-[4px]">
          <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[26px]">
            Add
          </span>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={icon1}
          />
        </button>
      </div>
      <div
        id="inner-admin-paymets"
        className="self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 gap-[24px] text-sm"
      >
        <Table columns={columns} initialData={data} showActionColumn={true} />
        <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
          <button
            className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue"
            onClick={HandlegoBack}
          >
            <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
              Cancel
            </span>
          </button>
          <button
            className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue"
           
          >
            <span className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeePayement;
