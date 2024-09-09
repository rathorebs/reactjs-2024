import { FunctionComponent } from "react";
import dftcall from "../../../assets/Admin/dftcall.svg";

interface DocumentRowProps {
    name: string;
    doctype: string;
    date: string;
}

const DocumentRow: FunctionComponent<DocumentRowProps> = ({ name, doctype, date }) => {
    return (
        <div className="w-[598px] rounded-lg bg-surface-bg-primary box-border flex flex-col items-start justify-start border-[1px] border-solid border-surface-border">
            <div className="self-stretch bg-surface-bg-primary overflow-x-auto flex flex-row items-center justify-start p-4 gap-[20px]">
                <div className="flex flex-row items-center justify-start py-0 pr-[18px] pl-0 gap-[8px]">
                    <div className="relative">{name}</div>
                    <img className="h-3 w-3 relative overflow-hidden shrink-0" alt="" src={dftcall} />
                </div>
                <div className="flex-1 relative">{doctype}</div>
                <div className="flex-1 relative">{date}</div>
                <div className="flex-1 rounded-radius-radius-sm flex flex-row items-center justify-start py-spacing-spacing-xs px-0 gap-[8px] text-center text-main-blue">
                    <img className="h-4 w-4 relative overflow-hidden shrink-0 hidden" alt="" src="/lefticon2.svg" />
                    <div className="relative">Remind</div>
                    <img className="h-4 w-4 relative overflow-hidden shrink-0 hidden" alt="" src="/lefticon2.svg" />
                </div>
            </div>
        </div>
    );
};

export default DocumentRow;
