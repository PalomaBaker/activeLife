import React from "react";
import { useForm } from "react-hook-form";

const ExerciseForm = ({ onSave, user = {}}) => {
    const { register, handleSubmit } = useForm();

    const handleForm = (formValues) => {
        onSave(formValues);
    }

    return (
        <div id="exerciseContainer">
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
     
     </div>
     
  
)
}

export default ExerciseForm