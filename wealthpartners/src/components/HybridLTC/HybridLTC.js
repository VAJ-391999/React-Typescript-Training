import React from "react";
import { Row, Col } from "react-bootstrap";
import lincolnMoneyGuardII from "../../images/hybrid/lincolnMoneyGuardII/lincolnMoneyGuardII.png";
import nationwideCareMatters from "../../images/hybrid/nationwideCareMatters/nationwideCareMatters.png";
import assetBasedHybridLTC from "../../images/hybrid/assetBasedHybridLTC.svg";
import brighthouseSmartCare from "../../images/hybrid/brighthouseSmartCare.png";
import CardComponent from '../CardComponent/CardComponent';
import "./HybridLTC.css";

const HybridLTC = () => {
  const hybridcard = [
    {
      imgName: lincolnMoneyGuardII,
      title: "Lincoln MoneyGuard® II",
      text:
        "Product that combines the benefit of long-term care with the value of universal life insurance in one product.",
    },
    {
      imgName: brighthouseSmartCare,
      title: "Brighthouse SmartCare",
      text:
        "Product that combines the value of life insurance and long-term care benefits together in one product. This product will be a quote request to your Covr Insurance Sales Team.",
    },
    {
      imgName: assetBasedHybridLTC,
      title: "Asset Based / Hybrid LTC",
      text: "Product that combines the value of life insurance and long-term care benefits together in one product. This product will be a quote request to your Covr Insurance Sales Team.",
    },
    {
      imgName: nationwideCareMatters,
      title: "Nationwide Care Matters",
      text: "Product that combines the value of life insurance and long-term care benefits together in one product. This product will be a quote request to your Covr Insurance Sales Team.",
    },
    {
      imgName: brighthouseSmartCare,
      title: "Brighthouse SmartCare",
      text: "Product that combines the benefit of long term care with the value of life insurance protection in one product.",
    },
  ];

  return (
    <div className="HybridLTC">
      <pre className="link-collection">
        <Row className="moto">
          <span>
            <a href="#">Dashboard / </a>
            <a href="#">Life / </a>
            <a href="#">Permanent Products / </a>
            <a href="#">Whole Life / </a>
            <a href="#">Simplified Issue / </a>
            <a href="#">Simplified Issue whole Life</a>
          </span>
        </Row>
      </pre>
      <div>
          <Row>
              {
                  hybridcard.map((hybridcarditem, index) => {
                      return (
                          <Col lg={4}>
                              <CardComponent 
                                 title={hybridcarditem.title}
                                 text={hybridcarditem.text}
                                 imgcomponent={hybridcarditem.imgName}
                              />
                          </Col>
                      )
                  })
              }
          </Row>
      </div>
    </div>
  );
};

export default HybridLTC;
