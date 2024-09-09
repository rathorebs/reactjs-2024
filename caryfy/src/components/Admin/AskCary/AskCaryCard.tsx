import { FunctionComponent, useMemo, type CSSProperties } from "react";
import notebook from "../../../assets/ask-cary/notebook.svg";
import ioniconmmicoutline1 from "../../../assets/ask-cary/ioniconmmicoutline1.svg";
import ellipse from "../../../assets/ask-cary/ellipse-914@2x.png";


interface AskCarycardProps {
    label: string;
    link?: string

    /** Style props */
    propTextDecoration?: CSSProperties["textDecoration"];
};

const AskCaryCard: FunctionComponent<AskCarycardProps> = ({
    label,
    propTextDecoration,
    link
}) => {
    const button1Style: CSSProperties = useMemo(() => {
        return {
            textDecoration: propTextDecoration,
        };
    }, [propTextDecoration]);

    return (
        <div
            className="flex-1 rounded-radius-sm bg-white box-border flex flex-col items-start justify-center py-[11px] px-3 gap-[8px] min-w-[325px] max-w-[325px] text-left text-sm text-dark-font font-body-reg border-[1px] border-solid border-surface-border"
        >
            <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src={notebook}
                />
                <p className="flex-1 relative font-semibold"><b>{label}</b></p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-center text-main-blue">
                <div className="flex-1 flex flex-row items-center justify-start py-0 pr-[165px] pl-0 gap-[4px] mq450:pr-5 mq450:box-border">
                    <div className="rounded-sm bg-light-blue flex flex-row items-center justify-center p-1">
                        <img
                            className="h-4 w-4 relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src={ioniconmmicoutline1}
                        />
                    </div>
                    <div className="rounded-radius-radius-sm flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px]">
                        <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/lefticon.svg"
                        />
                        <a
                            className="[text-decoration:none] relative text-[inherit] cursor-pointer"
                            style={button1Style}
                            href={link}
                        >
                            Manually
                        </a>
                        <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src="/lefticon.svg"
                        />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-start">
                    <img
                        className="h-6 w-6 relative object-cover"
                        loading="lazy"
                        alt=""
                        src={ellipse}
                    />
                </div>
            </div>
        </div>
    );
};

export default AskCaryCard;
