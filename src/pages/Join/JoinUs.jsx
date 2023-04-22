import React from "react";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleNavigate = () => {
  navigate("/register");
};

export default function JoinUs() {
  return (
    <>
      <Button onClick={handleNavigate} buttonName="jionUs" />
    </>
  );
}
