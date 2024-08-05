import { useState } from "react";
import "./App.css";

const SelectClothingSize = () => {
  const [selectSize, setSize] = useState("");

  const sizeHandler = (event) => {
    setSize(event.target.value);
  };
  return (
    <div>
      <label htmlFor="sizeSelect">Select a clothing size: </label>
      <select id="sizeSelect" onChange={sizeHandler}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <p>
        Description:{" "}
        {selectSize &&
          (selectSize === "Small"
            ? `${selectSize} - Fits chest size 35-37 inches`
            : selectSize === "Medium"
              ? `${selectSize} - Fits chest size 38-40 inches`
              : `${selectSize} - Fits chest size 42-44`)}
      </p>
    </div>
  );
};

const SelectJobType = () => {
  const [selectJob, setJob] = useState("");

  const jobHandler = (event) => {
    setJob(event.target.value);
  };
  return (
    <div>
      <label htmlFor="jobSelect">Select a job type: </label>
      <select id="jobSelect" onChange={jobHandler}>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
      </select>
      <p>
        Description:{" "}
        {selectJob &&
          (selectJob === "Full-time"
            ? `${selectJob} - Employement for a strandard 40-hour workweek`
            : selectJob === "Part-time"
              ? `${selectJob} - Employment for less than a standard workweek`
              : `${selectJob} - Temporary employment for a specific project or period`)}
      </p>
    </div>
  );
};

const SelectMeal = () => {
  const [selectMeal, setMeal] = useState("");

  const mealHandler = (event) => {
    setMeal(event.target.value);
  };
  return (
    <div>
      <label htmlFor="mealSelect">Select a job type: </label>
      <select id="mealSelect" onChange={mealHandler}>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <p>
        Description:{" "}
        {selectMeal &&
          (selectMeal === "Breakfast"
            ? `${selectMeal} - Morning meal typically eaten before starting the day`
            : selectMeal === "Lunch"
              ? `${selectMeal} - Midday meal typically eaten around noon`
              : `${selectMeal} - Evening meal typically eaten at the end of the day`)}
      </p>
    </div>
  );
};

const SkillLevel = () => {
  const [selectLevel, setLevel] = useState("");

  const levelHandler = (event) => {
    setLevel(event.target.value);
  };
  return (
    <div>
      <label htmlFor="levelSelect">Select a job type: </label>
      <select id="levelSelect" onChange={levelHandler}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <p>
        Description:{" "}
        {selectLevel &&
          (selectLevel === "Beginner"
            ? `${selectLevel} - Just starting out, limited experience or knowledge`
            : selectLevel === "Intermediate"
              ? `${selectLevel} - Some experience or knowledge, moderate skill level`
              : `${selectLevel} - Extensive experience or knowledge, high skill level`)}
      </p>
    </div>
  );
};

const TemperatureUnit = () => {
  const [selectTemperature, setTemperature] = useState("");

  const temperatureHandler = (event) => {
    setTemperature(event.target.value);
  };
  return (
    <div>
      <label htmlFor="temperatureSelect">Select a job type: </label>
      <select id="temperatureSelect" onChange={temperatureHandler}>
        <option value="Celsius">Celsius</option>
        <option value="Fahreheit">Fahreheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      <p>
        Description:{" "}
        {selectTemperature &&
          (selectTemperature === "Celsius"
            ? `${selectTemperature} - Temperature scale in which water freezes at 0 degrees and boils at 100 degrees`
            : selectTemperature === "Fahreheit"
              ? `${selectTemperature} - Temperature scale widely used in the United States`
              : `${selectTemperature} - Absolute temperature scale with 0 representing absolute zero`)}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <SelectClothingSize />
      <SelectJobType />
      <SelectMeal />
      <SkillLevel />
      <TemperatureUnit />
    </main>
  );
}
