import { FunctionComponent, useState } from "react";
import AlertActionContainer from "./AlertActionContainer";
import InputsNew from "../../Common/InputsNew";
import verticalContainer1 from "../../../assets/Admin/vertical-container-1@2x.png"
import verticalContainer2 from "../../../assets/Admin/vertical-container-2@2x.png"
import verticalContainer from "../../../assets/Admin/vertical-container@2x.png"
import firrcomments from "../../../assets/Admin/firrcomments.svg"
import otlsearch from "../../../assets/Admin/otlsearch.svg"
import otlexpand from "../../../assets/Admin/otlexpand.svg"
import firsflag1 from "../../../assets/Admin/firsflag-11.svg"
import ioniconaaddoutline from "../../../assets/Admin/ioniconaaddoutline.svg"
import iioniconaalertcircleoutline from "../../../assets/Admin/ioniconaalertcircleoutline-1.svg"
import lefticon1 from "../../../assets/Admin/lefticon1.svg"
import ioniconttimeoutline from "../../../assets/Admin/ioniconttimeoutline.svg"
import ioniconttimeoutline1 from "../../../assets/Admin/ioniconttimeoutline-1.svg"
import ioniconddocumenttextoutline from "../../../assets/Admin/ioniconddocumenttextoutline.svg"
import AdminDashAlertContainer from "./AdminDashAlertContainer";
import DashTaskRow from "./DashTaskRow";

const AdminDashboard: FunctionComponent = () => {
  const [buttonLabel, setButtonLabel] = useState("Document Expiration");
  const [isButtonClicked, setIsButtonClicked] = useState(true);

  function handleButtonClick(label: string) {
    setButtonLabel(label);
    setIsButtonClicked(true);
  }

  function handleClick() {
    alert("Your Searched text is submitted")
  };

  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-0 pl-0 box-border gap-[20px_18px] max-w-full text-left text-base text-dimgray font-body-xs-semi-bold`}
    >
      <div id="dash-leftbar" className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[328px] max-w-[328px]">
        <div className="self-stretch h-[104.9px] relative hidden text-6xs font-inter">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
          <img
            className="absolute h-[47.57%] w-[11.74%] top-[38.7%] right-[56.16%] bottom-[13.73%] left-[32.1%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector-1.svg"
          />
          <div className="absolute top-[11.34%] left-[6.22%] w-0 h-0">
            <div className="absolute hidden w-[41.6px]">schedule</div>
            <b className="absolute top-[0px] left-[0px] text-sm hidden font-body-xs-semi-bold text-darkslategray w-[265.6px]">
              Schedule
            </b>
          </div>
          <div className="absolute h-[24.4%] w-[76.83%] top-[45.76%] right-[11.4%] bottom-[29.84%] left-[11.77%] text-8xs-9">
            <div className="absolute h-[23.44%] w-full top-[0%] right-[0%] bottom-[76.56%] left-[0%]">
              <div className="absolute h-full w-[6.03%] top-[0%] right-[93.97%] bottom-[0%] left-[0%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Mon
                </div>
              </div>
              <div className="absolute h-full w-[4.96%] top-[0%] right-[78.65%] bottom-[0%] left-[16.39%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Tus
                </div>
              </div>
              <div className="absolute h-full w-[6.03%] top-[0%] right-[62.42%] bottom-[0%] left-[31.55%] text-surface-bg-primary">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Wed
                </div>
              </div>
              <div className="absolute h-full w-[4.96%] top-[0%] right-[47.34%] bottom-[0%] left-[47.7%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Thu
                </div>
              </div>
              <div className="absolute h-full w-[3.29%] top-[0%] right-[32.46%] bottom-[0%] left-[64.25%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Fri
                </div>
              </div>
              <div className="absolute h-full w-[4.4%] top-[0%] right-[15.95%] bottom-[0%] left-[79.64%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Sat
                </div>
              </div>
              <div className="absolute h-full w-[4.96%] top-[0%] right-[0%] bottom-[0%] left-[95.04%]">
                <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                  Sun
                </div>
              </div>
            </div>
            <div className="absolute h-[46.88%] w-full top-[53.13%] right-[0.04%] bottom-[0%] left-[1.19%] text-3xs-8">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute w-[3.33%] top-[0%] left-[0%] inline-block">
                  5
                </div>
                <div className="absolute w-[3.9%] top-[0%] left-[15.95%] inline-block">
                  6
                </div>
                <div className="absolute h-full w-[3.33%] top-[0%] right-[64.76%] bottom-[0%] left-[31.9%] text-surface-bg-primary">
                  <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                    7
                  </div>
                </div>
                <div className="absolute h-full w-[3.9%] top-[0%] right-[48.21%] bottom-[0%] left-[47.89%]">
                  <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                    8
                  </div>
                </div>
                <div className="absolute h-full w-[3.9%] top-[0%] right-[32.26%] bottom-[0%] left-[63.84%]">
                  <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                    9
                  </div>
                </div>
                <div className="absolute h-full w-[6.11%] top-[0%] right-[15.47%] bottom-[0%] left-[78.43%]">
                  <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                    10
                  </div>
                </div>
                <div className="absolute h-full w-[5.58%] top-[0%] right-[0%] bottom-[0%] left-[94.42%]">
                  <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
                    11
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[8.58%] w-[14.79%] top-[22.78%] right-[41.55%] bottom-[68.64%] left-[43.66%] text-5xs-7">
            <div className="absolute w-full top-[0%] left-[0%] inline-block h-full">
              July 2021
            </div>
          </div>
          <img
            className="absolute h-[6.77%] w-[91.34%] top-[54.62%] right-[4.36%] bottom-[38.61%] left-[4.3%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/container.svg"
          />
          <img
            className="absolute h-[4.86%] w-[2.1%] top-[74.74%] right-[61.01%] bottom-[20.4%] left-[36.89%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/text-input-container.svg"
          />
          <img
            className="absolute h-[4.86%] w-[2.1%] top-[74.74%] right-[24.63%] bottom-[20.4%] left-[73.26%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/horizontal-container.svg"
          />
        </div>
        <div className="self-stretch rounded-lg bg-main-blue box-border overflow-hidden flex flex-col items-start justify-start pt-3.5 px-0 pb-0 gap-[16px] max-w-full text-xl text-surface-bg-primary border-[1px] border-solid border-gainsboro-100">
          <div className="w-[832px] h-[832px] relative [filter:blur(92px)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#002562,_#6c8dff)] hidden max-w-full" />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-4 text-center">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px]">
              <div className="h-8 w-8 [backdrop-filter:blur(24px)] rounded-md bg-surface-bg-primary flex flex-row items-center justify-center">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/ioniconcchevronback.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <h3 className="m-0 self-stretch relative text-inherit font-bold font-inherit mq450:text-base">
                  January
                </h3>
              </div>
              <div className="h-8 w-8 [backdrop-filter:blur(24px)] rounded-md bg-surface-bg-primary flex flex-row items-center justify-center">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/ioniconcchevronforward.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[165px] flex flex-row items-start justify-start py-0 px-4 box-border gap-[16px] text-base">
            <div className="flex flex-col items-start justify-start">
              <b className="h-[30px] relative font-bold flex items-center shrink-0">
                Tuesday
              </b>
              <b className="h-[76px] relative text-37xl font-bold inline-block mq450:text-15xl mq950:text-26xl">
                09
              </b>
            </div>
            <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start text-center text-sm">
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] text-base">
                <b className="self-stretch h-[22px] relative font-bold inline-block">
                  M
                </b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px] text-base">
                <b className="self-stretch h-[22px] relative font-bold inline-block">
                  T
                </b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px] text-base">
                <b className="self-stretch h-[22px] relative font-bold inline-block">
                  W
                </b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px] text-base">
                <b className="self-stretch h-[22px] relative font-bold inline-block">
                  T
                </b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px] text-base">
                <b className="self-stretch h-[22px] relative font-bold inline-block">
                  F
                </b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px] text-base">
                <b className="self-stretch relative font-bold">S</b>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px] text-base">
                <b className="self-stretch relative font-bold">S</b>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">1</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">2</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">3</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">4</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">5</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">6</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">7</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">8</div>
              </div>
              <div className="h-[27px] w-[27px] rounded-81xl bg-khaki flex flex-col items-center justify-center p-1 box-border ml-[-0.6px] text-colors-text-black">
                <b className="self-stretch relative font-bold">9</b>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">10</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">11</div>
              </div>
              <div className="h-[27px] w-[27px] rounded-81xl flex flex-col items-center justify-center p-1 box-border ml-[-0.6px]">
                <div className="self-stretch relative">12</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">13</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">14</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">15</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">16</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">17</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">18</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">19</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">20</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">21</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">22</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">23</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">24</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">25</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">26</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">27</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">28</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">29</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">30</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">31</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border opacity-[0.2] min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">1</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border opacity-[0.2] min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">2</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border opacity-[0.2] min-w-[28px] z-[1] ml-[-0.6px]">
                <div className="self-stretch relative">3</div>
              </div>
              <div className="flex-1 rounded-81xl flex flex-col items-center justify-center p-1 box-border opacity-[0.2] min-w-[28px] ml-[-0.6px]">
                <div className="self-stretch relative">4</div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-surface-bg-primary flex flex-col items-start justify-start pt-[22.5px] px-4 pb-4 gap-[11px] text-sm text-colors-text-black">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.5px] gap-[16px]">
              <b className="flex-1 relative font-bold">Meetings</b>
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={ioniconaaddoutline}
                />
              </div>
            </div>
            <div className="self-stretch h-[54px] rounded-lg bg-surface-bg-primary overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="mt-[-7px] w-[316px] rounded-tl-none rounded-tr-81xl rounded-br-81xl rounded-bl-none bg-table-background flex flex-row items-start justify-start py-[15px] px-2 box-border gap-[8px] shrink-0 [debug_commit:69da668]">
                <div className="h-[68px] w-[316px] relative rounded-tl-none rounded-tr-81xl rounded-br-81xl rounded-bl-none bg-table-background hidden" />
                <div className="h-[38px] w-[38px] rounded-81xl bg-gray flex flex-row items-center justify-start p-[3px] box-border z-[1]">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={ioniconttimeoutline}
                  />
                </div>
                <div className="w-[234px] flex flex-col items-start justify-start">
                  <b className="self-stretch relative z-[1]">
                    Office Monthly Meeting wi...
                  </b>
                  <b className="self-stretch relative font-bold text-main-blue whitespace-nowrap z-[1]">
                    08:00 AM
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-surface-border" />
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                <div className="h-[22px] w-[22px] rounded-81xl bg-table-background flex flex-row items-start justify-start p-[3px] box-border">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src={ioniconttimeoutline1}
                  />
                </div>
                <div className="w-[270px] relative inline-block shrink-0">
                  Call with Moore, Elizabeth
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[26px] mt-[-3px] text-xs text-main-blue">
                <b className="flex-1 relative font-semibold whitespace-nowrap">
                  10:00 AM
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.2)] rounded-radius-md1 bg-surface-bg-primary flex flex-col items-start justify-start p-4 gap-[16px] text-surface-error">
          <div className="self-stretch flex flex-row items-center justify-start py-1 px-0 gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src={iioniconaalertcircleoutline}
            />
            <b className="flex-1 relative">Alerts</b>
          </div>
          <AlertActionContainer
            iONIconAalertcircleoutlin={iioniconaalertcircleoutline}
            button="Document Expiration"
            showIONIconAalertcircleoutlin
            iONIconAalertcircleoutlinVisible
            isHighlighted={buttonLabel === "Document Expiration"}
            onButtonClick={handleButtonClick} />
          <AlertActionContainer
            iONIconAalertcircleoutlin={iioniconaalertcircleoutline}
            button="Safe Shift alert"
            isHighlighted={buttonLabel === "Safe Shift alert"}
            showIONIconAalertcircleoutlin
            iONIconAalertcircleoutlinVisible
            onButtonClick={handleButtonClick} />

          <AlertActionContainer
            iONIconAalertcircleoutlin={iioniconaalertcircleoutline}
            button="PA Expiration Alerts "
            isHighlighted={buttonLabel === "PA Expiration Alerts "}
            showIONIconAalertcircleoutlin
            iONIconAalertcircleoutlinVisible
            onButtonClick={handleButtonClick} />
          <AlertActionContainer
            iONIconAalertcircleoutlin={iioniconaalertcircleoutline}
            button="Client reported behavior"
            isHighlighted={buttonLabel === "Client reported behavior"}
            showIONIconAalertcircleoutlin
            iONIconAalertcircleoutlinVisible
            onButtonClick={handleButtonClick} />
          <AlertActionContainer
            iONIconAalertcircleoutlin={iioniconaalertcircleoutline}
            button="Hospitalization Prediction"
            isHighlighted={buttonLabel === "Hospitalization Prediction"}
            showIONIconAalertcircleoutlin
            iONIconAalertcircleoutlinVisible
            onButtonClick={handleButtonClick}
          />


        </div>
        <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.2)] rounded-radius-md1 bg-surface-bg-primary flex flex-col items-start justify-start p-4 gap-[16px] text-main-blue">
          <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-0 gap-[10px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              alt=""
              src={firsflag1}
            />
            <b className="flex-1 relative">Actions</b>
          </div>
          <AlertActionContainer
            iONIconAalertcircleoutlin={lefticon1}
            button="New Hired"
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000"
          />
          <AlertActionContainer iONIconAalertcircleoutlin={lefticon1}
            button="New Clients"
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000"
          />
          <AlertActionContainer iONIconAalertcircleoutlin={lefticon1}
            button="Scheduling Difference"
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000"
          />
          <AlertActionContainer iONIconAalertcircleoutlin={lefticon1}
            button="Shifts without clock in"
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000"
          />
          <AlertActionContainer iONIconAalertcircleoutlin={lefticon1}
            button="Client without Shifts"
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000"
          />
          <AlertActionContainer iONIconAalertcircleoutlin={lefticon1}
            button={`Early & Late Clock In/Out`}
            onButtonClick={() => { }}
            showIONIconAalertcircleoutlin={false}
            iONIconAalertcircleoutlinVisible={false}
            propBackgroundColor="#f0f8ff"
            propBorder="unset"
            propColor="#000" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[398px] max-w-[630px] text-main-blue mq450:min-w-full mq950:max-w-full">
        <div className="self-stretch shadow-[2px_2px_32px_rgba(0,_19,_85,_0.08)] rounded-lg bg-surface-bg-primary box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1 max-w-full border-[1px] border-solid border-surface-border">
          <div className="self-stretch bg-surface-bg-blue overflow-hidden flex flex-row items-center justify-start py-[15px] px-4 box-border max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px] max-w-full">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                alt=""
                src={ioniconddocumenttextoutline}
              />
              <b className="h-[22px] flex-1 relative inline-block max-w-[calc(100%_-_34px)]">
                Tasks
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start p-4 box-border max-w-full text-sm text-colors-text-black">
            <div className="self-stretch rounded-lg bg-surface-bg-primary box-border flex flex-col items-start justify-start max-w-full border-[1px] border-solid border-surface-border">
              <DashTaskRow
                dropdownplaceholder="Done"
                label=" Arcu at scelerisque senectus sit felis mi urna amet consequat"
                date="2 Days Ago"
                person="Garcia, Elijah"
              />
              <DashTaskRow
                dropdownplaceholder="In Progress"
                label=" Arcu at scelerisque senectus sit felis mi urna amet consequat"
                date="2 Days Ago"
                person="Garcia, Elijah"
              />
              <DashTaskRow
                dropdownplaceholder="Not Started"
                label=" Arcu at scelerisque senectus sit felis mi urna amet consequat"
                date="2 Days Ago"
                person="Garcia, Elijah"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start p-4">
            <div className="flex flex-row items-center justify-end gap-[4px]">
              <div className="h-1.5 w-1.5 relative rounded-81xl bg-colors-text-black" />
              <div className="h-1.5 w-1.5 relative rounded-81xl bg-surface-border" />
              <div className="h-1.5 w-1.5 relative rounded-81xl bg-surface-border" />
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[2px_2px_32px_rgba(0,_19,_85,_0.08)] rounded-lg bg-surface-bg-primary box-border overflow-hidden flex flex-col items-start justify-start max-w-full text-surface-error border-[1px] border-solid border-surface-border">
          {isButtonClicked && (
            <AdminDashAlertContainer alertLabel={buttonLabel} />
          )}
        </div>

      </div>
      <div id="dash-rightbar" className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[20px] min-w-[131px] max-w-[328px] text-colors-text-black">
        <div className="self-stretch shadow-[2px_2px_32px_rgba(0,_19,_85,_0.08)] rounded-lg bg-surface-bg-primary box-border flex flex-col items-start justify-start py-3.5 px-[15px] gap-[16px] min-w-[328px] border-[1px] border-solid border-surface-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[8px] border-[1px] border-solid border-surface-border">
              <div className="flex-1 flex flex-row items-center justify-start">
                <div className="flex-1 flex flex-row items-center justify-start gap-[4px]">
                  <img
                    className="h-6 w-6 relative rounded-[50%] object-cover min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src={verticalContainer}
                  />
                  <input
                    placeholder="Ask Cary"
                    className="text-colors-text-gray whitespace-pre-wrap text-area border-none outline-none"
                  />
                </div>
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={otlsearch}
                onClick={handleClick}
              />

              <div className="rounded bg-main-blue flex flex-row items-center justify-start p-[5px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={otlexpand}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-center justify-start py-px px-0">
                  <b className="flex-1 relative">{`Accounting `}</b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-sm">
                  <div className="self-stretch rounded-radius-sm bg-surface-bg-primary flex flex-row items-center justify-start py-2.5 px-[15px] whitespace-nowrap border-[1px] border-solid border-surface-border">
                    <b className="flex-1 relative font-semibold cursor-pointer">Drive Time</b>
                  </div>
                  <div className="self-stretch rounded-radius-sm bg-surface-bg-primary flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
                    <b className="flex-1 relative font-semibold cursor-pointer">Holiday</b>
                  </div>
                  <div className="self-stretch rounded-radius-sm bg-surface-bg-primary flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
                    <b className="flex-1 relative font-semibold cursor-pointer">Mileage</b>
                  </div>
                  <div className="self-stretch rounded-radius-sm bg-surface-bg-primary flex flex-row items-center justify-start py-2.5 px-[15px] whitespace-nowrap border-[1px] border-solid border-surface-border">
                    <b className="flex-1 relative font-semibold cursor-pointer">Week Range</b>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start py-px px-0">
                  <b className="flex-1 relative font-bold">Configuration</b>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start min-w-[191px] max-w-[322px] text-sm text-text-text-secondary">
            <InputsNew contentPlaceholder="How can i Help you?" label="" type="text" />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-surface-bg-primary flex flex-col items-start justify-between py-4 px-2.5 box-border min-h-[701px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[22.5px] gap-[16px]">
            <div className="self-stretch flex flex-row items-center justify-start py-0.5 px-0 gap-[10px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={firrcomments}
              />
              <input
                placeholder="Recent Messages"
                className="text-colors-text-gray whitespace-pre-wrap text-area border-none outline-none"
              />
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={otlsearch}
                onClick={handleClick}
              />
              <div className="rounded bg-main-blue flex flex-row items-center justify-start p-[5px]">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src={otlexpand}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm">
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer1}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    John Adams
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer2}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    Mary James
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer1}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    John Adams
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer2}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    Mary James
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer1}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    John Adams
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer2}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    Mary James
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer1}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    John Adams
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer2}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <a className="[text-decoration:none] self-stretch relative font-semibold text-[inherit]">
                    Mary James
                  </a>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
              <div className="self-stretch bg-surface-bg-primary flex flex-row items-start justify-start pt-spacing-spacing-sm2 px-spacing-spacing-md pb-2.5 gap-[8px] border-b-[1px] border-solid border-surface-border">
                <img
                  className="h-8 w-8 relative rounded-[50%] object-contain"
                  alt=""
                  src={verticalContainer1}
                />
                <div className="flex-1 flex flex-col items-start justify-center">
                  <b className="self-stretch relative font-semibold">
                    John Adams
                  </b>
                  <div className="self-stretch relative text-xs text-text-text-secondary">
                    Hi ..
                  </div>
                </div>
                <div className="relative text-2xs text-text-text-secondary">
                  4:00AM
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start min-w-[191px] max-w-[322px] text-sm text-main-blue">
            <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-surface-bg-primary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] gap-[8px] whitespace-nowrap border-[1px] border-solid border-surface-border">
              <div className="flex-1 relative">
                <span>Contact Name</span>
                {/* <span className="text-text-text-secondary whitespace-pre-wrap">
                  {" "}
                  Type Your Message
                </span> */}
                <input
                  placeholder="Type Your Message"
                  className="text-colors-text-gray whitespace-pre-wrap text-area border-none outline-none"
                />
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/otlmic.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
