import React, { useState } from 'react';
import './CalorieCalculator.css';

function CalorieCalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState(1.2);
  const [calories, setCalories] = useState(0);

  const calculateCalories = () => {
    let BMR;
    if (gender === 'male') {
      BMR = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else {
      BMR = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    const totalCalories = BMR * activityLevel;
    setCalories(totalCalories.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  return (
    <div className="calorie-calculator">
      <h2>Calorie Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <label>
          Age (years):
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <div className="radio-buttons">
          <label>
            <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
            Male
          </label>
          <label>
            <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
            Female
          </label>
        </div>
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(parseFloat(e.target.value))}>
            <option value={1.2}>Sedentary (little to no exercise)</option>
            <option value={1.375}>Lightly active (light exercise/sports 1-3 days/week)</option>
            <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days/week)</option>
            <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
            <option value={1.9}>Extra active (very hard exercise/sports & physical job)</option>
          </select>
        </label>
        <button type="submit">Calculate</button>
      </form>
      {calories > 0 && (
        <div className="result">
          <h3>Estimated Daily Calories: {calories}</h3>
        </div>
      )}
    </div>
  );
}

export default CalorieCalculator;
