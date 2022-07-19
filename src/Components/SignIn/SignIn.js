import React, { Component, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignIn.css';
import UserService from '../../Services/UserService';
import { MultipleCards } from '../PictureCard/MultipleCards';

export const SignIn = (props) => {
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const addUser = (e) => {
        e.preventDefault();
        const user = { userName, firstName, lastName, password, email, photoList: [] }
        localStorage.setItem("userToUse", JSON.stringify(user))
        console.log(user);
        UserService.createUser(user).then((res) => {
            console.log(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <div className='signInContainer'>
            <form>
                <div >
                    <h1> Sign in to create a photo album </h1>
                </div>
                <div className="textInput">
                    <TextField id="userName" label="Add User name" value={userName}
                        variant="outlined"
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add password" variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add first name" variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add last name" variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add email" variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='log-in-sign-up-btns'> 
                <Button type='submit' variant="contained" color="secondary" onClick={(e) => {
                    addUser(e);
                    navigate("/picture-adder")
                }} > Sign In </Button>
                <div> Already have an account ? </div>

                <Button type='submit' variant="contained" color="secondary" onClick={(e) => {
                    addUser(e);
                    navigate("/login")
                }} > Log In </Button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;