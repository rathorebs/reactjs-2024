import { FunctionComponent } from "react";
import Row from "./Row"; 

const ScheduleTable: FunctionComponent = () => {
  const daysOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  return (
    <div className="self-stretch rounded-lg bg-surface-bg-primary flex flex-col items-start justify-start">
      <div className="self-stretch bg-surface-bg-secondary overflow-hidden flex flex-row items-start justify-start p-4 gap-[20px] mq1425:flex-wrap">
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          Anticipated Schedule{" "}
        </b>
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          Units Once Daily{" "}
        </b>
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          AM Units{" "}
        </b>
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          PM Units{" "}
        </b>
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          Schedule
        </b>
        <b className="flex-1 relative text-sm inline-block font-body-xs-semi-bold text-colors-text-black text-left min-w-[185px] max-w-[188px]">
          Authorized Hours
        </b>
      </div>
      {daysOfWeek.map((day) => (
        <Row key={day} sUNDAY={day} />
      ))}
    </div>
  );
};

export default ScheduleTable;
