import { Fragment, FunctionComponent, useState } from "react";
import { useHistory } from "react-router-dom";
import dftarrowback from "../../../../assets/delete-shift/dftarrowback.svg";
import InputsNew from "../../../../components/Common/InputsNew";

const DeleteShift: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()

    function saveOrBackClick() {
        history.push('/askcary')
    }

    return (
        <div id="deleteshift-blg" className="self-stretch themebg-cts-blg overflow-hidden flex flex-col items-center justify-start relative gap-[24px] max-w-full text-left text-xl text-dark-font font-body-reg">
            <div className="self-stretch themebg-cts-blg overflow-hidden flex flex-col items-center justify-start relative gap-[24px] min-h-[100vh] max-w-full text-left text-xl text-dark-font font-body-reg">
                <img
                    className="w-[3241px] h-[3394px] absolute !m-[0] top-[0px] left-[-745px]"
                    alt=""
                />
                <div id="cts-respon-p-dv"  className="w-full mt-0 py-40 flex flex-col items-center justify-start rounded-lg px-5 box-border gap-[24px] max-w-[1366px] z-[1] mq1400:max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                        <img
                            className="h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                            loading="lazy"
                            alt=""
                            src={dftarrowback}
                            onClick={saveOrBackClick}
                        />
                        <h3 className="flex-1 relative font-bold inline-block max-w-[calc(100%_-_29px)] mq450:text-base my-0">
                           Delete Shift
                        </h3>
                    </div>
                    <div className="self-stretch rounded-radius-radius-lg bg-light-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] max-w-full text-sm mq450:pt-[21px] mq450:pb-[21px] mq450:box-border">
                        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
                            <div className="flex-1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md1 overflow-hidden flex flex-row items-center justify-start max-w-full">
                                <div id="delete-shift-blg" className="flex flex-row items-center justify-start py-0 pr-[478px] pl-0 box-border gap-[8px] max-w-full mq450:pr-5 mq450:box-border mq825:pr-[119px] mq825:box-border mq1400:flex-wrap mq1400:pr-[239px] mq1400:box-border">
                                    <p className="m-0 relative whitespace-pre-wrap inline-block max-w-full">
                                        White, Rachel has 25 shifts from 04-30-2024 to 05-30-2024 ,
                                        Do you want to
                                    </p>
                                    <span className="rounded-radius-radius-sm flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px] text-center text-red">
                                        <span className="relative inline-block min-w-[60px] cursor-pointer">
                                            Delete all
                                        </span>
                                    </span>
                                    <span className="relative inline-block min-w-[16px] mq1400:w-full mq1400:h-4">
                                        Or
                                    </span>
                                    <span className="rounded-radius-radius-sm flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px] text-center text-main-blue">
                                        <span className="relative inline-block min-w-[91px] cursor-pointer" onClick={() => setIsOpen(true)}>
                                            Choose dates
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {isOpen && (
                            <Fragment>
                                <div id="addshift-date-time-dv" className="self-stretch flex flex-col items-start justify-start max-w-full">
                                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[602px] pl-0 box-border gap-[16px] max-w-full mq450:pr-5 mq450:box-border mq825:pr-[150px] mq825:box-border mq1400:pr-[301px] mq1400:box-border">
                                        <InputsNew label="Start Date*" type="datetime-local" contentPlaceholder="" />
                                        <InputsNew label="End Date" type="datetime-local" contentPlaceholder="" />
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                    <b className="self-stretch relative font-bold">Days</b>
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[514px] pl-0 gap-[8px_16px] mq450:pr-5 mq450:box-border mq825:pr-32 mq825:box-border mq1400:pr-[257px] mq1400:box-border">
                                            <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <div className="relative inline-block">
                                                    Monday
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <div className="relative inline-block ">
                                                    Bee Stings
                                                </div>
                                            </div>
                                            <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <a className="[text-decoration:none] relative text-[inherit] inline-block">
                                                    Wednesday
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <a className="[text-decoration:none] relative text-[inherit] inline-block">
                                                    Thursday
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <a className="[text-decoration:none] relative text-[inherit] inline-block">
                                                    Friday
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <div className="relative inline-block">
                                                    Saturday
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[6px] text-main-blue">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <div className="relative inline-block">
                                                    Peanuts
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-start gap-[6px]">
                                                <input
                                                    className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                                    type="checkbox"
                                                />
                                                <div className="relative inline-block ">
                                                    Sunday
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start">
                                    <p className="m-0 relative whitespace-pre-wrap">
                                        White, Rachel has 11 shifts from 04-30-2024 to 05-30-2024 on
                                        Monday, Wednesday, Friday.
                                    </p>
                                </div>
                                <div id="btn-row-respon" className="self-stretch flex flex-row flex-wrap items-center justify-end py-0 pr-0 pl-[984px] gap-[8px] mq450:pl-5 mq450:box-border mq825:pl-[246px] mq825:box-border mq1400:pl-[492px] mq1400:box-border">
                                    <button className="cursor-pointer py-2.5 px-[42px] bg-white flex-1 rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[88px] border-[2px] border-solid border-main-blue hover:bg-gainsboro-300 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={() => setIsOpen(false)}>
                                        <span className="relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[46px]">
                                            Cancel
                                        </span>
                                    </button>
                                    <button className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue" onClick={saveOrBackClick}>
                                        <span className="relative text-sm font-body-reg text-white text-center inline-block min-w-[32px]">
                                            Save
                                        </span>
                                    </button>
                                </div>
                            </Fragment>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteShift;
