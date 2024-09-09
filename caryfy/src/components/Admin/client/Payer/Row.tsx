import { FunctionComponent } from "react";

export type RowType = {
  className?: string;
  sUNDAY?: string;
};

const Row: FunctionComponent<RowType> = ({  sUNDAY }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start p-4 gap-[20px] text-left text-sm text-colors-text-black font-body-xs-semi-bold mq1425:flex-wrap`}
    >
      <div className="flex-1 relative inline-block min-w-[185px] max-w-[188px]">
        {sUNDAY}
      </div>
      <div className="h-[35px] flex-[0.9044] rounded-radius-sm box-border min-w-[185px] max-w-[188px] border-[1px] border-solid border-gray-300  mq450:flex-1" />
      <div className="h-[35px] flex-[0.9044] rounded-radius-sm box-border min-w-[185px] max-w-[188px] border-[1px] border-solid border-gray-300  mq450:flex-1" />
      <div className="h-[35px] flex-[0.9044] rounded-radius-sm box-border min-w-[185px] max-w-[188px] border-[1px] border-solid border-gray-300  mq450:flex-1" />
      <div className="h-[35px] flex-[0.9044] rounded-radius-sm box-border min-w-[185px] max-w-[188px] border-[1px] border-solid border-gray-300   mq450:flex-1" />
      <div className="h-[35px] flex-[0.9044] rounded-radius-sm box-border min-w-[185px] max-w-[188px] border-[1px] border-solid border-gray-300  mq450:flex-1" />
    </div>
  );
};

export default Row;
