import { gql } from "@apollo/client";

export const API_CALL = gql`
  query AllStates {
    allStates {
      stateId
      stateName
    }
  }
`;

export const ONBOARD_PAYER_TYPE = gql`
  query Payers_by_state {
    payers_by_state(state_id: 10) {
      status
      status_code
      message
      data {
        id
        payer_name
        createdon
        updatedon
      }
    }
  }
`;

export const ONBOARD_PAYER_TYPE_BY_AGENCY_ID = gql`
  query AgencyPayerByAgencyId($agency_id: Int!) {
    agency_payer_by_agency_id(agency_id: $agency_id) {
      status
      message
      status_code
      data {
        id
        payer_name
        payer_id
        createdon
        updatedon
        createdby
        updatedby
        agency_id
      }
    }
  }
`;

export const ONBOARD_PROGRAM_NAME_BY_AGENCY_ID = gql`
  query AgencyProgramByAgencyId($agency_id: Int!) {
    agency_program_by_agency_id(agency_id: $agency_id) {
       status
        message
        status_code
        data {
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

export const ONBOARD_PROGRAM_NAME = gql`
  query Program_by_state_payer($stateId: Int!, $payerId: Int!) {
    program_by_state_payer(state_id: $stateId, payer_id: $payerId) {
         status
        status_code
        message
        data {
            id
            program_name
            program_type
            createdon
            updatedon
        }
    }
  }
`;


export const GET_CALL_TYPE = gql`
  query CallType($agencyId: Int!) {
    call_type(agency_id: $agencyId) {
       status
        message
        status_code
        data {
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
            rates_set {
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
            agencypayrate_set {
                id
                shifttype
                payrate
                createdby
                createdon
                updateby
                updateon
                clientlocationid
                clients
                status
                agency_id
            }
        }
    }
  }
`;


export const ALL_SERVICE_LIST_CATEGORIES_BY_AGENCY_ID = gql`
  query AllServiceListCategoriesByAgencyId($agency_id: Int!, $business_type_id: Int!) {
    all_service_list_categories_by_agency_id(agency_id: $agency_id, business_type_id: $business_type_id) {
      status
      message
      status_code
      data {
        id
        category
        subcategory {
          subcategory
          subcategoryid
          isadultdaycare
          questions {
            subcategoryquestion
            subcategoryqueid
            type
            islongcareinsurance
            ismedicaid
            isprivatepayplan
            isvaplan
            ismedicareadvantageplan
            isworkcompclientplan
            iscommunityplan
            has_agency_plan_of_care
          }
        }
      }
    }
  }
`;

export const GET_AGENCY_BY_UUID = gql`
  query Agency_by_uuid($uuid: UUID!) {
    agency_by_uuid(uuid: $uuid) {
      status
      status_code
      message
      data {
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
        address {
          address
          addressline
          city
          zip
        }
        employee_set {
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
          address {
            address
            addressline
            city
            zip
          }
        }
        agencysetting_dba
      }
    }
  }
`;