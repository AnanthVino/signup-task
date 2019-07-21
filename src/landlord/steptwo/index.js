import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StepTwo = () => {

  const [password, updatePassword] = useState('');
  const [country, updateCountry] = useState('');
  const [gender, updateGender] = useState('male');

  const save = () => {
    localStorage.setItem("password", password);
    localStorage.setItem("country", country);
    localStorage.setItem("gender", gender);
    localStorage.setItem("role", "landlord");
    localStorage.setItem("page", "/welcome");
    window.location.href="/welcome";
  }

  return (
    <div className="container d-flex flex-column justify-content">
      <form >
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control input-box rounded-0" onChange={(evt) => updatePassword( evt.target.value )} placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <select className="form-control input-box rounded-0" defaultValue={''} onChange={(evt) => updateCountry( evt.target.value )}>
            <option value="" disabled>Select</option>
            <option className="option" value="Kuwait">Kuwait</option>
            <option className="option" value="Saudi Arabia">Saudi Arabia</option>
            <option className="option" value="United Arab Emirates">United Arab Emirates</option>
          </select>
        </div>
        <div className="form-group">   
          <label className="label">Gender</label>
          <div className="p-t-10">
            <label className="gender-container m-r-45">Male
                <input type="radio" checked="checked" name="gender" value="male" onChange={(evt) => updateGender( evt.target.value )}/>
                <span className="checkmark"></span>
            </label>
            <label className="gender-container">Female
                <input type="radio" name="gender" value="female" onChange={(evt) => updateGender( evt.target.value )}/>
                <span className="checkmark"></span>
            </label>
          </div>                
        </div>
      </form>
      <div className="d-flex justify-content-between">
        <Link className="btn btn-primary rounded-0" to="/landlord/stepone">Previous Step</Link>
        <button onClick={save} className="btn btn-success rounded-0">Submit</button>
      </div>
    </div>
  );
}

export default StepTwo;