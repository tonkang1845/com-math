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
import { getIntegration } from "../functions/function";

function Integration() {
  const navigate = useNavigate();

  const [result, setresult] = useState();
  const [a, seta] = useState(0);
  const [b, setb] = useState(3);

  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      a: a,
      b: b,
    };
    getIntegration(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
          <div className="text-center">
            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
              Integration
            </h2>
          </div>
          <div className="text-center">
            <p>exam:</p>
            <p>a = 0</p>
            <p>b = 3</p>
          </div>

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
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
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="primary">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>คำนวณ</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="secondary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "10px" }}>กลับ</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="4"></Col>
      </Row>
    </div>
  );
}
export default Integration