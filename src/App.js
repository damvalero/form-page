import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Navbar from "./components/Navbar";
import FormBanner from "./components/FormBanner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormBanner />
      {/* <Banner info={DataBanner[1]} /> */}
    </div>
  );
}

export default App;
