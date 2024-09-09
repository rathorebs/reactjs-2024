import { FunctionComponent, useMemo, type CSSProperties } from "react";
import srpcirclecheckmarkc from "../../../assets/client-details/srpcirclecheckmarkc.svg";

interface ClientDetailCardProps {
  label: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const ClientDetailCard: FunctionComponent<ClientDetailCardProps> = ({
  label,
  propTop,
  propLeft,
}) => {

  const sectionBoxStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div id="cts_card-blg"
      className="absolute top-[126px] left-[990.5px] flex flex-col items-start justify-center min-w-[303px] text-center text-sm text-dark-font font-body-reg"
      style={sectionBoxStyle}
    >
      <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded bg-white box-border overflow-hidden flex flex-col items-center justify-center py-2.5 px-[15px] gap-[8px] min-w-[303.5px] whitespace-nowrap border-[1px]">
        <b className="self-stretch relative cursor-pointer">{label}</b>
        <img
          className="w-6 h-6 relative rounded-sm overflow-hidden shrink-0"
          alt=""
          src={srpcirclecheckmarkc}
        />
      </div>
    </div>
  );
};

export default ClientDetailCard;
