import { FunctionComponent } from "react";
import caryfyTagline from "../../assets/Admin/caryfy-tagline.svg";
import otlrocket from "../../assets/Admin/otlrocket.svg";
import otldocuments from "../../assets/Admin/otldocuments.svg";
import ioniconfflashoutline from "../../assets/Admin/ioniconfflashoutline.svg";
import ioniconcchatboxoutline from "../../assets/Admin/ioniconcchatboxoutline.svg";
import ioniconccalendaroutline from "../../assets/Admin/ioniconccalendaroutline.svg";
import otlgrid from "../../assets/Admin/otlgrid.svg";
import ioniconcchevrondown_2 from "../../assets/Admin/ioniconcchevrondown-2.svg";
import ioniconcchevrondown from "../../assets/Admin/ioniconcchevrondown.svg";
import sun from "../../assets/Admin/sun.svg";
import image_188 from "../../assets/Admin/image-188@2x.png";
import logouticon from "../../assets/logout-nav.png";
import caryfyWhite from "../../assets/Admin/caryfy-white.svg";
import { useLocation } from "react-router-dom";

const HeaderNew: FunctionComponent = () => {
  const pathname = useLocation();
  const selectagencyscreen = pathname.pathname == "/select_agency";
 
  return (
    <header
      className={`self-stretch bg-app-background box-border flex flex-row items-start justify-center pt-2 px-5 pb-1.5 top-[0] z-[99] fixed min-w-full text-left text-sm text-headings font-lato border-b-[1px] border-solid border-stroke-light`}
    >
      <div className="w-[1392px] flex flex-row items-start justify-between max-w-[1392px] gap-[20px] mq1425:max-w-full">
        <div className="flex flex-col items-start justify-start px-0 pb-0">
          <div className="nav-logoimg-blg flex flex-row items-start justify-start">
            <img
              className="h-8 w-[110.1px] relative lightmode_logo"
              loading="lazy"
              alt=""
              src={caryfyTagline}
            />
            {/* <img
              className="h-8 w-[110.1px] relative darkmode_logo"
              loading="lazy"
              alt=""
              src={caryfyWhite}
            /> */}
          </div>
        </div>
        <div className="h-8 flex-1 hidden flex-row items-center justify-start gap-[8px] max-w-full">
          <div className="h-8 hidden flex-row items-center justify-center p-2 box-border gap-[4px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={otlrocket}
            />
            <b className="relative">Actions</b>
          </div>
          <div className="h-8 hidden flex-row items-center justify-center py-2 px-[7px] box-border gap-[4px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src={otldocuments}
            />
            <b className="h-[17px] relative inline-block">Reports</b>
          </div>
        </div>
        <div className="hidden flex-row items-center justify-start gap-[8px] text-5xs text-surface-bg-primary">
          <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={ioniconfflashoutline}
            />
          </div>
          <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border relative gap-[8px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 z-[0]"
              alt=""
              src={ioniconcchatboxoutline}
            />
            <div className="h-3 w-3 !m-[0] absolute top-[0px] right-[0px] rounded-77xl bg-error flex flex-col items-center justify-center py-[5px] px-[3px] box-border z-[1]">
              <b className="relative">2</b>
            </div>
          </div>
          <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src={ioniconccalendaroutline}
            />
          </div>
        </div>
        <div className="rounded-8xs hidden flex-row items-center justify-center py-2 px-0 gap-[7px] text-base">
          <div className="h-8 w-8 rounded-181xl bg-headings flex flex-row items-center justify-center py-2 px-[7px] box-border">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={otlgrid}
            />
          </div>
          <b className="h-[19px] relative inline-block whitespace-nowrap">
            Caryfy Apps
          </b>
        </div>
        <div className="nav-items-dv flex flex-row items-center justify-start gap-[24px] max-w-full text-colors-text-black font-body-xs-semi-bold">
          <div className="flex flex-col items-start justify-start px-0 pb-0 text-xs">
            <div className="flex flex-row items-start justify-start gap-[8px] ">
              {/* <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[54px] whitespace-nowrap">{`Font Size: `}</a>
              </div> */}
              <div
                id="font_increase_dv"
                className="flex flex-row items-start justify-start gap-[2px] text-sm"
              >
                <div id="ctsdropdown-blg-dv">
                  <button className="dropbtn">
                    A
                    <div className="drop-icon-dv flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <img
                        id="drop-icon-img"
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        src={ioniconcchevrondown}
                      />
                    </div>
                  </button>
                  <div className="dropdown-content">
                    <a href="#">A</a>
                    <a href="#">A +</a>
                    <a href="#">A -</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start  px-0 pb-0">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                {/* <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[50px]">
                  English
                </a>
                <div className="drop-icon-dv flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0"
                    alt=""
                    src={ioniconcchevrondown}
                  />
                </div> */}
                <div id="ctsdropdown-blg-dv">
                  <button className="dropbtn">
                    English
                    <div className="drop-icon-dv flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <img
                        id="drop-icon-img"
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        src={ioniconcchevrondown}
                      />
                    </div>
                  </button>
                  <div id="dropdown-content-en" className="dropdown-content">
                    <a href="#">English</a>
                    <a href="#">French</a>
                    <a href="#">German</a>
                    <a href="#">Spanish</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="toggle-button-cover flex flex-row items-center justify-start py-1 pr-1 pl-2 relative gap-[8px]">
            <div className="button-cover">
              <div className="button r" id="button-1">
                <input type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row items-center justify-start py-1 pr-1 pl-2 relative gap-[8px]">
            <div id="toggle_nav_blg" className="  h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-stroke-light box-border border-[1px] border-solid border-gainsboro-200" />
            <div className="flex flex-col items-center justify-start px-0 pb-0">
              <a id="toggle-clk" className="[text-decoration:none] relative capitalize font-bold text-[inherit] inline-block min-w-[84px] whitespace-nowrap z-[1]">
                LIGHT MODE
              </a>
            </div>
            <div className="light-icon-dv h-10 w-10 rounded-full bg-surface-bg-primary box-border flex flex-row items-center justify-center py-2 px-[3px] z-[1] border-[1px] border-solid border-gainsboro-200">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={sun}
              />
            </div>
          </div> */}
          {selectagencyscreen ? (
            <div className=" flex flex-row items-center justify-start  relative">
              <div className="inner-logout-nav bg-stroke-light">
                <p className="py-0  relative font-bold inline-block whitespace-nowrap">
                  Login Out
                </p>
                <img
                  id="drop-icon-img profile-blg"
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  alt=""
                  src={logouticon}
                />
              </div>
            </div>
          ) : (
            <div className="nav-user-img  rounded-lg bg-stroke-light flex flex-row items-center justify-start py-1 px-2 gap-[8px]">
              <div id="ctsdropdown-blg-dv">
                <button className="dropbtn">
                  {" "}
                  <img
                    className="h-10 w-10 relative object-contain"
                    alt=""
                    src={image_188}
                  />
                  <div className=" drop-icon-dv flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <img
                      id="drop-icon-img profile-blg"
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src={ioniconcchevrondown}
                    />
                  </div>
                </button>
                <div id="dropdown-profile" className="dropdown-content">
                  <a href="#">Settings</a>
                  <a href="#">Logout</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderNew;
