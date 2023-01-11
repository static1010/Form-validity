import { useEffect, useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  //
  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //

  const enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");

  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
  //

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChnageHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  //
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  //

  // const nameInputBlurHandler = () => {
  //   setEnteredNameTouched(true);
  // };

  //

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };
  //

  const formSumbissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredName) {
      return;
    }
    console.log(enteredName);

    // nameInputRef.current.value = "";
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      {/*  */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please entered a valid email</p>
        )}
      </div>
      {/*  */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
