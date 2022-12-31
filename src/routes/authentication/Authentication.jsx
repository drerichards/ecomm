import SignUpForm from "components/auth/sign-up-form/SignUpForm";
import SignInForm from "components/auth/sign-in-form/SignInForm";
import {AuthenticationContainer} from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
