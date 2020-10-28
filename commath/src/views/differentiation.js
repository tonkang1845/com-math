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
import { useNavigate } from "react-router-dom";
import { getDifferentiation } from "../functions/function";

function Differentiation() {
  const navigate = useNavigate();
  const [h, seth] = useState();
  const [p, setp] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      h:h,
      p:p
      
    };
    getDifferentiation(data).then((res) => {
       setresult(res)
    });
  };

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <body></body>
    <br></br>
    
    <div class="w3-container">
      <h2>Differentiation</h2>
    </div>
    
    <div class="w3-row-padding">
    
    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-black w3-xlarge w3-padding-32">
          <h3 style={{ marginTop: "20px", marginRight: "20px" }}>h:</h3>
                      <Input
                        style={{
                          marginTop: "20px",
                          marginBottom: "20px",
                          width: 100,
                        }}
                        value={h}
                        onChange={(e) => seth(e.target.value)}
                        type="text"
                        name="bit2string"
                        id="bit2string"
                      />
                      <h3 style={{ marginTop: "20px", marginRight: "20px" }}>p:</h3>
                      <Input
                        style={{
                          marginTop: "20px",
                          marginBottom: "20px",
                          width: 100,
                        }}
                        value={p}
                        onChange={(e) => setp(e.target.value)}
                        type="text"
                        name="bit2string"
                        id="bit2string"
                      />
        <li class="w3-light-grey w3-padding-24">
          <h4>answer: {result}</h4>
          <button class="w3-button w3-green w3-padding-large" onClick={generate} >OK</button>
      
          <button class="w3-button w3-green w3-padding-large" onClick={back}>back</button>
        </li>
       
        <h3>
           exam:
            h = 0.64
            p = 2
        </h3>
    </li>
    </ul>
    </div>
    </div>
    </div>
  );
}
export default Differentiation;
