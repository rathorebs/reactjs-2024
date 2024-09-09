import { FunctionComponent } from "react";
import ContainerForDashboard from "../../components/Schedular/dashboard/ContainerForDashboard";
import lefticon1 from "../../assets/dashboard/lefticon1.svg";
import posticon from "../../assets/dashboard/posticon.svg";

const CaryfyDashBoard: FunctionComponent = () => {
    const handleClick = () => {
        alert("You Reset the form")
    };

    return (
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-gray overflow-hidden flex flex-row flex-wrap items-start justify-center relative gap-[24px_22px] min-h-[1362px] max-w-full">
            <img
                className="h-[3394px] w-[3241px] absolute !m-[0] top-[-889px] left-[-745px]"
                alt=""
            />
            <div id="cts-respon-p-dv" className="flex-1 flex flex-col items-start justify-start py-40 px-5 box-border gap-[20px] max-w-[1366px] z-[1] mq1425:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full mq1425:flex-wrap">
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[82px] max-w-full mq450:text-base">
                        Dashboard
                    </h3>
                    <p className="my-0 relative text-sm text-colors-text-gray">{`Updated 4 mins. ago `}</p>
                    <button id="reset-cts-dv" className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-main-blue rounded-radius-radius-sm flex flex-row items-center  text-surface-bg-primary justify-center gap-[4px]" onClick={handleClick}><span>Reset</span>
                        <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                            src={lefticon1}
                        />
                        <img
                            className="h-4 w-4 relative overflow-hidden shrink-0"
                            alt=""
                            src={posticon}
                        />
                    </button>
                </div>
                <ContainerForDashboard />
            </div>
        </div>
    );
};

export default CaryfyDashBoard;