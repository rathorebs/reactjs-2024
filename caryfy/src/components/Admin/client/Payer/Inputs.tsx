import { FunctionComponent } from "react";

export type InputsType = {
  className?: string;
  label?: string;
  hint?: string;
};

const Inputs: FunctionComponent<InputsType> = ({
  className = "",
  label,
  hint,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px] text-left text-sm text-colors-text-black font-body-xs-semi-bold ${className}`}
    >
      <div className="self-stretch relative font-semibold">{label}</div>
      <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-1-and-half px-0">
        <div className="flex-1 flex flex-row items-center justify-start">
          <div className="flex-1 relative">{hint}</div>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
