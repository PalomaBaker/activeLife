import React, { useState } from "react";
import './signup.css';
import SignupForm from "../../components/SignupForm";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from '../../utils/auth';

const Signup = () => {
    const [createUser, { error }] = useMutation(ADD_USER);

    const handleForm = async (values) => {
        console.log(values);
        const { username, email, password, confirm_password } = values;

        if (confirm_password === password) {
            try {
                const { data } = await createUser({
                    variables: { username, email, password },
                });
    
                Auth.login(data.createUser.token);
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div className="w-full max-w-xs signup-win">
            <SignupForm onSave={handleForm} />
        </div>
    )
}

export default Signup;