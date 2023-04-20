import React from "react";
import Input from "../../../components/Inputs/Input";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

export default function RegistrationPage() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    alert("register");
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <h1>this is RegistrationPage page</h1>
      <Input type="text" placeholder="first name" />
      <Input type="text" placeholder="last name" />
      <Input type="email" placeholder="email" />
      <Input type="dob" placeholder="date of birth" />
      <Input type="select" placeholder="enter gender" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password" />
      <Button buttonName="Register" onClick={handleClickRegister} />
      <Button
        onClick={handleClickLogin}
        buttonName="Already Have an account ?"
      />
    </>
  );
}
