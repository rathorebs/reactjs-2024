import { FunctionComponent } from "react";
import dftarrowback from "../../../../assets/ask-cary/dftarrowback.svg";
import { useHistory } from "react-router-dom";
import EditShift from "../../../../components/Schedular/AskCary/shifts/EditShift";

const EditShiftPage: FunctionComponent = () => {
    const history = useHistory();

    function handleBackClick() {
        history.goBack();
    };

    return (
        <div id="cts-respon-p-dv" className="self-stretch bg-gray overflow-hidden flex flex-col items-center justify-start relative py-40 gap-[24px] min-h-[screen] max-w-full">
            <img
                className="w-[3241px] h-[3394px] absolute !m-[0] top-[-889px] left-[-745px]"
                alt=""
            />
            <div id="agency-respom-blg" className="w-full flex flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-[1366px] z-[1] mq1400:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                    <img
                        className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={dftarrowback}
                        onClick={handleBackClick}

                    />
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`Edit Shift `}</h3>
                </div>
                <EditShift />
            </div>
        </div>
    );
};

export default EditShiftPage;

