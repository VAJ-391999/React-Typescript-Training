import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import partner1 from "../../images/index/DougBrisco.png";
import partner2 from "../../images/index/Mike Santucci.png";
import caseStatus from "../../images/index/caseStatus.svg";
import salesAssistance from "../../images/index/salesAssistance.svg";
import Document3 from "../../images/index/document3.svg";
import CardComponent from "../CardComponent/CardComponent";
import NavigationItems from '../Layout/Navigation/NavigationItems';
import "./Layout.css";

const Layout = (props) => {
  const toolboxCard = [
    {
      imgName: caseStatus,
      title: "Case Status & Report",
      text:
        "Cases active in underwriting 3 Pending Cases Pending premium: $6,532",
    },
    {
      imgName: salesAssistance,
      title: "Sales Assistance",
      text:
        "Request illustration, request a term conversion, or run life insurance needs analysis.",
    },
    {
      imgName: Document3,
      title: "Policy Review",
      text: "Assess your client’s existing policies.",
    },
  ];

  return (
    <div className="Layout">
      <Container>
        <Row className="heading">
          <Col lg={6} sm={6} className="left-heading col-6">
            <Logo />
          </Col>
          <Col lg={6} sm={6} className="right-heading col-6">
            <div className="partners">
              <div className="partner">
                <img src={partner1} />
                <p>
                  Advanced Insurance
                  <br />
                  Sales Consultant
                </p>
              </div>
              <div class="partner">
                <img src={partner2} />
                <p>
                  Internal Sales
                  <br />
                  Consultant
                </p>
              </div>
            </div>
            {/*<div class="welcome-back-msg">
              <p>Welcome Back Tirthak Shah</p>
  </div>*/}
          </Col>
        </Row>
        <Row className="main-content">
        <header className="Toolbar">
            <nav>
                <NavigationItems />
            </nav>
          </header>
         
          {props.children}
          
          <div className="footer">
            <h4>ToolBox</h4>
            <Row>
            {toolboxCard.map((toolboxitem, index) => {
              return (
                <Col lg={4} key={index}>
                  <CardComponent
                    title={toolboxitem.title}
                    text={toolboxitem.text}
                    imgcomponent={toolboxitem.imgName}
                  />
                </Col>
              );
            })}
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
