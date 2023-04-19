import React, { useState } from 'react'
import Button from '../../../components/Buttons/Button'
import Input from '../../../components/Inputs/Input'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';


const handleClickLogin = () => {
    alert("login page")
};


export default function LoginPage() {
    const navigate = useNavigate()
    const handleClickRegister = () =>{
        navigate("/register")
    }
    

    const [data, setData] = useState("");
    return (
        <>
        <Navbar/>
         <h1>this is login page</h1>
            <Input type="email" onChange={(e) => setData(e.target.value)} placeholder="vijay" />
            <Input type="password" onChange={(e) => setData(e.target.value)} placeholder="vijay" />
            <Button onClick={handleClickLogin} buttonName="login" />
            <Button onClick={handleClickRegister} buttonName="Register for Gym" />
            <h1>{data}</h1>
        </>
    )
}
