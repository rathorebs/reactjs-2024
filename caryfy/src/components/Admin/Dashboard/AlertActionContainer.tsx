import { FunctionComponent, useMemo, type CSSProperties } from "react";

interface AlertActionContainerProps {
  iONIconAalertcircleoutlin?: string;
  button: string;
  isHighlighted?: boolean;
  showIONIconAalertcircleoutlin?: boolean;
  iONIconAalertcircleoutlinVisible?: boolean;
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  onButtonClick: (label: string) => void;
};

const AlertActionContainer: FunctionComponent<AlertActionContainerProps> = ({
  iONIconAalertcircleoutlin,
  button,
  isHighlighted,
  showIONIconAalertcircleoutlin,
  propBackgroundColor,
  propBorder,
  propColor,
  onButtonClick,
}) => {
  const buttonCardStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left  text-sm text-surface-error font-body-xs-semi-bold"
      onClick={() => onButtonClick(button)} style={{ border: isHighlighted ? "1px solid red" : '' }}>
      <div
        className=" bg-surface-bg-red self-stretch rounded-radius-sm  flex flex-row items-center justify-start py-1.5 px-[15px] gap-[8px] border-[1px] border-solid border-surface-error"
        style={buttonCardStyle}
      >
        {showIONIconAalertcircleoutlin && (
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0"
            alt=""
            src={iONIconAalertcircleoutlin}
          />
        )}
        <div className="flex-1 relative" style={buttonStyle} >
          {button}
        </div>
        <b className="relative font-bold" style={numberStyle}>
          1
        </b>
      </div>
    </div>
  );
};

export default AlertActionContainer;
