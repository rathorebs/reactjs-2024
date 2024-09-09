import { ChangeEvent, FunctionComponent, useRef } from "react";
import dftarrowback from '../../../assets/Admin/dftarrowback.svg'
import icon from '../../../assets/Admin/icon.svg'
import icon1 from '../../../assets/Admin/icon-1.svg'
import { useHistory } from "react-router-dom";

const AdminAddClient: FunctionComponent = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    function handleBackClick() {
        history.goBack();
    };

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            // Handle the uploaded file here
            console.log('File uploaded:', file);
            // we can also upload the file to a server or display a preview
        }
    };

    function handleClick() {
        alert("DO IT MANUALLY");
    };

    function handleIconClick() {
        fileInputRef.current?.click();
    };

    return (
        <div
            className={`w-[1326px] flex flex-col items-start justify-start gap-[24px] max-w-[1326px] text-left text-xl text-colors-text-black font-body-xs-semi-bold mq1425:max-w-full `}
        >
            <div className="self-stretch flex flex-row items-center justify-start gap-[5px] max-w-full">
                <img
                    className=" h-6 w-6 relative overflow-hidden shrink-0 cursor-pointer"
                    loading="lazy"
                    alt=""
                    src={dftarrowback}
                    onClick={handleBackClick}

                />
                <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-[calc(100%_-_29px)] mq450:text-base">{`Client Details `}</h2>
            </div>
            <div id="p-cts-discrease" className="self-stretch rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border max-w-full text-center text-sm">
                <div id="assessor_upload_blg" className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[24px_22px] max-w-full">
                    <div className="flex-1 rounded bg-surface-bg-blue flex flex-col items-center justify-center p-2.5 box-border min-w-[335px] max-w-full">
                        <div className="self-stretch rounded bg-surface-bg-primary flex flex-col items-center justify-center py-[35px] px-[9px] border-[1px] border-dashed border-neutral-200">
                            <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                                <img
                                    className="w-6 h-6 relative overflow-hidden shrink-0"
                                    loading="lazy"
                                    alt=""
                                    src={icon}
                                />
                                <div className="self-stretch relative capitalize whitespace-pre-wrap">
                                    Upload Document to auto fill
                                </div>
                                <div className="rounded bg-surface-primary-surface flex flex-row items-center justify-center p-1.5" onClick={handleIconClick}>
                                    <img className="h-5 w-5 relative cursor-pointer" alt="" src={icon1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="doit-manuly_respon" className="cursor-pointer py-2.5 px-5 bg-surface-bg-primary flex-[0.9599] rounded-radiuscomponent-button box-border flex flex-row items-center justify-center gap-[12px] min-w-[335px] max-w-full border-[2px] border-solid border-surface-primary-surface hover:bg-gainsboro-100 hover:box-border hover:border-[2px] hover:border-solid hover:border-dodgerblue" onClick={handleClick}>
                        <span className="relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[106px]">
                            DO IT MANUALLY
                        </span>
                    </button>
                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
            />
        </div>

    );
};

export default AdminAddClient;
