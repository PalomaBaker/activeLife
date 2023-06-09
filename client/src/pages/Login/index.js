import React, { useState } from "react";
import './login.css';
import LoginForm from "../../components/LoginForm";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from '../../utils/auth';

const Login = () => {
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleForm = async (values) => {
        const { email, password } = values;

        try {
            const { data } = await login({
                variables: { email, password },
            });

            console.log(data);

            Auth.login(data.login.token);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="w-full max-w-xs login-win">
            <LoginForm onSave={handleForm} />
        </div>
    )
}

export default Login;