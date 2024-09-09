import { FunctionComponent } from "react";
import InputsNew from "../../Common/InputsNew";
import PlanOfCareSection from "./PlanOfCareSection";

const rows: string[] = ["Bath - Lower Body", "Bath - Upper Body"]
const rows1: string[] = ["Feeding - Assist via Spoon Fed", "Feeding - Verbal Cue or Reminder"]

const PlanOfCare: FunctionComponent = () => {
  return (
    <form
      className="m-0 self-stretch rounded-radius-radius-lg bg-light-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full mq950:pt-3 mq950:px-3 mq950:pb-3 mq950:box-border mq1425:pt-[21px] mq1425:pb-[21px] mq1425:box-border "
    >
      <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-start justify-center pt-0 px-0 pb-0 max-w-full border-[1px]">
        <div id="respon-palnof-care" className="self-stretch bg-table-background overflow-hidden flex flex-row items-center justify-start p-4 box-border gap-[2px] max-w-full mq1425:flex-wrap">
          <p className="w-[322px] my-0 relative text-sm font-bold font-body-reg text-dark-font text-left inline-block shrink-0 max-w-full">
            Activities/Days
          </p>
         <div className="planof_care_blg">
         <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            All Days{" "}
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            Mon
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            Tue
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            Fri
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            Sat
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            Sun
          </p>
          <p className="flex-1 my-0 relative text-sm font-bold font-body-reg text-dark-font text-center inline-block min-w-[42px]">
            PRN
          </p>
         </div>
        </div>
        <PlanOfCareSection sectionLabel="Bathing" rowLabels={rows} inputLabel="Bathing Notes"/>
        <PlanOfCareSection sectionLabel="Feeding" rowLabels={rows1} inputLabel="Feeding Notes"/>
      </div>
      <InputsNew label="Plan of care summary note" contentPlaceholder="" type="text"/>
      <InputsNew label="Assessment Notes" contentPlaceholder="" type="text"/>
      <InputsNew label="Goals" contentPlaceholder="" type="text"/>
      <div className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq950:pl-[246px] mq950:box-border mq1425:flex-wrap mq1425:pl-[492px] mq1425:box-border">
        <button className="cursor-pointer py-2.5 px-[42px] bg-white flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue">
          <span className="relative text-sm font-body-reg text-main-blue text-center">
            Cancel
          </span>
        </button>
        <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue">
          <span className="relative text-sm font-body-reg text-white text-center">
            Save
          </span>
        </button>
      </div>
    </form>
  );
};

export default PlanOfCare;
