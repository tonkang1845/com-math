import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { getB2s } from "../functions/function";
import { useNavigate } from "react-router-dom";

function B2s() {
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState();
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div class="body">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
      <body>
      <br>
  
      <div class="w3-container">

          <h2>Basic Computing</h2>
      </div>
  
    <div class="w3-row-padding">
  
    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
       <li class="w3-black w3-xlarge w3-padding-32">
        <Input
                        style={{
                          marginTop: "20px",
                          marginBottom: "20px",
                          width: 500,
                        }}
                        value={bit2string}
                        type="text"
                        name="bit2string"
                        id="bit2string"
                        onChange={(e) => setBit2string(e.target.value)}/>
                      </li>
      <li class="w3-light-grey w3-padding-24">
      <h4>answer : {result}</h4>
        <button class="w3-button w3-green w3-padding-large" onClick={generate} >OK</button>
    
        <button class="w3-button w3-green w3-padding-large" onClick={back}>back</button>
      </li>
    </ul>
    <h3>exam: 01111000000001010000000000000000</h3>
  </div>
    </div>
    </br>
    </body>
  </div>
  );
}
export default B2s;
