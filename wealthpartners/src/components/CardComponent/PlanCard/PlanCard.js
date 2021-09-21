import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import "./PlanCard.css";

const PlanCard = (props) => {
  return (
    <Col lg={4}>
      <Card className="plancard">
        <Row className="plan-heading">
          <div className="plan-title-img">
            <img src={props.plancarditem.imgName} />
          </div>
          <div className="plan-title">
            <span>{props.plancarditem.title}</span>
          </div>
        </Row>
        <Row className="plan-text">
          <p>{props.plancarditem.text}</p>
        </Row>
        <Row className="open-link">
          <pre>
            {props.plancarditem.openLink && <a href="#">Open</a>} {props.plancarditem.playVideoLink && <a href="#">Play Video</a>}
          </pre>
        </Row>
      </Card>
    </Col>
  );
};

export default PlanCard;
