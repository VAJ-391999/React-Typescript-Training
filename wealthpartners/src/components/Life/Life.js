import React from "react";
import termProducts from "../../images/life/termProducts.svg";
import AccidentalDeath from "../../images/life/AccidentalDeath.svg";
import { Col, Row } from "react-bootstrap";
import CardComponent from "../CardComponent/CardComponent";
import "./Life.css";

const Life = () => {
  const lifecard = [
    {
      imgName: termProducts,
      title: "Term Products",
      text: "Term Life Products.",
    },
    {
      imgName: AccidentalDeath,
      title: "Accidential Death Insurance",
      text:
        "Life Insurance that pays a death benefits, if death occurs as a result of an accident.",
    },
  ];

  return (
    <div className="Life">
      <Row>
        {lifecard.map((lifecarditem, index) => {
          return (
            <Col lg={4} key={index}>
              <CardComponent
                title={lifecarditem.title}
                text={lifecarditem.text}
                imgcomponent={lifecarditem.imgName}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Life;
