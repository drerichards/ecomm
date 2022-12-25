import { useState } from "react";
import {
  createUserWithEmailAndPasswordFromAuth,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase";
import FormInput from "components/form-input/FormInput";
import Button from "components/button/Button";
import './sign-up-form.scss'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("no match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPasswordFromAuth(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("User creation error: Email already in use");
      } else console.log("User creation error: ", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleFieldChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label={"Confirm password"}
          type="password"
          required
          onChange={handleFieldChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
