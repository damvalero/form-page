import React from "react";

import Banner from "./Banner";
import { DataBanner } from "./Data";
import BlockCallcenter from "./BlockCallcenter";
import Form from "./Form";

const FormBanner = () => {
  return (
    <>
      <div className="form-banner-container">
        <Form />
        {/* <Banner info={DataBanner[0]} />
        <BlockCallcenter /> */}
      </div>
    </>
  );
};

export default FormBanner;
