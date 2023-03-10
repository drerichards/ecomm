import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "utils/firebase/firebase";
import FormInput from "components/auth/form-input/FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "components/button/Button";
import { SignInContainer, ButtonsContainer } from "./SignInForm.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => await signInWithGooglePopup();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          console.log("User sign in error: User account not found");
          break;
        case "auth/wrong-password":
          console.log("User sign in error: Password is incorrect");
          break;
        default:
          console.log("User sign in error: ", error.message);
          break;
      }
    }
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleFieldChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleFieldChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
