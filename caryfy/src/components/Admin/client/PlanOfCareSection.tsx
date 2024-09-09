import React, { Fragment, FunctionComponent, useState } from 'react';
import InputsDropdown from '../../Common/InputsDropdown';
import otlchevronforward from "../../../assets/otlchevronforward1@2x.png";
import InputsNew from '../../Common/InputsNew';

interface PlanOfCareProps {
    rowLabels: string[];
    sectionLabel: string;
    inputLabel: string;
}

const PlanOfCareSection: FunctionComponent<PlanOfCareProps> = ({ rowLabels, sectionLabel, inputLabel }) => {
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    const initialCheckedState = rowLabels.map(() => new Array(7).fill(false));
    const [checkedState, setCheckedState] = useState(initialCheckedState);

    const handleCheckboxChange = (rowIndex: number, index: number) => {
        const updatedCheckedState = checkedState.map((row, i) =>
            i === rowIndex
                ? row.map((item, j) => (j === index ? !item : item))
                : row
        );
        setCheckedState(updatedCheckedState);
    };

    return (
        <div id="accordion-cts-blg" >
            <div id="inneraccordion-cts" className="self-stretch bg-stroke1 flex flex-row items-start justify-start py-spacing-spacing-sm pr-[1072px] pl-4 gap-[8px] mq450:pr-5 mq450:box-border mq950:pr-[268px] mq950:box-border mq1425:pr-[536px] mq1425:box-border">
                <img
                    className={`h-4 w-4 relative overflow-hidden shrink-0 object-contain ${open ? 'rotate-180' : ''}`}
                    loading="lazy"
                    alt=""
                    src={otlchevronforward}
                    onClick={toggleDropdown}
                />
                <span className="flex-1 relative text-sm font-body-reg text-dark-font text-left">{sectionLabel}</span>
            </div>
            {open && (
                <Fragment>
                    {rowLabels.map((rowLabel, rowIndex) => (
                        <div id="clientcare-input" key={rowIndex} className="self-stretch bg-white flex flex-row items-start justify-start p-4 box-border gap-[20px] max-w-full mq1425:flex-wrap">
                            <span className="flex-1 relative text-sm font-body-reg text-dark-font text-left inline-block min-w-[322px] max-w-[322px]">
                                {rowLabel}
                            </span>
                            {checkedState[rowIndex].map((isChecked, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <input
                                        className="m-0 h-4 flex-[0.1522] min-w-[108px] max-w-[110px] mq450:flex-1"
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => handleCheckboxChange(rowIndex, index)}
                                    />
                                    {isChecked && <InputsDropdown label='' placeHolder='Morning' options={['Morning', 'Evening', 'All Day']} />}
                                </div>
                            ))}
                        </div>
                    ))}
                    <InputsNew label={inputLabel} contentPlaceholder='Add Notes' type='text' />
                </Fragment>
            )}
        </div>
    );
};

export default PlanOfCareSection;
