import React, { useState } from "react";

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
  },
  title: {
    fontSize: "2em",
    color: "#333",
  },
  form: {
    margin: 20,
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f8f8f8",
    borderRadius: "5px",
  },
  forminput: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    boxSizing: "border-box",
  },
  formmessage: {
    display: "block",
    margin: "10px 0",
    padding: "10px",
    width: "100%",
    height: "20%",
    boxSizing: "border-box",
  },
  errorText: {
    color: "red",
    marginTop: "10px",
  },
};

export default function ContactMe() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the Name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name || !message) {
      setErrorMessage("Email, name, or messgae is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    alert(`Thank you for your submittion`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Me:</h1>
      <form className="form" style={styles.form}>
        <h4>Name:</h4>
        <input
          style={styles.forminput}
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
        <h4>Email address:</h4>
        <input
          style={styles.forminput}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email Address"
        />
        <h4>Message:</h4>
        <textarea
          style={styles.formmessage}
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Message"
          rows="5"
        />
        <br></br>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div style={styles.errorText}>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
