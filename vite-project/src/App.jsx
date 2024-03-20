import React, { useState } from "react";
import "./main.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    gender: "",
    browser: "chrome"
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const _submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1>SAMPLE FORM</h1>
      <div className="form-container">
        <form>
          <label>Name:</label>
          <input
            className="input-feild1"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label>Course:</label>
          <input
            className="input-feild2"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          <br />
          <label>Email:</label>
          <input
            className="input-feild3"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label>Gender:</label>
          <input
            className="input-feild4"
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label>Male</label>
          <input
            className="input-feild5"
            name="gender"
            type="radio"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label>Female</label>
          <br />
          <label>Browser </label>
          <select
            id="browsers"
            name="browser"
            value={formData.browser}
            onChange={handleChange}
          >
            <option value="chrome">Chrome</option>
            <option value="edge">Edge</option>
            <option value="brave">Brave</option>
            <option value="opera">Opera</option>
          </select>
          <br />
          <button type="submit" onClick={_submitForm}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
