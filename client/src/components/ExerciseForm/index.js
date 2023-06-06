import React from "react";
import { useForm } from "react-hook-form";

const ExerciseForm = ({ onSave, user = {}}) => {
    const { register, handleSubmit } = useForm();

    const handleForm = (formValues) => {
        onSave(formValues);
    }

    return (
        <div class="w-full max-w-xs m-auto mt-8">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(handleForm)}>
            <div class="inline-block relative w-64">
                <label>What part of your body would you like to workout?</label>
                <select {...register('body_restrict')} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option value="neck">Neck</option>
                    <option value="back">Back</option>
                    <option value="cardio">Cardio</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
                <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" type="submit">
                    Submit
                </button>
                </div>
            </form>
        </div>
        )

        {/* <div id="exerciseContainer">
    <form className="exercise-form" onSubmit={handleSubmit(handleForm)}>
      
    <br></br><label htmlFor="input1">What part of your body would you like to workout?</label>

    <select data-te-select-init {...register('body_restrict')}>
                    <option value="">None</option>
         <option  id="input1" name="input1" value="neck">neck</option>
         <option  id="input1" name="input1" value="back">back</option>
         <option  id="input1" name="input1" value="cardio">cardio</option>
         <option  id="input1" name="input1" value="chest">chest</option>
         <option  id="input1" name="input1" value="lower arms">lower arms</option>
         <option  id="input1" name="input1" value="lower legs">lower legs</option>
         <option  id="input1" name="input1" value="shoulders">shoulders</option>
         <option  id="input1" name="input1" value="upper arms">upper arms</option>
         <option  id="input1" name="input1" value="upper legs">upper legs</option>
         <option  id="input1" name="input1" value="waist">waist</option>
                  </select>
         <br></br>
         <button className="submit">Submit</button>
        
     </form>
     <div className="workout-container flex flex-wrap space-x-10 space-y-10 place-content-center" id="output">
        </div>
     </div> */}
     

}

export default ExerciseForm