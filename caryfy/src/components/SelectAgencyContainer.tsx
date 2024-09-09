import { FunctionComponent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../providers/MainContext";

const SelectAgencyContainer: FunctionComponent = () => {
  const { userInfo, setUserInfo } = useContext<any>(UserContext);
  // const agencies = userInfo?.agency
  const history = useHistory();
  const [selectedBox, setselectedBox] = useState(null);
  const [updateuser, setUpdateUser] = useState<any>({});
  const handleBoxClick = (index: any, id: any) => {
    setselectedBox(index);
    const userResult = userInfo.find((item: any) => item.id == id);
    setUpdateUser(userResult);
    // localStorage.setItem('selectedUser', JSON.stringify(userResult));
  };

  useEffect(() => {
    if (userInfo?.length < 1 || userInfo?.id) {
      history.push("/");
    }
  }, []);

  function handleClick() {
    const onboardCompleted = updateuser.agency.onboarding_completed;
    // Here set the global state
    setUserInfo(updateuser);
    // Convert the data object to a JSON string
    const jsonData = JSON.stringify(updateuser);
    // Store the JSON string in localStorage
    localStorage.setItem("employeeInfo", jsonData);

    if (onboardCompleted) {
      history.push("/dashboard");
    } else {
      history.push("/onboard");
    }
  }
  if (!userInfo?.id) {
    return (
      <div
        id="selectagency-blg"
        className="w-full relative bg-surface-bg-primary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] tracking-[normal] leading-[normal] text-left text-sm text-headings font-lato mq450:max-w-full mq950:max-w-full mq1425:max-w-full mq1900:max-w-full"
      >
        {/* <div className="self-stretch bg-app-background box-border flex flex-row items-start justify-center pt-2 px-5 pb-1.5 max-w-full border-b-[1px] border-solid border-stroke-light">
        <div className="w-[1392px] flex flex-row items-start justify-between max-w-[1392px] gap-[20px] mq1425:max-w-full">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-8 w-[110.1px] relative"
                loading="lazy"
                alt=""
                src="/caryfy-tagline.svg"
              />
            </div>
          </div>
          <div className="h-8 flex-1 hidden flex-row items-center justify-start gap-[8px] max-w-full">
            <div className="h-8 hidden flex-row items-center justify-center p-2 box-border gap-[4px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/otlrocket.svg"
              />
              <b className="relative">Actions</b>
            </div>
            <div className="h-8 hidden flex-row items-center justify-center py-2 px-[7px] box-border gap-[4px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/otldocuments.svg"
              />
              <b className="h-[17px] relative inline-block">Reports</b>
            </div>
          </div>
          <div className="hidden flex-row items-center justify-start gap-[8px] text-[8px] text-surface-bg-primary">
            <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/ioniconfflashoutline.svg"
              />
            </div>
            <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border relative gap-[8px]">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 z-[0]"
                alt=""
                src="/ioniconcchatboxoutline.svg"
              />
              <div className="h-3 w-3 !m-[0] absolute top-[0px] right-[0px] rounded-[96px] bg-error flex flex-col items-center justify-center py-[5px] px-[3px] box-border z-[1]">
                <b className="relative">2</b>
              </div>
            </div>
            <div className="h-8 flex flex-row items-center justify-center py-2 px-1 box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/ioniconccalendaroutline.svg"
              />
            </div>
          </div>
          <div className="rounded-[5px] hidden flex-row items-center justify-center py-2 px-0 gap-[7px] text-base">
            <div className="h-8 w-8 rounded-[200px] bg-headings flex flex-row items-center justify-center py-2 px-[7px] box-border">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/otlgrid.svg"
              />
            </div>
            <b className="h-[19px] relative inline-block">Caryfy Apps</b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[24px] max-w-full text-text-text-primary font-body-reg mq950:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0 text-xs">
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[54px]">{`Font Size: `}</a>
                </div>
                <div className="flex flex-row items-start justify-start gap-[2px] text-sm">
                  <b className="relative inline-block min-w-[10px]">A</b>
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconcchevrondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[2px]">
                  <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[50px]">
                    English
                  </a>
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/ioniconcchevrondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <div className="flex flex-row items-start justify-start pt-[5.3px] pb-[3.7px] pr-1.5 pl-4 relative gap-[15px]">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-stroke-light box-border border-[1px] border-solid border-gainsboro" />
                <div className="flex flex-col items-start justify-start pt-[4.4px] px-0 pb-0">
                  <b className="relative capitalize inline-block min-w-[76px] z-[1]">
                    Light Mood
                  </b>
                </div>
                <div className="h-[31px] w-[31px] rounded-[34px] bg-surface-bg-primary box-border flex flex-row items-center justify-center py-2 px-0.5 z-[1] border-[1px] border-solid border-gainsboro">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/sun.svg"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-stroke-light flex flex-row items-start justify-start py-1 px-2 gap-[8px]">
              <img
                className="h-10 w-10 relative object-contain"
                alt=""
                src="/image-188@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/ioniconcchevrondown-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
        <section className="self-stretch bg-gray overflow-hidden flex flex-col items-start justify-start py-20 px-[297px] box-border relative gap-[24px] max-w-full text-left text-xl text-text-text-primary font-body-reg mq450:pt-[52px] mq450:pb-[52px] mq450:box-border mq950:pl-[74px] mq950:pr-[74px] mq950:box-border mq1425:pl-[148px] mq1425:pr-[148px] mq1425:box-border">
          <img
            className="w-[3241px] h-[3394px] absolute !m-[0] bottom-[-2137px] left-[-745px]"
            alt=""
          />
          <div className="w-full flex flex-row items-start justify-start max-w-[1326px] z-[1] mq1425:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[1326px] mq1425:max-w-full">
              <div
                id="cts-gap-dv"
                className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 box-border gap-[8px_6px] max-w-full text-2xs text-text-text-secondary"
              >
                {userInfo?.map((data: any, index: any) => (
                  <div
                    key={index}
                    className={`flex-1 rounded bg-surface-bg-primary box-border overflow-hidden flex flex-col items-start justify-start pt-3.5 px-[15px] pb-2 gap-[7.5px] min-w-[325px] max-w-[437px] border-[1px] border-solid ${
                      selectedBox === index
                        ? "border-rose-500"
                        : "border-surface-border"
                    }  mq450:max-w-full`}
                    onClick={() => handleBoxClick(index, data.id)}
                  >
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq950:flex-wrap">
                        <div className="flex-1 relative inline-block min-w-[55px]">
                          Agency Name
                        </div>
                        <div className="relative text-xs font-semibold text-text-text-primary inline-block min-w-[102px]">
                          {data.agency.agency_name}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq950:flex-wrap">
                        <div className="flex-1 relative inline-block min-w-[30px]">
                          Email ID
                        </div>
                        <div className="relative text-xs font-semibold text-text-text-primary inline-block min-w-[111px] whitespace-nowrap">
                          {data.agency.emailid}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq950:flex-wrap">
                        <div className="flex-1 relative inline-block min-w-[67px]">
                          Contact Number
                        </div>
                        <div className="relative text-xs font-semibold text-text-text-primary inline-block min-w-[88px]">
                          {data?.agaency?.contactno}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq950:flex-wrap">
                        <div className="flex-1 relative inline-block min-w-[33px]">
                          Address
                        </div>
  
                        <div className="relative text-xs font-semibold text-text-text-primary">
                          {`${data.agency.address.address} ${data.agency.address.address} ${data.agency.address.city} ${data.agency.address.zip}`}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-px relative box-border opacity-[0.05] border-t-[1px] border-solid border-text-text-primary" />
                    {/* <button className="cursor-pointer [border:none] py-spacing-spacing-xs px-5 bg-surface-bg-primary self-stretch rounded-radius-radius-sm flex flex-row items-start justify-center gap-[4px]" onClick={handleClick}>
                  <div className="relative text-sm font-body-reg text-surface-primary-surface text-center inline-block min-w-[42px]">
                    Select
                  </div>
                </button> */}
                  </div>
                ))}
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 pr-0  gap-[8px] mq450:pl-5 mq450:box-border mq825:pl-[246px] mq825:box-border mq1400:pl-[492px] mq1400:box-border">
                <button
                  className="cursor-pointer [border:none] py-[12.5px] px-[51px] bg-surface-primary-surface rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]"
                  disabled={updateuser?.id ? false : true}
                  onClick={handleClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return null;
};

export default SelectAgencyContainer;
