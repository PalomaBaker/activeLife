import React from "react";
import { useForm } from "react-hook-form";

const RecipeForm = ({ onSave, user = {}}) => {
    const { register, handleSubmit } = useForm();

    const handleForm = (formValues) => {
        onSave(formValues);
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 recipe-form" onSubmit={handleSubmit(handleForm)}>
            <div className="mb-3 xl:w-96">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                    What type of cuisine?
                </label>
                <select data-te-select-init {...register('dish_origin')}>
                    <option value="American">American</option>
                    <option value="Asian">Asian</option>
                    <option value="Central">Central</option>
                    <option value="Italian">Italian</option>
                    <option value="Carribean">Carribean</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="South American">South American</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                    <option value="World">World</option>
                </select>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
                What would you like to eat?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('dish_type')} type="text" placeholder="Enter a type of dish..." />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">
                How long do you want it to take?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" {...register('dish_time')} type="text" placeholder="Enter time in minutes..." />
            </div>
            <div className="mb-3 xl:w-96">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input4">
                    Any dietary restrictions?
                </label>
                <select data-te-select-init {...register('dish_restrict')}>
                    <option value="">None</option>
                    <option value="Crustacean-Free">Crustacean-Free</option>
                    <option value="Dairy-Free">Dairy-Free</option>
                    <option value="Egg-Free">Egg-Free</option>
                    <option value="Fish-Free">Fish-Free</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Shellfish-Free">Shellfish-Free</option>
                    <option value="Soy-Free">Soy-Free</option>
                    <option value="Pescatarian">Pescatarian</option>
                    <option value="Peanut-Free">Peanut-Free</option>
                </select>
            </div>
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input5">
                Is there a calorie max in mind?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" {...register('calorie_max')} type="text" placeholder="Min: 50 Calories" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default RecipeForm;