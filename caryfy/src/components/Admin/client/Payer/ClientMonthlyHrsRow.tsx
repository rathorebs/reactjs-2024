// // src/components/MonthlyAuthorizedHours.jsx
// import { FunctionComponent } from 'react';
// import InputsNew from '../../../Common/InputsNew';

// interface MonthlyAuthorizedHoursProps {
//   handleClick: () => void;
// }

// const ClientMonthlyHrsRow: FunctionComponent<MonthlyAuthorizedHoursProps> = ({ handleClick }) => {
//   return (
//     <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
//       <div className="self-stretch flex flex-row items-start justify-start max-w-full">
//         <b className="flex-1 relative text-base inline-block font-body-xs-semi-bold text-colors-text-black text-left max-w-full">
//           Monthly Authorized Hours
//         </b>
//       </div>
//       <div className="self-stretch h-[317px] relative rounded-radius-md bg-surface-bg-primary mq1425:h-auto mq1425:min-h-[317px]">
//         {[
//           { month: 'January', top: '16px', left: '16px' },
//           { month: 'February', top: '16px', left: '327.5px' },
//           { month: 'March', top: '16px', left: '639px' },
//           { month: 'April', top: '16px', left: '950.5px' },
//           { month: 'May', top: '102px', left: '16px' },
//           { month: 'June', top: '102px', left: '327.5px' },
//           { month: 'July', top: '102px', left: '639px' },
//           { month: 'August', top: '102px', left: '950.5px' },
//           { month: 'September', top: '188px', left: '16px' },
//           { month: 'October', top: '188px', left: '327.5px' },
//           { month: 'November', top: '188px', left: '639px' },
//           { month: 'December', top: '188px', left: '950.5px' },
//         ].map(({ month, top, left }) => (
//           <div key={month} className={`absolute top-[${top}] left-[${left}] w-[295.5px] h-[70px] flex flex-col items-start justify-start gap-[8px] min-w-[191px] max-w-[322px]`}>
//             <InputsNew label={month} contentPlaceholder="" type="text" />
//           </div>
//         ))}
//         <div className="absolute top-[274px] left-[16px] flex flex-row items-center justify-end py-0 pr-0 pl-[1112px] gap-[8px] mq1425:flex-wrap">
//           <div
//             className="rounded-radius-radius-sm bg-surface-bg-primary flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px]"
//             onClick={handleClick}
//           >
//             <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-body-xs-semi-bold text-surface-primary-surface text-center inline-block min-w-[46px]">
//               Cancel
//             </button>
//           </div>
//           <button
//             className="cursor-pointer [border:none] py-spacing-spacing-xs px-spacing-spacing-sm bg-surface-primary-surface rounded-radius-radius-sm flex flex-row items-center justify-center gap-[4px]"
//           // onClick={handleClick}
//           >
//             <div className="relative text-sm font-body-xs-semi-bold text-surface-bg-primary text-center inline-block min-w-[32px]">
//               Save
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientMonthlyHrsRow;
// src/components/ClientMonthlyHrsRow.jsx
// src/components/ClientMonthlyHrsRow.jsx
import { FunctionComponent } from 'react';
import InputsNew from '../../../Common/InputsNew';

interface MonthlyAuthorizedHoursProps {
  handleClick: () => void;
}

const ClientMonthlyHrsRow: FunctionComponent<MonthlyAuthorizedHoursProps> = ({ handleClick }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <b className="flex-1 text-base font-body-xs-semi-bold text-colors-text-black text-left">
          Monthly Authorized Hours
        </b>
      </div>
      <div className="self-stretch flex flex-wrap gap-4 p-4 rounded-md bg-surface-bg-primary">
        {months.map((month) => (
          <div key={month} className="flex flex-col items-start justify-start gap-2 min-w-[295px] max-w-[322px]">
            <InputsNew label={month} contentPlaceholder="" type="text" />
          </div>
        ))}
        <div className="w-full flex flex-row items-center justify-end gap-2 mt-4">
          <div
            className="rounded-sm bg-surface-bg-primary flex flex-row items-center justify-center py-1 px-2 gap-1"
            onClick={handleClick}
          >
            <button className="cursor-pointer border-none p-0 bg-transparent text-sm font-body-xs-semi-bold text-surface-primary-surface text-center min-w-[46px]">
              Cancel
            </button>
          </div>
          <button
            className="cursor-pointer border-none py-1 px-2 bg-surface-primary-surface rounded-sm flex flex-row items-center justify-center gap-1"
          >
            <div className="text-sm font-body-xs-semi-bold text-surface-bg-primary text-center min-w-[32px]">
              Save
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientMonthlyHrsRow;
