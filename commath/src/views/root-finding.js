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
import { getRootFinding } from "../functions/function";

function RootFinding() {
  const navigate = useNavigate();
  const [a, seta] = useState();
  const [b, setb] = useState();
  const [dx, setdx] = useState();
  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
       <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <body></body>
    <br></br>
    
    <div class="w3-container">
      <h2>Root-finding</h2>
    </div>
    
    <div class="w3-row-padding">
    
    <div class="w3-third w3-margin-bottom">
      <ul class="w3-ul w3-border w3-center w3-hover-shadow">
        <li class="w3-black w3-xlarge w3-padding-32">
          <div className="text-center">
            <Row>
              <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
              <Input
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={a}
                onChange={(e) => seta(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Row>
            <Row>
              <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
              <Input
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={b}
                onChange={(e) => setb(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Row>
            <Row>
              <h3 style={{ marginTop: "20px", marginRight: "20px" }}>dx:</h3>
              <Input
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  width: 100,
                }}
                value={dx}
                onChange={(e) => setdx(e.target.value)}
                type="text"
                name="bit2string"
                id="bit2string"
              />
            </Row>
          </div>
        <li class="w3-light-grey w3-padding-24">
          <h4>Result: {result}</h4>
          <button class="w3-button w3-green w3-padding-large" onClick={generate} >OK</button>
      
          <button class="w3-button w3-green w3-padding-large" onClick={back}>back</button>
        </li>
       
        <h3>
            exam:<p></p>
            a = 0<p></p>
            b = 1<p></p>
            dx = 0.0001<p></p>
        </h3>
    </li>
    </ul>
    </div>
    </div>
    </div>
  );
}
export default RootFinding;
