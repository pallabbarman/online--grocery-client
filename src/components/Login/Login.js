import React, { useContext, useState } from "react";
import {
    handleGoogleSignIn,
    handleSignOut,
    initializeLoginFramework,
} from "./LoginManager";
import { UserContext } from "../../App";
import { Button, Container } from "react-bootstrap";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    const [user, setUser] = useState({
        isSignIn: false,
        name: "",
    });

    initializeLoginFramework();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const signOut = () => {
        handleSignOut().then((res) => {
            handleResponse(res, false);
        });
    };

    return (
        <Container className="login">
            {user.isSignIn ? (
                <Button
                    onClick={signOut}
                    type="button"
                    variant="outline-primary"
                >
                    Sign Out
                </Button>
            ) : (
                <Button
                    onClick={googleSignIn}
                    type="button"
                    variant="outline-primary"
                >
                    <FontAwesomeIcon icon={faGoogle} /> Sign In with Google
                </Button>
            )}
        </Container>
    );
};

export default Login;
