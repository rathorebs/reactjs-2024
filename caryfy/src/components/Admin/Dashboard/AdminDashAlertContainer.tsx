import DocumentRow from "./DocumentRow";
import iioniconaalertcircleoutline from "../../../assets/Admin/ioniconaalertcircleoutline-1.svg"
import { FunctionComponent } from "react";

interface AdminDashAlertContainerProps {
  alertLabel: string | undefined;
}

const AdminDashAlertContainer: FunctionComponent<AdminDashAlertContainerProps> = ({ alertLabel }) => {
  return (
    <div className="self-stretch shadow-[2px_2px_32px_rgba(0,_19,_85,_0.08)] rounded-lg bg-surface-bg-primary box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-surface-error border-[1px] border-solid border-surface-border">
      <div className="self-stretch bg-surface-bg-red overflow-hidden flex flex-row items-center justify-start py-[15px] px-4 box-border max-w-full">
        <div className="flex-1 flex flex-row items-center justify-start gap-[10px] max-w-full">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src={iioniconaalertcircleoutline}
          />
          <b className="flex-1 relative inline-block max-w-[calc(100%_-_34px)]">
            {alertLabel}
          </b>
        </div>
      </div>
      <div id="responsive_tabel" className="w-[630px] overflow-x-auto flex flex-col items-start justify-start p-4 box-border max-w-full text-sm text-colors-text-black">
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
        <DocumentRow name="Matthew King" doctype="Driving license" date="03/31/2024" />
      </div>
    </div>
  )
}
export default AdminDashAlertContainer;