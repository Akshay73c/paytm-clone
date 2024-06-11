import { useState } from "react";
import axios from 'axios'

import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const navigate = useNavigate()

    return <div className="bg-slate-300 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="border rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Signup"} />
                <SubHeading label={"Enter Your Information to create an account"} />

                <InputBox onChange={e => {
                    setFirstName(e.target.value)
                }} label={"First Name"} placeholder={"John"} />

                <InputBox onChange={e => {
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Doe"} />

                <InputBox onChange={e => {
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"akshay@gmail.com"} />

                <InputBox onChange={e => {
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"12345"} />

                <Button
                    onClick={async () => {
                        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                            username,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate('/dashboard')
                    }}
                    label={"Signup"} />

                <BottomWarning label={"Already have an account? "} buttonText={"Sign in"} to={"/signin"} />
            </div>
        </div>
    </div>

}