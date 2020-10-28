import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/"+page);
  }

  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <body></body>
    <br>
      <div class="w3-container">
	      <h4 align="left"> 61114440403 นายพงศนาถ ขันอาสา </h4>
        <h2 align="center">- Computational Mathematics -</h2>
      </div>

      <div class="w3-row-padding">

      <div class="w3-third w3-margin-bottom">
        <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-green w3-xlarge w3-padding-32">บทที่ 1</li>
        <li class="w3-padding-16"><b>Basic Computing</b> </li>
        <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("b2s")}}>Sign Up</button>
        </ul>
    </div>

    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
      <li class="w3-black w3-xlarge w3-padding-32">บทที่ 2</li>
      <li class="w3-padding-16"><b>Linear Equations</b></li>
      <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("elimination")}}>Sign Up</button>
      </ul>
    </div>

    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-green w3-xlarge w3-padding-32">บทที่ 3</li>
        <li class="w3-padding-16"><b>Interpolation</b> </li>
          <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("interpolation")}}>Sign Up</button>
      </ul>
    </div>


    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-black w3-xlarge w3-padding-32">บทที่ 4</li>
        <li class="w3-padding-16"><b>Differentiation</b></li>

          <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("differentiation")}}>Sign Up</button>
      </ul>
    </div>


    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-green w3-xlarge w3-padding-32">บทที่ 5</li>
        <li class="w3-padding-16"><b>Integration</b></li>

          <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("integration")}}>Sign Up</button>
      </ul>
    </div>

<div class="w3-third w3-margin-bottom">
  <ul class="w3-ul w3-border w3-center w3-hover-shadow">
    <li class="w3-black w3-xlarge w3-padding-32">บทที่ 6</li>
    <li class="w3-padding-16"><b>Root-finding</b></li>
      <button class="w3-button w3-green w3-padding-large" onClick={()=>{nextPage("root-finding")}}>Sign Up</button>
  </ul>
</div>
</div>

    </br>
    </div>
  );
}
export default Main ;
