import { FunctionComponent, useContext } from "react";
import { useHistory } from "react-router-dom";
import InputsNew from "../../components/Common/InputsNew";
import caryfyTagline from "../../assets/caryfy-tagline1.svg";
import postIcon from "../../assets/dashboard/posticon.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, ApolloError } from "@apollo/client";
import { LOGIN_API_WITH_EMAIL } from "../../api/mutation";
import * as yup from "yup";
import {
  showSuccess,
  showError,
} from "../../components/Common/ToastNotification";
import { UserContext } from "../../providers/MainContext";
import Loader from "../../components/Common/Loader";

interface LoginFormInterface {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Login: FunctionComponent = () => {
  const [loginApi, { loading }] = useMutation(LOGIN_API_WITH_EMAIL);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInterface>({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const { setUserInfo } = useContext<any>(UserContext);

  const onSubmit: SubmitHandler<LoginFormInterface> = async (data) => {
    const { email } = data;
    loginApi({
      variables: {
        email,
      },
    })
      .then((response) => {
        const { employees, message } = response.data.login_by_email;
        if (employees.length === 1) {
          const onboardCompleted = employees[0].agency.onboarding_completed;
          // Here set the global state
          setUserInfo(employees[0]);
          // Convert the data object to a JSON string
          const jsonData = JSON.stringify(employees[0]);
          // Store the JSON string in localStorage
          localStorage.setItem("employeeInfo", jsonData);
          showSuccess(message);
          if (onboardCompleted) {
            history.push("/dashboard");
          } else {
            history.push("/onboard");
          }
        } else {
          setUserInfo(employees);
          const jsonData = JSON.stringify(employees);
          // Store the JSON string in localStorage
          localStorage.setItem("employeeInfo", jsonData);
          showSuccess(message);
          history.push("/select_agency");
        }
      })
      .catch((error) => {
        if (error instanceof ApolloError) {
          console.log("error message", error.message);
          showError(error.message);
        } else {
          console.error(`error message: ${error}`);
          showError(error);
        }
      });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-text-text-tertiary max-w-[1920px] overflow-hidden flex flex-col items-start justify-start min-w-[360px] leading-[normal] tracking-[normal] text-left text-sm text-headings font-base-md-regular">
      <section className="self-stretch  overflow-hidden flex flex-row flex-wrap items-center justify-center relative gap-[24px_22px] h-screen max-w-full themebg-cts-blg">
        <div className="w-[622px] flex flex-row items-start justify-start max-w-[622px] z-[1] mq825:max-w-full">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-0 flex-1 rounded-radius-radius-lg bg-surface-bg-blue flex flex-col items-center justify-start p-8 box-border gap-[23.8px] max-w-full mq825:pt-[21px] mq825:pb-[21px] mq825:box-border"
          >
            <div className="self-stretch flex flex-row items-start justify-center">
              <img
                className="h-14 w-48 relative"
                loading="lazy"
                alt=""
                src={caryfyTagline}
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <b className="flex-1 relative text-base inline-block font-body-reg text-text-text-primary text-left max-w-full">
                  Sign In With Your Existing Account
                </b>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full">
                <InputsNew
                  label="Email Address"
                  type="email"
                  contentPlaceholder="Email Address"
                  register={{ ...register("email") }}
                  errorMessage={errors.email}
                />
              </div>
              {/* <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                                <InputsNew label="Password" type="password" contentPlaceholder="Password" />
                                <div className="cursor-pointer self-stretch relative text-sm font-semibold font-body-reg text-surface-error text-right">
                                    Forgot Your Password?
                                </div>
                            </div> */}
            </div>
            <div className="self-stretch flex flex-row items-start justify-center">
              <button className="cursor-pointer [border:none] py-[12.5px] px-5 bg-dodgerblue w-[258px] rounded-radiuscomponent-button flex flex-row items-start justify-center box-border gap-[12px]">
                <div className="relative text-sm font-body-reg text-text-text-tertiary text-center inline-block min-w-[36px]">
                  Login
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src={postIcon}
                />
              </button>
            </div>
            {/* <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-surface-border" /> */}
            {/* <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                                <b className="flex-1 relative text-base inline-block font-body-reg text-text-text-primary text-center max-w-full">
                                    OR
                                </b>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-center py-0 px-5 gap-[8px] mq450:flex-wrap">
                                <div className="relative text-sm font-body-reg text-text-text-primary text-left">
                                    Don’t Have Account?
                                </div>
                                <div className="rounded-radius-radius-sm flex flex-row items-center justify-center py-spacing-spacing-xs px-spacing-spacing-sm gap-[4px]">
                                    <div className="cursor-pointer relative text-sm font-body-reg text-surface-primary-surface text-center inline-block min-w-[81px]">
                                        Sign Up Now
                                    </div>
                                </div>
                            </div>
                        </div> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
