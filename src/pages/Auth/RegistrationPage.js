import React from 'react'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'

function handleClick(){

}

export default function RegistrationPage() {
    return (
        <>
            <h1>this is RegistrationPage page</h1>
            <Input type="text" placeholder="first name" />
            <Input type="text" placeholder="last name" />
            <Input type="email" placeholder="email" />
            <Input type="dob" placeholder="date of birth" />
            <Input type="select" placeholder="enter gender" />
            <Input type="password" placeholder="password" />
            <Input type="password" placeholder="confirm password" />
            <Button onClick={handleClick} buttonName="register" />
        </>
    )
}
