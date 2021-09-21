import React from "react";
import { Col, Row } from "react-bootstrap";
import wholeLife from "../../images/dashboard/wholeLife.svg";
import universalLife from "../../images/dashboard/universalLife.svg";
import CardComponent from "../CardComponent/CardComponent";
import "./DashboardLife.css";

const DashboardLife = () => {
  const dashboardlifecard = [
    {
      imgName: wholeLife,
      title: "Whole Life",
      text: "Whole Life Products",
    },
    {
      imgName: universalLife,
      title: "Universal Life",
      text: "Universal Life Products.",
    },
  ];

  return (
    <div className="DashboardLife">
      <pre>
        <Row className="moto">
          <span>
            <a href="#"> / Whole Life / </a>
            <a href="#">Simplified Issue </a>
          </span>
        </Row>
      </pre>

      <Row>
        {dashboardlifecard.map((dashboardlifecarditem, index) => {
          return (
            <Col lg={4} key={index}>
              <CardComponent
                title={dashboardlifecarditem.title}
                text={dashboardlifecarditem.text}
                imgcomponent={dashboardlifecarditem.imgName}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default DashboardLife;
