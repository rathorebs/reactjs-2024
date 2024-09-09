import { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import dftarrowback from "../../../../assets/delete-shift/dftarrowback.svg";
import ApproveShift from "../../../../components/Schedular/AskCary/shifts/ApproveShift";

const CaryfySCH5ShiftApproval: FunctionComponent = () => {
    const history = useHistory()

    function onBackClick() {
        history.push('/askcary')
    }

    return (
        <section id="cts-respon-p-dv" className="self-stretch min-h-screen flex flex-row flex-wrap items-start justify-center py-40 px-5 box-border max-w-full z-[1] text-left text-xl text-dark-font font-body-reg mq825:box-border">
            <div className="w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1400:max-w-full">
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                    <img
                        className="cursor-pointer h-6 w-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src={dftarrowback}
                        onClick={onBackClick}

                    />
                    <h3 className="my-0 flex-1 relative font-bold inline-block max-w-[calc(100%_-_29px)] mq450:text-base">
                       Approve Shift
                    </h3>
                </div>
                <ApproveShift />
            </div>
        </section>
    );
}; 

export default CaryfySCH5ShiftApproval;
