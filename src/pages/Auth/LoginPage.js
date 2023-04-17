import React, { useState } from 'react'
import Button from '../../components/Buttons/Button'
import Input from '../../components/Inputs/Input'

const handleClick = () => {
    alert("vijay")
}
export default function LoginPage() {
    const [data, setData] = useState("");
    return (
        <>
         <h1>this is login page</h1>
            <Input type="email" onChange={(e) => setData(e.target.value)} placeholder="vijay" />
            <Input type="password" onChange={(e) => setData(e.target.value)} placeholder="vijay" />
            <Button onClick={handleClick} buttonName="login" />
            <h1>{data}</h1>
        </>
    )
}
