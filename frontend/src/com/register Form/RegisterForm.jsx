import { useState } from "react";
import { Button } from "../../com/comIndex";
import { userIcon } from "../../assets/imgIndex";
import InputFeild from "../inputFeild/InputFeild";
import "./registerForm.css";
const RegisterForm = ({ type, handleSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  console.log(formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, formData)}
      className="register-form flex-center"
    >
      <h1>{type !== "login" ? "join us today" : "welcome back"}</h1>
      <InputFeild
        type="text"
        name="username"
        value={formData.username}
        handleChange={handleChange}
        placeholder="Enter Your Username"
        img={userIcon}
        label="user name"
      />
      <InputFeild
        type="password"
        name="password"
        value={formData.password}
        handleChange={handleChange}
        placeholder="Enter Your Password"
        img={userIcon}
        label="passowrd"
      />
      <InputFeild
        handleChange={handleChange}
        name="email"
        placeholder="Enter Your email"
        type="email"
        value={formData.email}
        img={userIcon}
        label="email"
      />
      <Button text={type !== "login" ? "sing up" : "log in"} />
    </form>
  );
};

export default RegisterForm;
