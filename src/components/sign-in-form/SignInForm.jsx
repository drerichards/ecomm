import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPasswordFromAuth,
  signInWithGooglePopup,
} from "utils/firebase/firebase";
import FormInput from "components/form-input/FormInput";
import Button from "components/button/Button";
import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInUserWithEmailAndPasswordFromAuth(email, password);
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
    <div className="sign-up-container">
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
