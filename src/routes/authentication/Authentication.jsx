import SignUpForm from "components/auth/sign-up-form/SignUpForm";
import SignInForm from "components/auth/sign-in-form/SignInForm";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
