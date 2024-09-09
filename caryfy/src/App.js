import React from "react";
//import { Switch, Route, Router } from "react-router-dom"; // MFA dependencies
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Pricing from "./components/Pricing";
import NewFile from "./components/NewFile.tsx";
import ApolloClientProvider from "./providers/apollo-client";
import OnBoardPayerInformation from "./pages/Management/OnBoardPayerInformation.tsx";
import Agencyinformation from "./pages/Management/AgencyInformation.tsx"
import OnBoardPlanOfCare from "./pages/Management/OnBoardplanOfcare.tsx";
import CaryfyDashBoard from "./pages/Schedular/CaryfyDashBoard.tsx";
import AskCaryPageForSchedular from "./pages/Schedular/AskCary/AskCaryPage.tsx";
import SchedularCancelShift from "./pages/Schedular/AskCary/shifts/CancelShift.tsx";
import SchedularDeleteShiftPage from "./pages/Schedular/AskCary/shifts/DeleteShiftPage.tsx";
import SchedularApproveShiftsPage from "./pages/Schedular/AskCary/shifts/ApproveShiftsPage.tsx";
import AddInteractionPage from "./pages/Schedular/AskCary/documents/AddInteractionPage.tsx";
import EDWPNotificationForm from "./pages/Schedular/AskCary/documents/EDWPNotificationForm.tsx";
import Login from "./pages/Login/Login.tsx";
import SchedularAddShiftPage from "./pages/Schedular/AskCary/shifts/AddShiftPage.tsx";
import SchedularEditShiftPage from "./pages/Schedular/AskCary/shifts/EditShiftPage.tsx";
import ReportsPage from "./pages/Reports/ReportsPage.tsx";
import ActionPage from "./pages/Action/ActionPage.tsx";
import AdminAddClientPage from "./pages/Admin/client/AdminAddClientPage.tsx";
import AdminPersonalInfPage from "./pages/Admin/client/AdminPersonalInfPage.tsx";
import AdminPaymentTermsPage from "./pages/Admin/client/AdminPaymentTermsPage.tsx";
import EmployeePayementAddTerm from './pages/Admin/employee/EmployeePayementAddTerm.tsx';
import AdminAddPaymentTermsPage from "./pages/Admin/client/AdminAddPaymentTermsPage.tsx";
import AdminImportantDatesPage from "./pages/Admin/client/AdminImportantDatesPage.tsx";
import AdminHealthInfoPage from "./pages/Admin/client/AdminHealthInfoPage.tsx";
import ClientDetailsPage from "./pages/Admin/client/ClientDetailsPage.tsx";
import ClientPlanOfCarePage from "./pages/Admin/client/PlanOfCarePage.tsx";
import EmployeePersonalInfoPage from "./pages/Admin/employee/EmployeePersonalInfoPage.tsx";
import EmployeePayementTerm from './pages/Admin/employee/EmployeePayementTerm.tsx';
import AdminDashboardPage from "./pages/Admin/AdminDashboardPage.tsx";
import ClientPayerPage from "./pages/Admin/client/Payer/ClientPayerPage.tsx"
import ClientMedicaidPayerGroupPage from "./pages/Admin/client/Payer/ClientMedicaidPayerGroupPage.tsx";
import ClientPrivatePayPage from "./pages/Admin/client/Payer/ClientPrivatePayPage.tsx";
import ClientVAPage from "./pages/Admin/client/Payer/ClientVAPage.tsx";
import ClientMedicaidDocsPage from "./pages/Admin/client/Payer/ClientMedicaidDocsPage.tsx";
import ClientLTCIClaimsPage from "./pages/Admin/client/Payer/ClientLTCIClaimsPage.tsx";
import ClientLTCIDetailsPage from "./pages/Admin/client/Payer/ClientLTCIDetailsPage.tsx";
import ClientAutoInsurancePage from "./pages/Admin/client/Payer/ClientAutoInsurancePage.tsx";
import CaregiverPersonalInfoPage from "./pages/Admin/Caregiver/CaregiverPersonalInfoPage.tsx";
import ClientWorkCompPage from "./pages/Admin/client/Payer/ClientWorkCompPage.tsx";
import AdminAskCary from "./pages/Admin/AskCaryPage.tsx";
import KPIItem from "./components/Common/KPIItem.tsx";
import AssessorDetails from './pages/Admin/employee/AssessorDetails.tsx';
import ViewAssessorDetails from './pages/Admin/employee/ViewAssessorDetails.tsx';
import SelectAgenciesPage from "./pages/SelectAgenciesPage.tsx";
import HeaderNew from "./components/Common/HeaderNew.tsx";
import MainContext from "./providers/MainContext.tsx";


const generateClassName = createGenerateClassName({
  productionPrefix: "ca",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <ApolloClientProvider>
        <MainContext>
          <Router exact history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <div className="m-0 themebg-cts-blg w-full relative bg-text-text-tertiary overflow-hidden flex flex-col items-start justify-start min-w-[360px] max-w-[1920px] leading-[normal] tracking-[normal] mq950:max-w-full mq1900:max-w-full mq450:max-w-full mq1425:max-w-full ">
                <HeaderNew />
                <Route path="/select_agency" component={SelectAgenciesPage} />
                <Route path="/caregiver_personalinfo" component={CaregiverPersonalInfoPage} />
                <Route path="/client_work_comp" component={ClientWorkCompPage} />
                <Route path="/client_auto_insurance" component={ClientAutoInsurancePage} />
                <Route path="/client_ltcidetail" component={ClientLTCIDetailsPage} />
                <Route path="/client_ltciclaims" component={ClientLTCIClaimsPage} />
                <Route path="/client_medicaiddocs" component={ClientMedicaidDocsPage} />
                <Route path="/client_va" component={ClientVAPage} />
                <Route path="/client_privatepay" component={ClientPrivatePayPage} />
                <Route path="/client_medicaidpayer" component={ClientMedicaidPayerGroupPage} />
                <Route path="/client_payer" component={ClientPayerPage} />
                <Route path="/view_assesor_details" component={ViewAssessorDetails} />
                <Route path="/assesor_details" component={AssessorDetails} />
                <Route path="/admin_employee_personal_add_payment" component={EmployeePayementAddTerm} />
                <Route path="/admin_employee_personal_payment" component={EmployeePayementTerm} />
                <Route path="/admin_employee_personal_info" component={EmployeePersonalInfoPage} />
                <Route path="/admin_dashboard" component={AdminDashboardPage} />
                <Route path="/admin_ask_cary" component={AdminAskCary} />
                <Route path="/admin_client_poc" component={ClientPlanOfCarePage} />
                <Route path="/admin_view_client_details" component={ClientDetailsPage} />
                <Route path="/admin_client_healthinfo" component={AdminHealthInfoPage} />
                <Route path="/admin_client_important_dates" component={AdminImportantDatesPage} />
                <Route path="/admin_client_add_payment_terms" component={AdminAddPaymentTermsPage} />
                <Route path="/admin_client_payment_term" component={AdminPaymentTermsPage} />
                <Route path="/admin_client_personalinfo" component={AdminPersonalInfPage} />
                <Route path="/admin_add_client" component={AdminAddClientPage} />
                <Route path="/action" component={ActionPage} />
                <Route path="/reports" component={ReportsPage} />
                <Route path="/edit_shift" component={SchedularEditShiftPage} />
                <Route path="/add_shift" component={SchedularAddShiftPage} />
                <Route
                  path="/edwp_notification_form"
                  component={EDWPNotificationForm}
                />
                <Route path="/add_interaction" component={AddInteractionPage} />
                <Route
                  path="/approve_shifts"
                  component={SchedularApproveShiftsPage}
                />
                <Route
                  path="/delete_shift"
                  component={SchedularDeleteShiftPage}
                />
                <Route path="/askcary" component={AskCaryPageForSchedular} />
                <Route path="/cancelshift" component={SchedularCancelShift} />
                <Route path="/dash" component={CaryfyDashBoard} />
                <Route path="/planofcare" component={OnBoardPlanOfCare} />
                <Route path="/agency" component={Agencyinformation} />
                <Route path="/onboard" component={OnBoardPayerInformation} />
                <Route exact path="/pricing" component={Pricing} />
                <Route exact path="/newfile" component={NewFile} />
                {/* <Route path="/" component={Landing} /> */}
                <KPIItem />
            </div>
          </Switch>
        </Router>
        </MainContext>
      </ApolloClientProvider>
    </StylesProvider>
    </div >
  );
};
