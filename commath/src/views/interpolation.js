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
import { getInterpolation } from "../functions/function";

function Interpolation() {
  const navigate = useNavigate();
  const [x, setx] = useState();
  const [xi1, setxi1] = useState();
  const [xi2, setxi2] = useState();
  const [xi3, setxi3] = useState();
  const [xi4, setxi4] = useState();
  const [xi5, setxi5] = useState();
  const [xi6, setxi6] = useState();
  const [yi1, setyi1] = useState();
  const [yi2, setyi2] = useState();
  const [yi3, setyi3] = useState();
  const [yi4, setyi4] = useState();
  const [yi5, setyi5] = useState();
  const [yi6, setyi6] = useState();

  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      x:x,
      xi:[xi1,xi2,xi3,xi4,xi5,xi6],
      yi:[yi1,yi2,yi3,yi4,yi5,yi6]
      
    };
    getInterpolation(data).then((res) => {
        setresult(`วินาทีที่ ${x} จะมีความเร็วประมาณ ${res}`)
    });
  };

  return (
    <div>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        
          <br></br>
          
          <div class="w3-container">
              <h2>Interpolation</h2>
          </div>
          
          <div class="w3-row-padding">
          
          <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-border w3-center w3-hover-shadow">
              <li class="w3-black w3-xlarge w3-padding-32">
                  <div className="text-center">
      
                        <h3 style={{ marginTop: "20px", marginRight: "20px" }}>t:</h3>
                        <Input
                          style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={x}
                          onChange={(e) => setx(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />

                        <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                          x:
                        </h3>

                        <Input
                          style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi1}
                          onChange={(e) => setxi1(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi2}
                          onChange={(e) => setxi2(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi3}
                          onChange={(e) => setxi3(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi4}
                          onChange={(e) => setxi4(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi5}
                          onChange={(e) => setxi5(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={xi6}
                          onChange={(e) => setxi6(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                          // onChange={(e) => setxi6(e.target.value)}
                        />

                        <h3 style={{ marginTop: "20px", marginRight: "20px" }}>
                          y:
                        </h3>

                        <Input
                          style={{
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi1}
                          onChange={(e) => setyi1(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi2}
                          onChange={(e) => setyi2(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi3}
                          onChange={(e) => setyi3(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi4}
                          onChange={(e) => setyi4(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi5}
                          onChange={(e) => setyi5(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                        />
                        <Input
                          style={{
                            marginLeft: "20px",
                            marginTop: "20px",
                            marginBottom: "20px",
                            width:60,
                          }}
                          value={yi6}
                          onChange={(e) => setyi6(e.target.value)}
                          type="text"
                          name="bit2string"
                          id="bit2string"
                          // onChange={(e) => setxi6(e.target.value)}
                        />
                    </div>
              <li class="w3-light-grey w3-padding-24">
              <h4>Result: {result}</h4>
                <button class="w3-button w3-green w3-padding-large" onClick={generate} >OK</button>
            
                <button class="w3-button w3-green w3-padding-large" onClick={back}>back</button>
              </li>
              </li>
            </ul>
            exam:<p></p>
              t = 5<p></p>
              x = [ 0, 8, 14, 20, 23, 30 ]<p></p>
              y = [ 0, 50, 96, 110, 100, 86 ]<p></p>
          </div>
        
          </div>
          </div>
  );
}

export default Interpolation;
