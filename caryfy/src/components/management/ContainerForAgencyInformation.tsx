import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import InputsNew from "../Common/InputsNew";
import { useHistory } from "react-router-dom";
import icon from '../../assets/icon.svg'
import icon_1 from '../../assets/icon-1.svg'
import checkAgencyicon from '../../assets/check-agency-icon.svg'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ApolloError, useLazyQuery, useMutation } from "@apollo/client";
import { GET_AGENCY_BY_UUID } from "../../api/query";
import { UserContext } from "../../providers/MainContext";
import Loader from "../Common/Loader";
import { UPDATE_AGENCY_EMPLOYEE, UPLOAD_BASE64_FILE } from "../../api/mutation";
import { showError, showSuccess } from "../Common/ToastNotification";
import GooglePlacesAutocomplete from "../Common/GooglePlacesAutocomplete";

interface AgencyInfoForm {
    companyName: string;
    dba: string;
    email: string;
    phone: string;
    address?: string;
    addressLine?: string;
    city?: string;
    zip?: string;
    fb?: string;
    twitter?: string;
    website?: string;
    linkedIn?: string;
    agencyFirstName: string;
    agencyLastName: string;
    agencyEmail: string;
    agencyPhone: string;
    imageurl?: string
}

const agencyInfoSchema = yup.object().shape({
    companyName: yup.string()
        .trim()
        .required('This field is required')
        .matches(/^(?![.]+$)(?!\d+$)(?!^\d+[.]+\d+$).*$/, 'Please add a valid input to Comapny Name'), // Regex to check for non-numeric and non-dot characters
    dba: yup.string()
        .trim()
        .required('This field is required')
        .matches(/^(?![.]+$)(?!\d+$)(?!^\d+[.]+\d+$).*$/, 'Please add a valid input to Comapny Name'), // Regex to check for non-numeric and non-dot characters
    email: yup.string().email('Please enter a valid email address').required('This field is required'),
    phone: yup.string()
        .matches(/^\d{10}$/, 'Please add a valid input to Phone')
        .required('This field is required'),
    address: yup.string(),
    addressLine: yup.string(),
    city: yup.string(),
    zip: yup.string(),
    fb: yup.string().url('Please enter a valid Facebook URL'),
    twitter: yup.string().url('Please enter a valid Twitter URL'),
    website: yup.string().url('Please enter a valid Website URL'),
    linkedIn: yup.string().url('Please enter a valid LinkedIn URL'),
    agencyFirstName: yup.string().required('This field is required'),
    agencyLastName: yup.string().required('This field is required'),
    agencyEmail: yup.string().email('Please enter a valid email address').required('This field is required'),
    agencyPhone: yup.string()
        .matches(/^\d{10}$/, 'Please add a valid input to Phone')
        .required('This field is required'),
    imageURL: yup.string()
});

const ContainerForAgencyInfo = () => {
    const [imgUrl, setImgUrl] = useState("")
    const [initialAddressValues, setInitialAddressValues] = useState({
        address: '',
        addressLine: '',
        city: '',
        zip: ''
    });
    const [employeeAddress, setEmployeeAddress] = useState({
        address: '',
        addressline: '',
        city: '',
        zip: ''
    });

    const { userInfo } = useContext<any>(UserContext)

    const agencyUUID = userInfo?.agency?.uuid
    const agencyId = parseInt(userInfo?.agency?.id)
    const stateId = parseInt(userInfo?.state_id)
    const countryId = parseInt(userInfo?.country_id)
    const businessTypeId = parseInt(userInfo?.agency?.business_type_id)

    // grapql api calls
    const [fetchAgencyinfo, { data, loading, error, refetch }] = useLazyQuery(GET_AGENCY_BY_UUID)
    const [updateAgencyEmployee, { }] = useMutation(UPDATE_AGENCY_EMPLOYEE);
    const [uploadFile] = useMutation(UPLOAD_BASE64_FILE)

    const fileInputRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<AgencyInfoForm>({
        resolver: yupResolver(agencyInfoSchema),
    });

    useEffect(() => {
        if (agencyUUID) {
            fetchAgencyinfo({
                variables: {
                    uuid: agencyUUID
                }
            })
        }
    }, [agencyUUID])

    useEffect(() => {
        if (data && data.agency_by_uuid && data.agency_by_uuid.status_code === 200 && data.agency_by_uuid.status === 'Success') {
            const agency = data.agency_by_uuid.data[0]
            setValue('companyName', agency.agency_name);
            setValue('email', agency.emailid || '');
            setValue('phone', agency.contactno || '');
            setValue('fb', agency.facebook_website || '');
            setValue('twitter', agency.twitter_website || '');
            setValue('website', agency.website || '');
            setValue('linkedIn', agency.linkedin_website || '');
            setValue('imageurl', agency.imageurl || "");
            setValue('dba', agency.agencysetting_dba || '');

            // if (agency.agencysettings_set && agency.agencysettings_set.length > 0) {
            //     setValue('dba', agency.agencysettings_set[0].dba || '');
            // }

            if (agency.address) {
                setInitialAddressValues({
                    address: agency.address.address || '',
                    addressLine: agency.address.addressline || '',
                    city: agency.address.city || '',
                    zip: agency.address.zip || ''
                });

                setValue('address', agency.address?.address)
                setValue('addressLine', agency.address?.addressline)
                setValue('city', agency.address?.city)
                setValue('zip', agency.address?.zip)
            }

            if (agency.employee_set && agency.employee_set.length > 0) {
                const owner = agency.employee_set.find((emp: { accesstype: string; }) => emp.accesstype === 'Owner');
                if (owner) {
                    setValue('agencyFirstName', owner.firstname);
                    setValue('agencyLastName', owner.lastname);
                    setValue('agencyEmail', owner.emailid);
                    setValue('agencyPhone', owner.contactno);
                    setEmployeeAddress(owner.address)
                }
            }

            setImgUrl(agency.imageurl)
        }
    }, [data, setValue]);

    function handleIconClick() {
        fileInputRef.current?.click();
    };

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64String = reader.result?.toString().split(',')[1];
                if (base64String) {
                    try {
                        const { data } = await uploadFile({
                            variables: {
                                file_base64: base64String,
                                filename: file.name,
                            },
                        });
                        setImgUrl(data.upload_base64_file.url);
                        setValue('imageurl', data.upload_base64_file.url)
                    } catch (error) {
                        console.error('Error uploading file:', error);
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    }

    function handlePayerInfoClick() {
        history.push('/onboard');
    };

    function handlePlanofCareClick() {
        history.push('/planofcare');
    };

    function onSelectAddress(addressData: {
        address: string;
        addressline: string;
        city: string;
        zip: string;
    }) {
        console.log({ addressData })
        // Set values in form fields
        setValue('address', addressData.address);
        setValue('addressLine', addressData.addressline);
        setValue('city', addressData.city);
        setValue('zip', addressData.zip);
    };


    async function onSubmit(data: AgencyInfoForm) {
        const formattedAddress = {
            address: data.address,
            addressline: data.addressLine,
            city: data.city,
            zip: data.zip,
        };

        const AgencyInput = {
            state_id: stateId,
            agency_name: data.companyName,
            address: formattedAddress,
            contactno: data.phone,
            emailid: data.email,
            business_type: businessTypeId,
            imageurl: imgUrl
        }

        const AgencySettingsInput = { agency_id: agencyId, dba: data.dba }

        const EmployeeInput = {
            contactno: data.agencyPhone,
            emailid: data.agencyEmail,
            address: {
                address: employeeAddress.address,
                addressline: employeeAddress.addressline,
                city: employeeAddress.city,
                zip: employeeAddress.zip
            },
            firstname: data.agencyFirstName,
            lastname: data.agencyLastName,
            state_id: stateId,
            country_id: countryId
        }

        try {
            const result = await updateAgencyEmployee({
                variables: {
                    agencyData: AgencyInput,
                    agencyId: agencyId,
                    agencySettingsData: AgencySettingsInput,
                    employeeData: EmployeeInput
                }
            });
            console.log("Mutation Result:", result);
            if (result.data.update_agency_employee.status_code === 200) {
                showSuccess(result.data.update_agency_employee.message)
            }
        } catch (error) {
            if (error instanceof ApolloError) {
                showError(error.message)
            }
        }

        refetch({ variables: { uuid: agencyUUID } });
        // history.push('/dash');
    }

    if (loading) {
        return <Loader />
    }

    return (
        <form id="agency-respom-blg" onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-row flex-wrap items-start justify-start py-40 px-5 box-border gap-[24px_22px] max-w-[1366px] min-h-[screen] z-[1] text-left text-xl text-dark-font font-body-reg mq1400:max-w-full"
        >
            <div className="w-[1286px] flex flex-row items-center justify-start max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block max-w-full mq450:text-base">
                    Onboarding
                </h3>
            </div>
            <div id="leftbar-blg" className="flex-1 rounded-radius-radius-lg bg-text-text-tertiary flex flex-col items-start justify-start p-4 box-border min-w-[328px] max-w-[328px] text-base text-text-text-tertiary">
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-text-text-primary">
                    <div className="w-10 rounded-45xl bg-green-600 flex flex-col items-center justify-center py-[9px] px-[15px] box-border count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[9px] text-xl ">
                            <img className="h-4 w-4 relative" alt="" src={checkAgencyicon} />
                        </p>
                    </div>
                    <p className="flex-1 relative text-sm cursor-pointer" onClick={handlePayerInfoClick}>Payer Information</p>
                </div>
                <div id="bdr-leftbar-dv" className="flex flex-row items-center justify-center py-0 px-5">
                    <div className="h-10 w-0.5 relative box-border border-r-[2px] border-solid border-stroke" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px] text-text-text-primary">
                    <div className="w-10 rounded-45xl bg-green-600 flex flex-col items-center justify-center py-[9px] px-[15px] box-border count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[10px] text-xl ">
                            <img className="h-4 w-4 relative" alt="" src={checkAgencyicon} />
                        </p>
                    </div>
                    <p className="flex-1 relative text-sm cursor-pointer" onClick={handlePlanofCareClick}>Plan of Care</p>
                </div>
                <div id="bdr-leftbar-dv" className="flex flex-row items-center justify-center py-0 px-5">
                    <div className="h-10 w-0.5 relative box-border border-r-[2px] border-solid border-stroke" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[8px]">
                    <div className="rounded-45xl bg-main-blue flex flex-col items-center justify-center py-[9px] px-[15px] count-left">
                        <p className="my-0 relative capitalize inline-block min-w-[9px] text-xl">
                            3
                        </p>
                    </div>
                    <p className="flex-1 relative text-text-text-primary cursor-pointer" onClick={handlePlanofCareClick}><b>Agency Information</b></p>
                </div>
            </div>
            <div id="onborading-right" className="flex-[0.966] rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-start justify-start p-8 box-border gap-[24px] min-w-[925px] max-w-full text-sm lg:min-w-full mq825:pt-[21px] mq825:pb-[21px] mq825:box-border">
                <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base">
                    <h4 className="flex-1 relative inline-block max-w-full">
                        <b> Agency Information</b>
                    </h4>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-0.5 pl-0 box-border gap-[24px_22px] max-w-full" id="cts-block-dv">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[181px] max-w-full" id="calltype-row">
                        <InputsNew label="Company Name*" contentPlaceholder="Company Name" type="text" register={register('companyName')} errorMessage={errors.companyName} />
                        <InputsNew label="DBA*" contentPlaceholder="DBA" type="text" register={register('dba')} errorMessage={errors.dba} />
                    </div>
                    <div className="flex-[0.9549] rounded bg-light-blue flex flex-col items-center justify-center p-2.5 box-border min-w-[181px] max-w-full text-center agencyinfo-img-blg" id="calltype-row ">
                        {imgUrl ? (
                            <img
                                className="w-36 h-36 relative overflow-hidden shrink-0 cursor-pointer imgagency-upload"
                                loading="lazy"
                                alt=""
                                src={imgUrl}
                                onClick={handleIconClick}
                            />
                        ) : (
                            <div className="self-stretch rounded bg-white flex flex-col items-center justify-center py-[35px] px-[9px] border-[1px] border-dashed border-neutral-200">
                                <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                                    <img
                                        className="w-6 h-6 relative overflow-hidden shrink-0"
                                        loading="lazy"
                                        alt=""
                                        src={icon}
                                    />
                                    <p className="self-stretch relative capitalize my-0">
                                        Agency Logo Upload
                                    </p>
                                    <div className="cursor-pointer rounded bg-main-blue flex flex-row items-center justify-center p-1.5" onClick={handleIconClick}>
                                        <img
                                            className="h-5 w-5 relative"
                                            loading="lazy"
                                            alt=""
                                            src={icon_1}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14px]" id="calltype-row">
                    <InputsNew label="Email*" contentPlaceholder="Email" type="email" register={register('email')} errorMessage={errors.email} />
                    <InputsNew label="Phone*" contentPlaceholder="Phone" type="text" register={register('phone')} errorMessage={errors.phone} />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[8px] text-left text-sm text-text-text-primary font-body-reg agencyinfoaddress" id="calltype-row">
                        <div className="self-stretch relative font-semibold">Address*</div>
                        <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-radius-md bg-text-text-tertiary overflow-hidden flex flex-row items-center justify-start py-2.5 px-[15px] border-[1px] border-solid border-surface-border">
                            <GooglePlacesAutocomplete onSelectAddress={onSelectAddress} initialAddress={initialAddressValues} />
                        </div>
                    </div>
                    {/* <InputsNew label="Address*" contentPlaceholder="Address" type="textarea" register={register('address')} errorMessage={errors.address} /> */}
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]" id="calltype-row">
                    <InputsNew label="Facebook" contentPlaceholder="Facebook" type="url" register={register('fb')} errorMessage={errors.fb} />
                    <InputsNew label="Twitter ( X )" contentPlaceholder="Twitter ( X )" type="url" register={register('twitter')} errorMessage={errors.twitter} />
                    <InputsNew label="Website" contentPlaceholder="Website" type="url" register={register('website')} errorMessage={errors.website} />
                    <InputsNew label="LinkedIn" contentPlaceholder="LinkedIn" type="url" register={register('linkedIn')} errorMessage={errors.linkedIn} />
                </div>
                <p className="self-stretch relative text-base">
                    <b>Agency Owner Information</b>
                </p>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1.5 pl-0 gap-[16px_14.7px]" id="calltype-row">
                    <InputsNew label="First Name*" contentPlaceholder="First Name*" type="text" register={register('agencyFirstName')} errorMessage={errors.agencyFirstName} />
                    <InputsNew label="Last Name*" contentPlaceholder="Last Name*" type="text" register={register('agencyLastName')} errorMessage={errors.agencyLastName} />
                    <InputsNew label="Email" contentPlaceholder="Email" type="text" register={register('agencyEmail')} errorMessage={errors.agencyEmail} />
                    <InputsNew label="Phone" contentPlaceholder="Phone" type="text" register={register('agencyPhone')} errorMessage={errors.agencyPhone} />
                </div>
                <div className="self-stretch flex flex-col items-end justify-center mq950:items-center mq950:justify-center mq950:pb-20 mq950:box-border">
                    <button className="cursor-pointer [border:none] py-[12.5px] px-[52px] bg-main-blue rounded-radiuscomponent-button flex flex-row items-center justify-center gap-[12px] hover:bg-dodgerblue">
                        <span className="relative text-sm font-body-reg text-white text-center inline-block min-w-[31px]">
                            Save
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContainerForAgencyInfo