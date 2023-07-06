import React from "react";
import { useForm } from "react-hook-form";

const CalorieForm = ({ onSave, user = {}}) => {
    const { register, handleSubmit } = useForm();

    const handleForm = (formValues) => {
        onSave(formValues);
    }

    return (
        <form onSubmit={handleSubmit(handleForm)}>
            <ul className="calorie-input">
                <li>Age
                    <input id="age" {...register('age')} />
                </li>
                <li>Height
                    <input id="feet" {...register('feet')} placeholder="ft." />
                    <input id="inches" {...register('inches')} placeholder="in." />
                </li>
                <li>Weight
                    <input id="weight" {...register('weight')} placeholder="lbs." />
                </li>
            </ul>
            <button id="calculate" type="submit">Calculate</button>
        </form>
    )
}

export default CalorieForm;