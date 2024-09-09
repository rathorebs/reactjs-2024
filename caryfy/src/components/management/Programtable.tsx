import { FunctionComponent, useContext, useState } from "react";
import InputsNew from "../Common/InputsNew";
import InputsDropdown from "../Common/InputsDropdown";
import lefticon from "../../assets/lefticon.svg";
import lefticon1 from "../../assets/lefticon1.svg";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ApolloError } from "@apollo/client";
import { UserContext } from "../../providers/MainContext";
import { showError, showSuccess } from "../Common/ToastNotification";

interface ProgramTableProps {
    onCancel?: any;
    payerTypes?: any;
    createAgencyProgram?: any
    pn?: any;
    getAgencyProgramById?: any
    id?: any
    payerName?: any
    payerId?: any
    setRefetchMainApi?: any
    getAgencyPayerById?: any
}

const schema = yup.object().shape({
    program_name: yup.string().required('This field is required'),
    payer_id: yup.number().typeError('Must be a number').required('This field is required'),
    unit_multiplier: yup.number().typeError('Must be a number').test(
        'is-positive',
        'Value must be a positive number',
        (value: any) => !value || parseInt(value, 10) > 0 // Ensures value is positive
    ).required('This field is required'),
    medicaid_id: yup.string().matches(/^[a-zA-Z0-9]{12}$/, 'Must be 12 characters and alphanumeric')
        .required('This field is required'),
    restrict_scheduling: yup.boolean(),
    calculate_monthly_hours: yup.boolean(),
});

const ProgramTable: FunctionComponent<ProgramTableProps> = ({ pn, onCancel, payerTypes, createAgencyProgram, getAgencyProgramById, id, payerName, payerId, setRefetchMainApi, getAgencyPayerById }) => {
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm<any>({
        resolver: yupResolver(schema),
    });
    const { userInfo } = useContext<any>(UserContext)

    async function onSubmit(data: any) {
        const { program_name, payer_id, medicaid_id, restrict_scheduling, calculate_monthly_hours, payerData } = data
        const agency_id = Number(userInfo?.agency?.id)
        const unit_multiplier = Number(data.unit_multiplier)
        const payer_name = payerName || payerData
        const program_id = Number(id)
        createAgencyProgram({
            variables: {
                program_name,
                payer_id,
                unit_multiplier,
                medicaid_id,
                restrict_scheduling,
                calculate_monthly_hours,
                agency_id,
                payer_name,
                program_id
            }
        }).then((response: any) => {
            getAgencyProgramById({ variables: { agency_id: Number(userInfo?.agency?.id) } });
            getAgencyPayerById({ variables: { agency_id: Number(userInfo?.agency?.id) } })
            const currentPayerId = response.data.create_agency_program.agency_programs[0].payer_id
            onCancel("multiple", id, currentPayerId)
            showSuccess("New program created")
        }).catch((error: any) => {
            if (error instanceof ApolloError) {
                console.log("error message", error.message)
                showError(error.message);
            } else {
                console.error(`error message: ${error}`);
                showError(error);
            }
        });
    }

    function handleSelect(value: any, value2: any) {
        setValue("payer_id", value)
        setValue("payerData", value2)
        trigger("payer_id")
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="payer-input-row" className="self-stretch rounded-radius-md1 bg-text-text-tertiary flex flex-col items-start justify-start p-4 box-border gap-[16px] max-w-full ">
                <div id="cts-fullwidth-input" className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[218px] pl-0 box-border gap-[16px] max-w-full mq950:pr-[109px] mq950:box-border mq450:pr-5 mq450:box-border">
                    <InputsNew label="Program Name*" contentPlaceholder={pn} value={pn} type="text"
                        register={{ ...register('program_name') }} errorMessage={errors.program_name}
                    />
                    <InputsDropdown
                        label="Payer type*"
                        placeHolder="Payer type*"
                        options={payerTypes}
                        onSelect={handleSelect}
                        errorMessage={errors.payer_id}
                        payerName={payerName}
                        payerId={payerId}
                    />

                </div>
                <div id="cts-fullwidth-input" className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-1.5 pl-0 gap-[16px_14px] text-text-text-secondary">
                    <InputsNew
                        label="Unit Multiplier* "
                        contentPlaceholder="Unit Multiplier*"
                        propMinWidth="191px"
                        propMinWidth1="150px"
                        type="number"
                        register={{ ...register('unit_multiplier') }}
                        errorMessage={errors.unit_multiplier}
                    />
                    <InputsNew
                        label="Medicaid Id* "
                        contentPlaceholder="Medicaid Id (Reference Id)"
                        propMinWidth="191px"
                        propMinWidth1="150px"
                        type="text"
                        register={{ ...register('medicaid_id') }}
                        errorMessage={errors.medicaid_id}
                        maxValue={12}
                    />
                    <div className="flex-[0.6429] flex flex-col items-start justify-start py-0 pr-[100px] pl-0 box-border gap-[6px] min-w-[112px] text-main-blue mq450:pr-5 mq450:box-border">
                        <div className="flex flex-row items-center justify-start gap-[6px]">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                                {...register('restrict_scheduling')}
                            />
                            <div className="relative inline-block min-w-[128px]">
                                Restrict Scheduling
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[6px] text-text-text-primary">
                            <input
                                className="m-0 h-4 w-4 relative overflow-hidden shrink-0"
                                type="checkbox"
                                {...register('calculate_monthly_hours')}
                            />
                            <div className="relative">Calculate monthly hours</div>
                        </div>
                    </div>
                </div>
                <div id="payer-btn-row" className="self-stretch flex flex-row items-center justify-end py-0 pr-0 pl-[760px] gap-[8px] mq950:pl-[380px] mq950:box-border mq450:pl-5 mq450:box-border mq1425:flex-wrap">
                    <div className="rounded-radius-radius-sm bg-text-text-tertiary flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px] cursor-pointer" onClick={() => onCancel("normal", id)}>
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
            </div>
        </form>
    )
}

export default ProgramTable