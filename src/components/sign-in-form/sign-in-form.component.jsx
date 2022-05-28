import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useNavigate } from "react-router-dom";

const formFieldInitialState = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(formFieldInitialState);
  const navigate = useNavigate();
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(formFieldInitialState);
  };

  const signInwithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // setCurrentUser(user);
      resetFormFields();
      navigate("/");
    } catch (error) {
      console.log(error);

      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          minLength={6}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInwithGoogle}
          >
            Google - Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
