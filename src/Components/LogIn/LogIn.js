import React, { Component, useState } from 'react';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './LogIn.css';

export const LogIn = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
    ];

    const checkUser = (e) => {
        e.preventDefault();
        const user = { userName, password }
        localStorage.setItem("oldUser", JSON.stringify(user))
        console.log(user);
    }

    return (
        <div className='logInContainer'>
            <form>
                <div >
                    <h1> Log in to use photo album </h1>
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add User name" value={userName}
                        variant="outlined"
                        onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="textInput">
                    <TextField id="outlined-basic" label="Add password" variant="outlined"value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button type='submit' variant="contained" color="success"onClick={(e) => {
                    checkUser(e);
                    navigate("/picture-adder")
                }}> Log In </Button>
            </form>
            <ImageList
            sx={{ width: 550, height: 550 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </div>
    )
}
export default LogIn;