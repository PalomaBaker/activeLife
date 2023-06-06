import React from "react";


const ExerciseForm = () => {
  
    return (
        <div className="exerciseContainer">
        <form class="exercise-form">
      
       <br></br> <label for="input1">What part of your body would you like to workout?</label>
                     <select name="input1" id="input1" multiple>
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
            <button class="submit">Submit</button>
          
        </form>
       
        <div class="workout-container flex flex-wrap space-x-10 space-y-10 place-content-center" id="output">
        </div>
       
        <script src="exercise.js"></script>
        </div>
  
)
}

export default ExerciseForm