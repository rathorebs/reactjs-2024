import { Fragment, FunctionComponent, useState } from "react";
import InputsNew from "../Common/InputsNew";
import InputsDropdown from "../Common/InputsDropdown";
import lefticon from "../../assets/lefticon.svg";
import lefticon1 from "../../assets/lefticon1.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { ApolloError } from "@apollo/client";
import { showError, showSuccess } from "../Common/ToastNotification";

interface CallTypeTableProps {
  programNames?: string[];
  shiftTypeOptions?: any;
  onCancel: () => void;
  createCalltype: any;
  refetchCallType: any;
  userInfo?: any
}

const schema = yup.object().shape({
  call_type: yup.string().required("Call Type is required"),
  shift_name: yup.string().required("Shift Type is required"),
  bill_rate: yup
    .number()
    .required("Bill Rate is required")
    .typeError("Must be a number")
    .test(
      'is-positive',
      'Value must be a positive number',
      (value: any) => !value || parseInt(value, 10) > 0 // Ensures value is positive
    ),
  pay_rate: yup
    .number()
    .required("Pay Rate is required")
    .typeError("Must be a number")
    .test(
      'is-positive',
      'Value must be a positive number',
      (value: any) => !value || parseInt(value, 10) > 0 // Ensures value is positive
    ),
  procedure_code: yup.string().optional(),
  modifier1: yup.string().optional(),
  modifier2: yup.string().optional(),
  modifier3: yup.string().optional(),
  description: yup.string().optional(),
  max_hours: yup
    .number()
    .required("This field is required")
    .typeError("Must be a number")
    .test(
      'is-positive',
      'Value must be a positive number',
      (value: any) => !value || parseInt(value, 10) > 0 // Ensures value is positive
    ).test('not-both-zero', 'Hours and Minutes cannot be both zero', function(value) {
      const { max_minutes } = this.parent;
      return !(value === 0 && max_minutes === 0);
    }),
  max_minutes: yup
    .number()
    .required("This field is required")
    .typeError("Must be a number")
    .test(
      'is-positive',
      'Value must be a positive number',
      (value: any) => !value || parseInt(value, 10) > 0 // Ensures value is positive
    )
});

const CallTypeTable: FunctionComponent<CallTypeTableProps> = ({
  programNames,
  shiftTypeOptions,
  createCalltype,
  onCancel,
  refetchCallType,
  userInfo
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });


  function onSubmit(data: any) {
    createCalltype({
      variables: {
        shifttype: data?.shift_name,
        agencyId: Number(userInfo?.agency?.id),
        payrate: data?.pay_rate,
        calltypecode: data?.call_type,
        programId: 0,
        hours: data?.max_hours,
        minutes: data?.max_minutes,
        shiftTypeRatesInput: data?.shift_name,
        shiftRate: data?.bill_rate,
        calltypeprocedurecode: data?.procedure_code,
        calltypedescription: data?.description,
        servicecodemodifier1: data?.modifier1,
        servicecodemodifier2: data?.modifier2,
        servicecodemodifier3: data?.modifier3,
      },
    })
      .then((res: any) => {
        refetchCallType({
          variables: {
            agencyId: Number(userInfo?.agency?.id),
          },
        });
        showSuccess('Call Type created successful')
        onCancel();
      })
      .catch((error: any) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message);
          showError(error.message);
        } else {
          console.error(`error message: ${error}`);
          showError(error);
        }
      });
  }

  function handleSelect(key: any, name: any) {
    setValue("shift_name", name);
    trigger("shift_name")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        id="calltype-row"
        className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-1.5 pl-0 gap-[16px_14.7px]"
      >
        <InputsNew
          label="Call Type*"
          contentPlaceholder="Call Type"
          type="text"
          register={{ ...register("call_type") }}
          errorMessage={errors?.call_type}
        />
        <InputsDropdown
          label="Shift Type*"
          placeHolder="Shift Type"
          options={shiftTypeOptions}
          onSelect={handleSelect}
          errorMessage={errors?.shift_name}
        />
        <div className="flex-1 flex flex-row items-start justify-start py-0 px-0 box-border gap-[8px] min-w-[191px] max-w-[322px]">
          <InputsNew
            label="Bill Rate*"
            contentPlaceholder="Bill Rate*"
            propMinWidth="unset"
            propMinWidth1="43px"
            type="number"
            register={{ ...register("bill_rate") }}
            errorMessage={errors?.bill_rate}
          />
          <InputsNew
            label="Pay Rate*"
            contentPlaceholder="Pay Rate"
            propMinWidth="unset"
            propMinWidth1="43px"
            type="number"
            register={{ ...register("pay_rate") }}
            errorMessage={errors?.pay_rate}
          />
        </div>
      </div>
      <div
        id="calltype-row"
        className="self-stretch flex flex-row flex-wrap items-start justify-center py-2 pr-1.5 pl-0 gap-[16px_14.7px]"
      >
        <InputsNew
          label="Procedure Code"
          contentPlaceholder="Procedure Code"
          type="text"
          register={{ ...register("procedure_code") }}
          errorMessage={errors?.procedure_code}
        />
        <InputsNew
          label=" Modifier 1"
          contentPlaceholder=" Modifier 1"
          type="text"
          register={{ ...register("modifier1") }}
          errorMessage={errors?.modifier1}
        />
        <InputsNew
          label=" Modifier 2"
          contentPlaceholder=" Modifier 2"
          type="text"
          register={{ ...register("modifier2") }}
          errorMessage={errors?.modifier2}
        />
        <InputsNew
          label=" Modifier 3"
          contentPlaceholder=" Modifier 3"
          type="text"
          register={{ ...register("modifier3") }}
          errorMessage={errors?.modifier3}
        />
      </div>
      <div className="self-stretch flex flex-row py-2 items-start justify-start max-w-full gap-[16px_14.7px]">
        <InputsNew
          label="Description"
          contentPlaceholder="Description"
          propMinWidth="191px"
          propMinWidth1="250px"
          type="text"
          register={{ ...register("description") }}
          errorMessage={errors?.description}
        />

        <InputsNew
          label="Maximum Hour*"
          contentPlaceholder="Maximum Hour"
          type="number"
          register={{ ...register("max_hours") }}
          errorMessage={errors.max_hours}
        />
        <InputsNew
          label="Maximum Minutes*"
          contentPlaceholder="Maximum Minutes"
          type="number"
          register={{ ...register("max_minutes") }}
          errorMessage={errors.max_minutes}
        />
      </div>

      <div
        id="payer-btn-row"
        className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[760px] gap-[8px] mq950:pl-[380px] mq950:box-border mq450:pl-5 mq450:box-border mq1425:flex-wrap"
      >
        <div
          className="rounded-radius-radius-sm bg-text-text-tertiary flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px] cursor-pointer"
          onClick={onCancel}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={lefticon}
          />
          <div className="relative text-sm font-body-reg text-main-blue text-center inline-block min-w-[46px]">
            Cancel
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={lefticon}
          />
        </div>
        <button className="rounded-radius-radius-sm bg-main-blue flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px] cursor-pointer rounded-radiuscomponent-button ml-2">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={lefticon1}
          />
          <div className="relative text-sm font-body-reg text-text-text-tertiary text-center inline-block min-w-[32px] p-2">
            Save
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src={lefticon1}
          />
        </button>
      </div>
    </form>
  );
};

export default CallTypeTable;
