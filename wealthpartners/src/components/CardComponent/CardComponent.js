import React from "react";
import Card from "@material-ui/core/Card";
import { Row, Col } from "react-bootstrap";
import "./CardComponent.css";

const CardComponent = (props) => {
  return (
    <Card className="toolbox">
      <Row className="toolbox-heading">
        <div className="toolbox-img">
          <img src={props.imgcomponent} />
        </div>
        <div className="toolbox-title">
          <span>{props.title}</span>
        </div>
      </Row>

      <Row className="toolbox-details">
        <p>{props.text}</p>
      </Row>
      <Row className="open-play-video">
        <pre>
          <a href="#">Open</a>
        </pre>
      </Row>
    </Card>
  );
};

export default CardComponent;
