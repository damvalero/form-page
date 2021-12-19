import React, {useState} from "react";

import Banner from "./Banner";
import { DataBanner } from "./Data";
import BlockCallcenter from "./BlockCallcenter";
import Form from "./Form";
import FromSuccess from './FormSuccess';

const FormBanner = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-banner-container">
        {!isSubmitted ? <Form submitForm={submitForm} /> : <FromSuccess />}
        {/* <Banner info={DataBanner[0]} />
        <BlockCallcenter /> */}
      </div>
    </>
  );
};

export default FormBanner;