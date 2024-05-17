import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar";
import Carousel from "./Carousel"; 
import MenuCard from "./MenuCard"; 
import FeedbackForm from "./FeedbackForm";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Navbar/>
        <Carousel/>
        <div className="container pt-5">
      <h2 className="text-light mb-5">Our Menu</h2>
      <div className="row d-flex justify-content-between">
        <MenuCard
          title="Margherita Pizza"
          image="/Images/menu1.jpg"
          oldPrice={'$123555'}
          newPrice={'$321456'}
        />
        <MenuCard
          title="Mushroom Pizza"
          image="/Images/menu2.jpg"
          oldPrice={'$123555'}
          newPrice={'$321666'}
        />
        <MenuCard
          title="Pepperoni Pizza"
          image="/Images/menu3.jpg"
          oldPrice={'$123'}
          newPrice={'$321'}
        />
        <MenuCard
          title="Vegetarian Pizza"
          image="/Images/menu4.jpg"
          oldPrice={'$123'}
          newPrice={'$321'}
        />
      </div>
    </div>

        <FeedbackForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
