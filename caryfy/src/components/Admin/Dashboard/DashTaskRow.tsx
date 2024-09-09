import { FunctionComponent, useMemo, type CSSProperties } from "react";
import InputsDropdown from "../../Common/InputsDropdown";
import firrtimeforward from "../../../assets/Admin/firrtimeforward.svg"
import firsuser from "../../../assets/Admin/firsuser.svg"
import firrdocument from "../../../assets/Admin/firrdocument.svg"

interface DashTaskRowProps {
  person: string;
  dropdownplaceholder: string;
  label: string;
  date: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
};

const DashTaskRow: FunctionComponent<DashTaskRowProps> = ({
  person,
  dropdownplaceholder,
  label,
  date,
  propBackgroundColor,
  propBorder,
  propColor,
}) => {
  const button8Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const button9Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={`self-stretch bg-surface-bg-primary flex flex-row items-start justify-start p-4 box-border gap-[20px] max-w-full text-left text-sm text-colors-text-black font-body-xs-semi-bold mq950:flex-wrap`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[282px] max-w-full">
        <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
          <img
            className="h-[15px] w-[15px] relative overflow-hidden shrink-0"
            alt=""
            src={firrdocument}
          />
          <div className="relative font-semibold">
            {label}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[8px] text-xs text-text-text-secondary mq450:flex-wrap">
          <div className="flex-1 relative inline-block min-w-[56px]">
            Assigned By:
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[54px] pl-0 gap-[4px] text-colors-text-black">
            <img
              className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
              alt=""
              src={firsuser}
            />
            <div className="relative">{person}</div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-16 pl-0 gap-[4px]">
            <img
              className="h-2.5 w-2.5 relative overflow-hidden shrink-0"
              alt=""
              src={firrtimeforward}
            />
            <div className="relative">{date}</div>
          </div>
        </div>
      </div>
      <div>
        <InputsDropdown label="" placeHolder={dropdownplaceholder} options={["done", "In Progress", "Closed", "new",
          "Not Started"]} />
      </div>
    </div>
  );
};

export default DashTaskRow;
