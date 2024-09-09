import { FunctionComponent, useEffect, useState } from "react";
import otlchevronforward1 from '../../assets/otlchevronforward1@2x.png'

interface StackProps {
    mainCategoryId?: number;
    subCategoryId?: number;
    heading: string,
    rows: {
        subcategoryqueid: string;
        subcategoryquestion: string;
        has_agency_plan_of_care: boolean;
    }[],
    initialOpen?: boolean;
    handleCheckBoxData: any
}

const Stack: FunctionComponent<StackProps> = ({ heading, rows, initialOpen, mainCategoryId, subCategoryId, handleCheckBoxData }) => {
    const [open, setOpen] = useState(initialOpen)
    const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({});

    function toggleDropdown(): void {
        setOpen(!open)
    }

    useEffect(() => {
        // Initialize checkbox states based on has_agency_plan_of_care
        const initialCheckboxStates: { [key: string]: boolean } = {};
        rows.forEach(row => {
            initialCheckboxStates[row.subcategoryqueid] = row.has_agency_plan_of_care;
        });
        setCheckboxStates(initialCheckboxStates);
    }, [rows]);

    useEffect(() => {
        rows.forEach(rowData => {
            if (rowData.has_agency_plan_of_care) {
                handleCheckBoxData(rowData.subcategoryqueid, mainCategoryId, subCategoryId)
            }
        })
    }, [])

    function handleCheckboxChange(e: any, subcategoryqueid: string, mainCategoryId: any, subCategoryId: any): void {
        setCheckboxStates(prevState => ({
            ...prevState,
            [subcategoryqueid]: !prevState[subcategoryqueid]
        }));
        handleCheckBoxData(subcategoryqueid, mainCategoryId, subCategoryId)
    };

    return (
        <div
            className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-left text-sm text-text-text-primary font-body-reg"
        >
            <div id="accordion-dv" className="self-stretch bg-text-text-tertiary flex flex-row items-start justify-start py-spacing-spacing-sm px-4 box-border gap-[8px] max-w-full">
                <img
                    className={`cursor-pointer h-4 w-4 relative overflow-hidden shrink-0 object-contain ${open ? 'rotate-180' : ''}`}
                    alt=""
                    src={otlchevronforward1}
                    onClick={toggleDropdown}
                />
                <p className="flex-1 relative inline-block max-w-[calc(100%_-_24px)] my-0">
                    <b>{heading}</b>
                </p>
            </div>
            {open && (
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-main-blue">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[279px] pl-0 gap-[8px_16px] mq950:pr-[139px] mq950:box-border mq450:pr-[69px] mq450:box-border">
                        {rows?.map((row, idx) => (
                            <div key={row.subcategoryqueid} className="flex flex-row items-center justify-start gap-[6px]">
                                <input
                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                    type="checkbox"
                                    checked={checkboxStates[row.subcategoryqueid] || false}
                                    onChange={(e) => handleCheckboxChange(e, row.subcategoryqueid, mainCategoryId, subCategoryId)}
                                />
                                <p className="my-0 relative inline-block min-w-[117px]">
                                    {row.subcategoryquestion}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Stack