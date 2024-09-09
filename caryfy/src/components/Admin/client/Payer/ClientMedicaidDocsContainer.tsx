import { FunctionComponent, useState } from "react";
import ClientMedicaidDocsRow from "./ClientMedicaidDocsRow";
import Table from "../../../Common/Table";
import pluslg from "../../../../assets/Admin/pluslg.svg";

interface DataRow {
  'Document Name': string;
  'Document Type': string;
  'Document url': string;
  'Start Date': string;
  'Expiry Date': string
}
const columns: (keyof DataRow)[] = ['Document Name', 'Document Type', 'Document url', 'Start Date', 'Expiry Date'];
const data: DataRow[] = [
  { 'Document Name': '', 'Document Type': '', 'Document url': '', 'Start Date': '', 'Expiry Date': '' }
];

const ClientMedicaidDocsContainer: FunctionComponent = () => {
  const [medicaidRow, setMedicaidRows] = useState<Array<{}>>([]);

  function handleClick() {
    alert("Button clicked");
  }

  function handleRow() {
    console.log("...");
    // setMedicaidRows([...medicaidRow, <AdminMedicaidDocsRow key={medicaidRow.length} />]);
    setMedicaidRows([...medicaidRow,{}])
  }
  function handleCancelRow(idx:any) {
    // setMedicaidRows([...medicaidRow, <AdminMedicaidDocsRow key={medicaidRow.length} />]);
    setMedicaidRows(medicaidRow.filter((_, i) => i !== idx));
  }
  return (
    <form id="cts-form-tbl"
      className={`m-0 self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq950:pt-[21px] mq950:pb-[21px] mq950:box-border`}
    >
      <div className="self-stretch flex flex-col items-start justify-start min-w-[191px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full mq1425:flex-wrap">
          <p className="flex-1 my-0 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[78px] max-w-full">
           <b> Medicaid Docs</b>
          </p>
          <div className="rounded-radiuscomponent-button bg-surface-primary-surface flex flex-row items-center justify-center p-2.5"  onClick={handleRow}>
            <img
              className="h-3 w-3 relative"
              loading="lazy"
              alt=""
              src={pluslg}
            />
          </div>
        </div>
      </div>
      <div id="respon-p" className="self-stretch rounded-radius-md bg-surface-bg-primary flex flex-col items-end justify-start p-4 box-border gap-[16px] max-w-full">
        <ClientMedicaidDocsRow />
        {/* {medicaidRow.map((row) => row)} */}
        {medicaidRow.map((_, index) => (
          <ClientMedicaidDocsRow
            key={index}
            onCancel={() => handleCancelRow(index)}
          />
        ))}
      </div>
      <Table columns={columns} initialData={data} />
      <div id="btn-cts-row" className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button className="cursor-pointer py-2.5 px-[42px] bg-surface-bg-primary flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
          <div className="h-[19px] w-[47px] relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center flex items-center justify-center min-w-[46px]">
            Cancel
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={handleClick}>
          <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
            Save
          </div>
        </button>
      </div>
    </form>
  );
};

export default ClientMedicaidDocsContainer;
