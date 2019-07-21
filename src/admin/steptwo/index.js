import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../admin.css';

const StepTwo = () => {

  const [password, updatePassword] = useState('');
  const [mobile, updateMobile] = useState('');
  const [country, updateCountry] = useState('');

  const save = () => {
    localStorage.setItem("password", password);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("country", country);
    localStorage.setItem("role", "admin");
    localStorage.setItem("page", "/welcome");
    window.location.href="/welcome";
  }

  return (
    <div className="container d-flex flex-column justify-content">
      <form>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control input-box rounded-0" onChange={(evt) => updatePassword( evt.target.value )} placeholder="Password" />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="text" className="form-control input-box rounded-0" onChange={(evt) => updateMobile( evt.target.value )} placeholder="Mobile" />
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
      </form>
      <div className="d-flex justify-content-between">
        <Link className="btn btn-primary rounded-0" to="/admin/stepone">Previous Step</Link>
        <button onClick={save} className="btn btn-success rounded-0">Submit</button>
      </div>
    </div>
  );
}

export default StepTwo;