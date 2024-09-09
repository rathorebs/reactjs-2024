import { FunctionComponent } from "react";
import dftarrowback from "../../../../assets/delete-shift/dftarrowback.svg";
import { useHistory } from "react-router-dom";
import AddInteraction from "../../../../components/Schedular/AskCary/documents/AddInteraction";

const AddInteractionPage: FunctionComponent = () => {
    const history = useHistory()

    function onBackClick() {
        history.push('/askcary')
    }

    return (
        <div className="self-stretch themebg-cts-blg overflow-hidden flex flex-col items-center justify-start relative gap-[24px] min-h-[100vh] max-w-full" >
            <img
                className="w-[3241px] h-[3394px] absolute !m-[0] top-[-889px] left-[-745px]"
                alt=""
            />
            <div id="cts-respon-p-dv" className="w-full flex flex-col items-center justify-start py-40 px-5 box-border gap-[24px] max-w-[1366px] z-[1] mq1400:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                    <img
                        className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={dftarrowback}
                        onClick={onBackClick}
                    />
                    <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit whitespace-pre-wrap inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`Add Interaction  `}</h3>
                </div>
                <AddInteraction />
            </div>
        </div>
    );
};

export default AddInteractionPage;
