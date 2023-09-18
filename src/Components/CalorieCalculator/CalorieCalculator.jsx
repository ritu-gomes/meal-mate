import React, { useState } from "react";
import './calculator.css';

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [gender, setGender] = useState("male");
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);

  const calculateCalories = () => {
    if (age && height && weight && activityLevel && gender) {
      let bmr;
      if (gender === "male") {
        bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
      }

      let calories;
      switch (activityLevel) {
        case "sedentary":
          calories = bmr * 1.2;
          break;
        case "lightly_active":
          calories = bmr * 1.375;
          break;
        case "moderately_active":
          calories = bmr * 1.55;
          break;
        case "very_active":
          calories = bmr * 1.725;
          break;
        case "extra_active":
          calories = bmr * 1.9;
          break;
        default:
          calories = bmr * 1.2;
      }

      setCaloriesNeeded(calories.toFixed(2));
    }
  };

  return (
    <section className="calculator bg-gradient-to-t from-fuchsia-100 to-white p-20">
      <h1 className="text-3xl font-semibold text-fuchsia-950 mb-20 text-center">Discover Your Ideal Caloric Intake: Calorie Calculator</h1>
      <div className=" flex flex-row justify-center">
        <div className="cal bg-gradient-to-tr from-green-400 to-green-200 p-10 rounded-md shadow-2xl">
            {caloriesNeeded !== null && <h2 className="m-0 py-5 font-bold animate-fadeIn text-center">Calories Needed:  <span className="bg-white p-2 rounded-md">{caloriesNeeded}</span> kcal/day</h2>}
            <div className="mb-5">
                <label>Your Age:</label> <br />
                <input className="rounded-md" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="mb-5">
                <label>Height (cm):</label> <br />
                <input className="rounded-md" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="mb-5">
                <label>Weight (kg):</label> <br />
                <input className="rounded-md" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="mb-5">
                <label>Activity Level:</label> <br />
                <select className="rounded-md" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                <option value="sedentary">Sedentary (little to no exercise)</option>
                <option value="lightly_active">Lightly Active (light exercise/sports 1-3 days/week)</option>
                <option value="moderately_active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
                <option value="very_active">Very Active (hard exercise/sports 6-7 days/week)</option>
                <option value="extra_active">Extra Active (very hard exercise/sports & physical job)</option>
                </select>
            </div>
            <div className="mb-5">
                <label>Gender:</label> <br />
                <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={() => setGender("male")} /> Male <br/>
                <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={() => setGender("female")} /> Female
            </div>
          
          <button className="rounded-md btn bg-fuchsia-950 text-white hover:text-fuchsia-950 px-8 font-bold" onClick={calculateCalories}>Calculate Calories</button>
        </div>
      </div>
    </section>
  );
};

export default CalorieCalculator;
