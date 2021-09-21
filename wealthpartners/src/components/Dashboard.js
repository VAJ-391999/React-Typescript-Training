import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import darkarrow from "../images/dashboard/Polygon-18.svg";
import lightarrow from "../images/dashboard/Polygon-19.svg";
import Card from "@material-ui/core/Card";
import insuranceNeedsCalculator from "../images/dashboard/insuranceNeedsCalculator.svg";
import scheduleSalesSupport from "../images/dashboard/scheduleSalesSupport.svg";
import submitCase from "../images/dashboard/submitCase.svg";
import lifeProducts from "../images/dashboard/lifeProducts.svg";
import LTC from "../images/dashboard/LTC.svg";
import disability from "../images/dashboard/disability.svg";
import CardComponent from "./CardComponent/CardComponent";
import m1 from "../images/dashboard/Image 1.png";
import m2 from "../images/dashboard/Image 2.png";
import m3 from "../images/dashboard/Image 3.png";
import m4 from "../images/dashboard/Image 4.png";
import m5 from "../images/dashboard/Image 5.png";
import "./Dashboard.css";

const Dashboard = () => {
  const planCard = [
    {
      title: "Estimate Your Client’s Insurance Needs",
      text: "Based on your client’s financial and family situation.",
      imgName: insuranceNeedsCalculator,
    },
    {
      title: "Schedule Sales Support",
      text: "Schedule expert support for insurance process help.",
      imgName: scheduleSalesSupport,
    },
    {
      title: "Submit a Case",
      text: "Quickly submit case requests for any type of product",
      imgName: submitCase,
    },
  ];

  const productCard = [
    {
      imgName: lifeProducts,
      title: "Life Products",
      text: "All Life Products: IUL, UL, Whole Life, VUL and Term",
    },
    {
      imgName: LTC,
      title: "Long Term Care",
      text: "Traditional LTC and Asset Based LTC (Linked-Benefit)",
    },
    {
      imgName: disability,
      title: "Disability",
      text: "Short-Term and Long-Term DI",
    },
  ];

  return (
    <div className="dashboard">
      <Row className="total-pending-cases">
        <Col lg={6}>
          <div className="pending-cases">
            <h6>
              Total Pending Cases: 22 <img src={darkarrow} />
            </h6>
            <div className="pending-case">
              <a class="case-item" href="#">
                <div class="pending-case-title">
                  <img src={m1} />
                  <div class="pending-case-bar"></div>
                </div>
                <p>
                  Quoting
                  <br />
                  Coverage (12)
                  <img src={darkarrow} />
                </p>
                <span>(12)</span>
              </a>
              <a class="case-item" href="#">
                <div class="pending-case-title">
                  <img src={m2} />
                  <div class="pending-case-bar"></div>
                </div>
                <p>
                  Completing
                  <br />
                  Application (9)
                  <img src={darkarrow} />
                </p>
                <span>(9)</span>
              </a>

              <a class="case-item" href="#">
                <div class="pending-case-title">
                  <img src={m3} />
                  <div class="pending-case-bar"></div>
                </div>
                <p>
                  Application
                  <br />
                  Review
                  <img src={lightarrow} />
                </p>
                <span>(0)</span>
              </a>

              <a class="case-item" href="#">
                <div class="pending-case-title">
                  <img src={m4} />
                  <div class="pending-case-bar"></div>
                </div>
                <p>
                  Policy
                  <br />
                  Delivery
                  <img src={lightarrow} />
                </p>
                <span>(0)</span>
              </a>

              <a class="case-item" href="#">
                <div class="pending-case-title">
                  <img src={m5} />
                </div>
                <p>
                  Coverage
                  <br />
                  Active (1)
                  <img src={darkarrow} />
                </p>
                <span>(1)</span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={6}>
              <div class="corv-insight">
                <div class="corv-insight-content">
                  <h6>
                    <b>
                      Covr would love to help you meet your insurance goals!
                    </b>
                  </h6>
                  <p>What is your submitted premium goal for this year?</p>
                  <a href="#">Set a Goal</a>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="corv-insight">
                <div class="corv-insight-content">
                  <h6>
                    <b>Welcome to Covr Insight</b>
                  </h6>
                  <p>
                    Covr can help you decide which clients Are the best fit for
                    life insurance strategies.
                  </p>
                  <a href="#">Learn More</a>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {planCard.map((planitem, index) => {
          return (
            <Col lg={4} key={index}>
              <Card className="plancard">
                <Row className="plan-heading">
                  <div className="plan-title-img">
                    <img src={planitem.imgName} />
                  </div>
                  <div className="plan-title">
                    <span>{planitem.title}</span>
                  </div>
                </Row>
                <Row className="plan-text">
                  <p>{planitem.text}</p>
                </Row>
                <Row className="open-link">
                  <pre>
                    <a href="#">Open</a>
                  </pre>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className="products">
        <h4>Products</h4>
        {productCard.map((productitem, index) => {
          return (
            <Col lg={4} key={index}>
              <CardComponent
                title={productitem.title}
                text={productitem.text}
                imgcomponent={productitem.imgName}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
