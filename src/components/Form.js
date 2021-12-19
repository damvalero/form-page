import React from "react";

import "./Form.css";
import FormLogic from "./FormLogic";
import validate from "../form-controls/FormValidation";

const Form = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors } = FormLogic(submitForm,
    validate
  );

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit} action="">
        <h1 className="form-title">
          Find inbound call centers for your company
        </h1>
        <p className="form-text">
          Use our AI and Big Data driven call center sourcing solution
        </p>
        <div className="form-inputs">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            type="text"
            name="company"
            placeholder="Company"
            className="form-input"
            value={values.company}
            onChange={handleChange}
            maxLength="80"
          />
          {errors.company && <p>{errors.company}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full name"
            className="form-input"
            value={values.name}
            onChange={handleChange}
            maxLength="50"
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            type="number"
            name="phone"
            className="form-input"
            // value={values.phone}
            // onChange={handleChange}
          />
          {/* {errors.phone && <p>{errors.phone}</p>} */}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="name@mail.com"
            className="form-input"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <button className="button" type="submit">
          Get informed
        </button>
      </form>
    </div>
  );
};

export default Form;
