import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { PictureCards } from "./PictureCards"
import './MultipleCards.css';
import { useState, useEffect } from 'react';
import PicturesService from '../../Services/PicturesService';
import UserService from '../../Services/UserService';

export const MultipleCards = (props) => {
    const user = JSON.parse(localStorage.getItem("userToUse")) || JSON.parse(localStorage.getItem("oldUser"));
    console.log(user);
    const [currentUser, setCuttentUser] = useState();
    const [allPhotos, setAllPhotos] = useState([]);

    const [photos, setPhotos] = useState([]);
    const [photoName, setPhotoName] = useState();
    const [photoDescription, setPhotoDescription] = useState();
    const [photoURl, setPhotoURl] = useState();

    const [editedPhotoName, setEditedPhotoName] = useState();
    const [editedPhotoDescription, setEditedPhotoDescription] = useState();
    const [editedPhotoURl, setEditedPhotoURl] = useState();

    const [editedPhotoObj, setEditedPhotoObj] = useState();

    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        UserService.getAllUsers().then((res) => {
            console.log(res.data);
            setCuttentUser(res.data.filter((resUser) => resUser.userName === user.userName && resUser.password === user.password ))
        })
        PicturesService.geAllPictures().then((res) => {
            setAllPhotos(res.data);
            console.log(res.data);
        }).catch(e => {
            console.log(e);
        })
    }, []);

    const showPhotos = () => {
        console.log(currentUser);
        console.log(allPhotos);
        setPhotos(allPhotos.filter(photo => photo.user?.userName === currentUser[0].userName))
        console.log(photos);
    }

    const deletePhoto = (photoId) => {
        PicturesService.deletePhoto(photoId).then((res) => {
        }).catch(e => console.log(e))
    }
    const editPhoto = (e) => {
        const newPhoto = { photoName: editedPhotoName, photoDescription: editedPhotoDescription, photoURl: editedPhotoURl }
        console.log(newPhoto);
        PicturesService.editPhotoInfo(editedPhotoObj, newPhoto).then((res) => {
            console.log(newPhoto);
        }).catch(e => console.log(e))
    }
    const getPhotoId = (photoId) => {
        PicturesService.getPhotoById(photoId).then((res) => {
            setEditedPhotoObj(res.data.photoId)
            console.log(res)
        })
    }
    const addPhoto = (e) => {
        e.preventDefault();
        const currentUserToCreatePhoto = { userId: currentUser[0].userId, 
            userName: currentUser[0].userName, 
            firstName: currentUser[0].firstName, 
            lastName: currentUser[0].lastName,
            password: currentUser[0].password,
            email: currentUser[0].email
        }
        const photo = { photoName, photoDescription, photoURl, user:currentUserToCreatePhoto }
        PicturesService.createPhoto(photo).then((res) => {
            console.log(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }
    const editUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, password, email}
        UserService.editUser(currentUser[0].userId, newUser).then((res) => {
            console.log(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }
    return (
        <>
        <div className='header'>
            <Button color="primary" variant="contained" onClick={() => setIsHidden(false)}>Edit my information </Button>
        </div>
            <div className="addEditCardContainer">
                <div className="addCardContainer">
                    <form>
                        <div className="addCardProperty">
                            <TextField id="photoName"
                                label="Add photo name"
                                value={photoName}
                                variant="standard"
                                onChange={(e) => setPhotoName(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoDescription"
                                label="Add photo description"
                                value={photoDescription}
                                variant="standard"
                                onChange={(e) => setPhotoDescription(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoURl"
                                label="Add photo url"
                                value={photoURl}
                                variant="standard"
                                onChange={(e) => setPhotoURl(e.target.value)} />
                        </div>
                        <div className="cardsContainer">
                            <Button variant="contained" color="success" type="submit" onClick={(e) => addPhoto(e)}>
                                Add photo
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="addCardContainer">
                    <form>
                        <div className="addCardProperty">
                            <TextField id="photoName"
                                label="Add photo name"
                                value={editedPhotoName}
                                variant="standard"
                                onChange={(e) => setEditedPhotoName(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoDescription"
                                label="Add photo description"
                                value={editedPhotoDescription}
                                variant="standard"
                                onChange={(e) => setEditedPhotoDescription(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoURl"
                                label="Add photo url"
                                value={editedPhotoURl}
                                variant="standard"
                                onChange={(e) => setEditedPhotoURl(e.target.value)} />
                        </div>
                        <div className="cardsContainer">
                            <Button variant="contained" color="success" type="submit" onClick={(e) => editPhoto(e)}>
                                Edit photo
                            </Button>
                        </div>
                    </form>
                </div>
                <div className={isHidden ? "hidden" : "editUserContainer"}>
                    <form>
                        <div className="addCardProperty">
                            <TextField id="firstName"
                                label="Change first name"
                                value={firstName}
                                variant="standard"
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="lastName"
                                label="Change last name"
                                value={lastName}
                                variant="standard"
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoURl"
                                label="Change password"
                                value={password}
                                variant="standard"
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="addCardProperty">
                            <TextField id="photoURl"
                                label="Change Email"
                                value={email}
                                variant="standard"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="cardsContainer">
                            <Button variant="contained" color="success" type="submit" onClick={(e) => editUser(e)}>
                                Edit USER
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="addEditCardContainer">
                <Button variant="contained" color="success" onClick={() => showPhotos()}>
                    Show photos
                </Button>
            </div>
            <div className="cardsContainer">
                <PictureCards cards={photos} getPhotoId={getPhotoId} deletePhoto={deletePhoto} />
            </div>
        </>

    )
}