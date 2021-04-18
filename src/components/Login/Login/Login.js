import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../config/firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import Button from 'react-bootstrap/Button';
import google from '../../../images/google.png';
import NavBar from '../../Shared/NavBar/NavBar';

const Login = () => {
    const { loggedUser, selectedService } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = loggedUser;
    const [selectService, setSelectService] = selectedService;
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex align-items-center justify-content-center">
                <div className="mt-5">
                    <Button variant="light" className="btn-style" onClick={handleGoogleSignIn}>
                        <img className="w-25" src={google} alt="" /> Continue With Google</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;