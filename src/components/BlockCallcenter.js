import React from "react";

import "./BlockCallcenter.css";
import { DataCallcenter } from "./Data";

const BlockCallcenter = () => {
  return (
    <>
      <div className="block-database">
        <div className="text-database">
          <p>Welcome to Europe's lasgest call center database</p>
        </div>
        <div className="database">
          <div className="data-up">
            <div className="tenders">
              <p>{DataCallcenter.tenders}+</p>
              <p>Tender</p>
            </div>
            <div className="callcenter">
              <p>{DataCallcenter.callcenter}+</p>
              <p>Callcenter</p>
            </div>
          </div>
          <div className="data-down">
            <div className="agents" >
              <p>{DataCallcenter.agents}</p>
              <p>Agents available</p>
            </div>
            <div className="faster">
              <p>{DataCallcenter.faster}%</p>
              <p>Faster sourcing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockCallcenter;
