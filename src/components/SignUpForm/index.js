import React, { Component } from "react";
import styles from "./SignUpForm.module.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  render() {
    const { name, email, password, passwordConfirmation } = this.state;

    return (
      <form className={styles.formContainer}>
        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Name</span>
          <input
            className={styles.inputFormSign}
            value={name}
            type="text"
            name="name"
            placeholder="name"
            autoFocus
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Email</span>
          <input
            className={styles.inputFormSign}
            value={email}
            type="email"
            name="email"
            placeholder="email"
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Password</span>
          <input
            className={styles.inputFormSign}
            value={password}
            type="password"
            name="password"
            placeholder="password"
          />
        </lable>

        <lable className={styles.lableFormSign}>
          <span className={styles.spanFormSign}>Password confirmation</span>
          <input
            className={styles.inputFormSign}
            value={passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            placeholder="password confirmation"
          />
        </lable>
        <button className={styles.btnFormSign}> Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;
