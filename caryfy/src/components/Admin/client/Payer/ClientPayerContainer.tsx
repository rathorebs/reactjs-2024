
import { FunctionComponent, useState } from "react";
import dftcircleclosec from '../../../../assets/Admin/dftcircleclosec.svg';

const ClientPayerContainer: FunctionComponent = () => {
  const [selectedPayers, setSelectedPayers] = useState<{ payer: string, sections: string[] }[]>([]);
  const payerType = ["Auto Ins. Pay", "LTCI", "Medicaid", "Medicare Advantage", "Private Pay", "VA", "Work Comp"];
  const PayerProgram = ["SOURCE", "CCSP", "SFC-CCSP", "SFC-SOURCE", "NOW", "COMP", "GAPP", "ICWP"];

  // const handlePayerClick = (type: string) => {
  //   if (!selectedPayers.find(payer => payer.payer === type)) {
  //     setSelectedPayers([...selectedPayers, { payer: type, sections: getSectionsForPayer(type) }]);
  //   }
  // }
  function handlePayerClick(type: string){
    const payerIndex = selectedPayers.findIndex(payer => payer.payer === type);

    if (payerIndex === -1) {
      setSelectedPayers([...selectedPayers, { payer: type, sections: getSectionsForPayer(type) }]);
    } else {
      setSelectedPayers(selectedPayers.filter(payer => payer.payer !== type));
    }
  }


  function getSectionsForPayer(type: string) {
    switch (type) {
      case "Medicaid":
        return ["Medicaid Payer Group", "Medicaid Docs"];
      case "VA":
        return ["VA"];
      case "Work Comp":
        return ["Work Comp"];
      case "Auto Ins. Pay":
        return ["Auto Insurance"];
      case "LTCI":
        return ["LTCI Claims", "LTCI Details"];
      case "Private Pay":
        return ["Private Pay"];
      default:
        return [];
    }
  };

  return (
    <div id="payer-cts-form" className={`self-stretch relative rounded-radius-radius-lg  bg-surface-bg-blue  p-8  min-h-auto max-w-full text-center text-sm text-colors-text-black font-body-xs-semi-bold`}>
      <div className="w-[1262px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-full text-left">
        <b className="self-stretch relative">Payer Type</b>
        <div id="payer-btn-row" className="flex flex-row flex-wrap items-end justify-start py-0 pr-[414px] pl-0 gap-[6px] text-surface-bg-primary">
          {payerType.map((type) => (
            <button key={type} className={`cursor-pointer [border:none] py-spacing-1 px-spacing-3 bg-surface-primary-surface rounded-81xl flex flex-row items-center justify-center 
            ${selectedPayers.find(payer => payer.payer === type) ? "bg-surface-primary-surface" : "bg-dodgerblue text-white"}`} onClick={() => handlePayerClick(type)}>
              <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-left inline-block min-w-[28px]">
                {type}
              </div>
            </button>
          ))}
        </div>
      </div>
      {selectedPayers.map(({ payer, sections }) => (
        <div key={payer} className=" w-[1262px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-full text-left">
          <div>{console.log(selectedPayers)}</div>
          <div className="self-stretch flex flex-row items-center justify-start max-w-full">
            <b className="flex-1 relative inline-block max-w-full">
              Program Name
            </b>
          </div>
          <div id="payer-btn-row"  className="flex flex-row flex-wrap items-center justify-start py-0 pr-[424px] pl-0 gap-[8px]">
            {PayerProgram.map((program) => (
              <button
                key={program}
                className="cursor-pointer py-1.5 px-[23px] bg-surface-bg-primary rounded-81xl flex flex-row items-center justify-center border-[1px] border-solid border-surface-border hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray"
              >
                <div className="relative text-sm font-body-xs-semi-bold text-colors-text-black text-left inline-block">
                  {program}
                </div>
              </button>
            ))}
          </div>
          {sections.map((section) => (
            <div key={section} className="flex flex-row flex-wrap items-center justify-start py-0  pl-0 gap-[8px]">
              {/* <div className={`absolute top-[204px] left-[32px] w-[303.5px] flex flex-col items-start justify-center min-w-[303.5px]`}> */}
                <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded bg-surface-bg-primary box-border overflow-hidden flex flex-col items-center justify-center py-2.5 px-[15px] gap-[8px] min-w-[303.5px] whitespace-nowrap border-[1px] border-solid border-surface-border">
                  <b className="self-stretch relative text-center">{section}</b>
                  <img
                    className="w-6 h-6 relative rounded-sm overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src={dftcircleclosec}
                  />
                </div>
              </div>
            // </div>
          ))}
        </div>
      ))}
    </div >
  );
};

export default ClientPayerContainer;



