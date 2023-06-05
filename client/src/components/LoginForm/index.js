import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const LoginForm = ({ onSave, user = {}}) => {
    const { register, handleSubmit } = useForm();

    const handleForm = (formValues) => {
        onSave(formValues);
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 signup-form" onSubmit={handleSubmit(handleForm)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="email-signup">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email-signup" {...register('email')} type="text" placeholder="Email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="password-signup">
                    Password
                </label>
                <input className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password-signup" {...register('password')} type="password" placeholder="Password" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                </button>
                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/signup">
                    Not a member?
                </Link>
            </div>
        </form>
    )
}

export default LoginForm;