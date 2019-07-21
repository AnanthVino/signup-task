import React, { useState } from 'react';
import '../landlord.css';

const StepOne = () => {

  const [firstname, updateFirstname] = useState('');
  const [lastname, updateLastname] = useState('');
  const [email, updateEmail] = useState('');
  
  const save = () => {
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("page", "/landlord/steptwo");
    window.location.href = "/landlord/steptwo";
  }

  return (
    <div className="container d-flex flex-column justify-content">
      <form >
        <div className="form-group">
          <label>Firstname</label>
          <input type="text" className="form-control input-box rounded-0" defaultValue={localStorage.getItem("firstname")} onChange={(evt) => updateFirstname(evt.target.value)} placeholder="First Name" />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input type="text" className="form-control input-box rounded-0" defaultValue={localStorage.getItem("lastname")} onChange={(evt) => updateLastname(evt.target.value)} placeholder="Last Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control input-box rounded-0" defaultValue={localStorage.getItem("email")} onChange={(evt) => updateEmail( evt.target.value )} placeholder="Email" />
        </div>
      </form>
      <div className="d-flex justify-content-between">
        <a href="/" className="btn btn-primary rounded-0">Go Back</a>
        <button type="submit" onClick={save} className="btn btn-primary rounded-0">Next Step</button>
      </div>
    </div>
  );
}

export default StepOne;