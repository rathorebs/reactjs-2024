import { FunctionComponent } from "react";
import ContainerForAgencyInfo from "../../components/management/ContainerForAgencyInformation";

const AgencyInformation: FunctionComponent = () => {
    return (
        <div className="self-stretch themebg-cts-blg overflow-hidden flex flex-row flex-wrap items-start justify-center relative gap-[24px_22px] max-w-full min-h-[screen]" >
            <img
                className="h-[3394px] w-[3241px] absolute !m-[0] top-[-889px] left-[-745px]"
                alt=""
            />
            <ContainerForAgencyInfo />
        </div>
    );
};

export default AgencyInformation;