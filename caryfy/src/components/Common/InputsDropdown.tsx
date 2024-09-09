import { useState, useMemo, FunctionComponent, useEffect } from "react";
import otlchevronforward1 from '../../assets/otlchevronforward1@2x.png'

interface InputsDropdownProps {
    label: string;
    placeHolder: string;
    propMinWidth?: string;
    options: any;
    onSelect?: any;
    errorMessage?: any
    payerName?: any
    payerId?: any
}


const InputsDropdown: FunctionComponent<InputsDropdownProps> = ({ label, placeHolder, propMinWidth, options, onSelect, errorMessage, payerName, payerId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeHolder);

    useEffect(() => {
        if (payerId && payerName) {
            handleOptionSelect(payerId, payerName)
        }

    }, [])

    const content1Style = useMemo(() => {
        return {
            minWidth: propMinWidth,
        };
    }, [propMinWidth]);

    function handleDropdownToggle() {
        if (!payerName) {
            setIsOpen(!isOpen);
        }
    };

    function handleOptionSelect(key: any, name: any) {
        setSelectedOption(name);
        setIsOpen(false);
        if (onSelect) {
            onSelect(key,name);
        }
    };


  return (
    <div id="addinterration-blg-dv"
            className={`relative flex-1 flex flex-col items-start justify-start gap-[8px]  max-w-[322px] text-left text-sm text-text-text-primary font-body-reg`}
        >
            <div className="self-stretch relative font-semibold">{label}</div>
            <div className="self-stretch flex flex-col items-start justify-start text-text-text-secondary">
                <div id="cts-dropdown-dv"
                    className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-text-text-tertiary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[8px] border-[1px] border-solid border-surface-border mq450:flex-wrap"
                    onClick={handleDropdownToggle}
                >
                    <div
                        className="flex-1 flex flex-row items-center justify-start"
                        style={content1Style}
                    >
                        <div className="flex-1 relative">{selectedOption}</div>
                    </div>
                    <img
                        className={`h-4 w-4 relative overflow-hidden shrink-0 object-contain transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        alt=""
                        src={otlchevronforward1}
                    />
                </div>
                {isOpen && (
                    <div className="absolute left-0 mt-11 w-full self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-white border-[1px] border-solid border-surface-border z-50">
                        {options?.map((option: any, index: any) => (
                            <div
                                key={index}
                                className="py-2 px-[15px] hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionSelect(option.key, option.name)}
                            >
                                {option.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {errorMessage && <p className="text-red pl-1">{errorMessage.message}</p>}
        </div>
  );
};

export default InputsDropdown;
