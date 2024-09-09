import { gql } from "@apollo/client";

export const LOGIN_API_WITH_EMAIL = gql`
  mutation Login_by_email($email: String!) {
    login_by_email(emailid: $email) {
      status
      message
      status_code
      employees {
        id
        gender
        dob
        dateofjoining
        designation
        state_name
        contactno
        emailid
        imageurl
        createdby
        createdon
        updatedby
        updatedon
        status
        identifier
        lastlogin
        timezone
        uuid
        accesstype
        devicetype
        inactivereason
        isemailreceived
        isimportedtohr
        importedhruuid
        hrsynctype
        ssn
        firstname
        lastname
        locationid
        agency {
          id
          agency_name
          contactno
          emailid
          facebook_website
          twitter_website
          linkedin_website
          website
          db_timezone
          timezone
          uuid
          sagecompanyid
          invoiceuniqueid
          taxid
          createdby
          isdistancecalculation
          isgapicall
          viventiumflag
          clientlocationid
          createdon
          updatedon
          onboarding_completed
          status
          imageurl
          business_type_id
          address {
            address
            addressline
            city
            zip
          }
        }
        state_id
        country_id
      }
    }
  }
`;

export const CREATE_AGENCY_PROGRAM = gql`
  mutation CreateAgencyProgram(
    $program_name: String!
    $payer_id: Int!
    $unit_multiplier: Decimal
    $medicaid_id: String!
    $restrict_scheduling: Boolean!
    $calculate_monthly_hours: Boolean!
    $agency_id: Int!
    $payer_name: String!
    $program_id: Int!
  ) {
    create_agency_program(
      agency_programs_data: {
        program_name: $program_name
        payer_id: $payer_id
        unit_multiplier: $unit_multiplier
        medicaid_id: $medicaid_id
        restrict_scheduling: $restrict_scheduling
        calculate_monthly_hours: $calculate_monthly_hours
        agency_id: $agency_id
        program_id: $program_id
      }
      payer_name: $payer_name
    ) {
      agency_programs {
        id
        program_name
        program_id
        unit_multiplier
        medicaid_id
        createdon
        updatedon
        createdby
        updatedby
        restrict_scheduling
        calculate_monthly_hours
        agency_id
        payer_id
      }
    }
  }
`;

export const DELETE_AGENCY_PROGRAM = gql`
  mutation Delete_agency_program($agency_program_ids: [Int]!) {
    delete_agency_program(agency_program_ids: $agency_program_ids) {
      deleted_agency_program_ids
    }
  }
`;

export const DELETE_AGENCY_PROGRAM_WITH_PAYER = gql`
  mutation Delete_agency_program_with_payer($agency_id: Int!, $payer_id: Int!) {
    delete_agency_program_with_payer(
      agency_id: $agency_id
      payer_id: $payer_id
    ) {
      message
      status
      status_code
    }
  }
`;

export const UPDATE_AGENCY_EMPLOYEE = gql`
  mutation Update_agency_employee(
    $agencyData: AgencyInput!
    $agencyId: ID!
    $agencySettingsData: AgencySettingsInput!
    $employeeData: EmployeeInput!
  ) {
    update_agency_employee(
      agencyData: $agencyData
      agencyId: $agencyId
      agencySettingsData: $agencySettingsData
      employeeData: $employeeData
    ) {
      agency {
        id
        agency_name
        contactno
        emailid
        facebook_website
        twitter_website
        linkedin_website
        website
        db_timezone
        timezone
        uuid
        sagecompanyid
        invoiceuniqueid
        taxid
        createdby
        isdistancecalculation
        isgapicall
        viventiumflag
        clientlocationid
        createdon
        updatedon
        onboarding_completed
        status
        imageurl
      }
      employee {
        id
        gender
        dob
        dateofjoining
        designation
        state_name
        contactno
        emailid
        imageurl
        createdby
        createdon
        updatedby
        updatedon
        status
        identifier
        lastlogin
        timezone
        uuid
        accesstype
        devicetype
        inactivereason
        isemailreceived
        isimportedtohr
        importedhruuid
        hrsynctype
        ssn
        firstname
        lastname
        locationid
      }
      agencySettings {
        id
        agencyuuid
        nameofstateagencyforappendixl
        nameofpersonholdingtheinformationforappendixl
        addressofpersonholdingtheinformationforappendixl
        addressfordepartmentofcommunityhealthforcomplaints
        transportationname
        transportationcontactno
        geofenceradiusforclockin
        clockinoutminuteslimit
        isvitalreceive
        istasktimerecord
        isdiseaseform
        medicaidnumber
        redirecturl
        isappointmentmilesrecord
        dba
        clockinlateminute
        clockoutlateminute
        inradiusnotification
        shiftapprovalpercentflag
        lastshifttaskviewflag
        showsfctime
        showsfcsignflag
        clockinoutreasonview
        allowclockinout
        isclockoutafter
        clockoutafterminute
        isnotemandatory
        mandatoryprogramlist
        notabletosignflag
      }
      status
      message
      status_code
    }
  }
`;

export const UPLOAD_BASE64_FILE = gql`
  mutation Upload_base64_file($file_base64: String!, $filename: String!) {
    upload_base64_file(file_base64: $file_base64, filename: $filename) {
      url
    }
  }
`;

export const DELETE_CALLTYPE = gql`
  mutation Delete_calltype($calltypeid: ID!) {
    delete_calltype(calltypeid: $calltypeid) {
         status
        message
        status_code
    }
  }
`;

export const UPDATE_CALLTYPE = gql`
  mutation UpdateCalltype(
    $shifttype: String!
    $payrate: Float!
    $agencyId: Int!
    $calltypeid: Int!
    $calltypecode: String!
    $hours: Int!
    $minutes: Int!
    $shiftTypeRatesInput: String!
    $shiftRate: Decimal!
    $calltypedescription: String!
    $calltypeprocedurecode: String!
  ) {
    update_calltype(
      agencypayrate_input: {
        shifttype: $shifttype
        payrate: $payrate
        agency_id: $agencyId
      }
      calltype_input: {
        calltypeid: $calltypeid
        agency_id: $agencyId
        calltypecode: $calltypecode
        hours: $hours
        minutes: $minutes
        calltypedescription: $calltypedescription
        calltypeprocedurecode: $calltypeprocedurecode
      }
      rates_input: {
        shift_type: $shiftTypeRatesInput
        shift_rate: $shiftRate
        agency_id: $agencyId
      }
    ) {
      calltype {
        calltypeid
        agency_id
        calltypecode
        calltypedescription
        createdon
        quickbookid
        sageearningcode
        calltypestatus
        calltypeprocedurecode
        updateon
        updateby
        hcpccode
        servicecode
        servicecodemodifier1
        servicecodemodifier2
        servicecodemodifier3
        hours
        minutes
      }
    }
  }
`;

export const CREATE_CALLTYPE = gql`
  mutation CreateCalltype(
    $shifttype: String!
    $agencyId: Int!
    $payrate: Float
    $calltypecode: String!
    $hours: Int!
    $minutes: Int!
    $shiftTypeRatesInput: String!
    $shiftRate: Decimal
    $calltypeprocedurecode: String!
    $calltypedescription: String!
    $servicecodemodifier1: String!
    $servicecodemodifier2: String!
    $servicecodemodifier3: String!
  ) {
    create_calltype(
      agencypayrate_input: {
        shifttype: $shifttype
        agency_id: $agencyId
        payrate: $payrate
      }
      calltype_input: {
        calltypecode: $calltypecode
        hours: $hours
        minutes: $minutes
        agency_id: $agencyId
        calltypeprocedurecode: $calltypeprocedurecode
        calltypedescription: $calltypedescription
        servicecodemodifier1: $servicecodemodifier1
        servicecodemodifier2: $servicecodemodifier2
        servicecodemodifier3: $servicecodemodifier3
      }
      rates_input: {
        shift_type: $shiftTypeRatesInput
        agency_id: $agencyId
        shift_rate: $shiftRate
      }
    ) {
      calltype {
        calltypeid
        agency_id
        calltypecode
        calltypedescription
        createdon
        quickbookid
        sageearningcode
        calltypestatus
        calltypeprocedurecode
        updateon
        updateby
        hcpccode
        servicecode
        servicecodemodifier1
        servicecodemodifier2
        servicecodemodifier3
        hours
        minutes
      }
      rates {
        id
        shift_type
        shift_rate
        status
        createdon
        createdby
        updatedby
        updatedon
        agency_id
      }
    }
  }
`;
export const ADD_PLAN_OF_CARE_MUTATION = gql`
  mutation AddPlanOfCare(
    $inputs: [AgencyPlanOfCareInput!]!
    $agency_id: Int!
    $createdby: String!
  ) {
    add_plan_of_care(
      inputs: $inputs
      agency_id: $agency_id
      createdby: $createdby
    ) {
      status
      message
      status_code
      plan_of_care {
        id
        servicelistid
        subcategoryid
        subcategoryqueid
        createdby
        createdon
        updatedby
        updatedon
        agency_id
      }
    }
  }
`;