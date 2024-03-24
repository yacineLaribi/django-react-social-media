import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { arrowRight } from "../../assets/imgIndex";
import RegisterForm from "../../com/register Form/RegisterForm";
import "./authform.css";
const AuthForm = () => {
  // !check submit function
  // ? sing up submit function
  const handleSubmitSingup = async (e, formData) => {
    e.preventDefault();
    try {
      //todo : set the correct path
      const response = await axios.post("/signup/", formData);
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        icon: "question",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  // ? login submit function
  const handleSubmitLogin = async (e, formData) => {
    e.preventDefault();
    try {
      //todo : set the correct path
      const response = await axios.post("/login/", formData);
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        icon: "question",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  const [isLogin, setLogginValue] = useState(true);
  return (
    <div className="auth-form flex-center">
      <div className="toggle-button flex-center">
        <p onClick={() => setLogginValue(true)}>log in</p>
        <img
          src={arrowRight}
          alt="arrow img"
          className={`${isLogin || "singup"}`}
          onClick={() => setLogginValue((curr) => !curr)}
        />
        <p onClick={() => setLogginValue(false)}>sign up</p>
      </div>
      <div className="card">
        <div className="front">
          {isLogin ? (
            <RegisterForm type={"login"} handleSubmit={handleSubmitLogin} />
          ) : (
            <RegisterForm type={"singup"} handleSubmit={handleSubmitSingup} />
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
