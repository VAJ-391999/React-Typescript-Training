import React, { Fragment, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./SimplifiedIssueWholeLife.css";
import helpMeDecide from "../../images/index/helpMeDecide.svg";
import watchVideo from "../../images/index/watchVideo.svg";
import { NavLink, Link } from "react-router-dom";

const SimplifiedIssueWholeLife = () => {
  const [guideLink, setGuideLink] = useState([
    {
      title: "Who Should Consider This Product",
      active: true,
      content: [
        "Coverage for your entire life",
        "Do not want to go through a medical exam (blood and urine test)",
        "Coverage and cash value guaranteed",
        "Guaranteed level cost",
        "Simplified underwriting",
      ],
    },
    {
      title: "Specification",
      active: false,
      content: [
        "Coverage for your entire life Specification",
        "Do not want to go through a medical exam (blood and urine test)",
        "Coverage and cash value guaranteed",
        "Guaranteed level cost",
        "Simplified underwriting",
      ],
    },
    {
      title: " Insurance Company",
      active: false,
      content: [
        "Coverage for your entire life  Insurance Company",
        "Do not want to go through a medical exam (blood and urine test)",
        "Coverage and cash value guaranteed",
        "Guaranteed level cost",
        "Simplified underwriting",
      ],
    },
    {
        title: " How to Purchase",
        active: false,
        content: [
          "Coverage for your entire life  How to Purchase",
          "Do not want to go through a medical exam (blood and urine test)",
          "Coverage and cash value guaranteed",
          "Guaranteed level cost",
          "Simplified underwriting",
        ],
      },
      {
        title: "FAQ",
        active: false,
        content: [
          "Coverage for your entire life  FAQ",
          "Do not want to go through a medical exam (blood and urine test)",
          "Coverage and cash value guaranteed",
          "Guaranteed level cost",
          "Simplified underwriting",
        ],
      },
  ]);

  

  const setActiveLink = (value, index) => {
    const tempArr = [...guideLink];
    const temp = guideLink.findIndex(item => item.active === true)
    tempArr[temp].active = false;
    tempArr[index].active = true;
    setGuideLink(tempArr);
  }

  return (
    <div className="SimplifiedIssueWholeLife">
      <pre>
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
      <div className="SimplifiedContent">
        <Row>
          <Col lg={5}>
            <h1>Simplified Issue Whole Life</h1>
            <p>
              Whole life coverage that is easy to obtain and requires no medical
              exam.
            </p>
            <div class="did-you-know">
              <h6>Did You Know?</h6>
              <p>
                Half of Americans say they couldn’t survive a year without the
                primary wage earner’s income.
              </p>
            </div>
            <button class="btn quote-and-apply" type="button">
              Quote And Apply
            </button>
            <div className="help-link">
              <a href="#">
                <img src={helpMeDecide} />
                <span>Help Me Decide</span>
              </a>
              <a href="#">
                <img src={watchVideo} />
                <span>Watch Video</span>
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <div className="health-image"></div>
          </Col>
        </Row>
      </div>
      <div className="guide-navigation">
        <div className="guide-links">
          <nav>
            <ul>
              {guideLink.map((guideLinkItem, index) => {
                return (
                  <Fragment>
                    <li 
                        style={{borderBottom: guideLinkItem.active === true && "2px solid #304393"}}
                        onClick={() => setActiveLink(guideLinkItem.title, index)}>
                      <Link to="#">{guideLinkItem.title}</Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
        <h3>This product is great for clients looking for the following:</h3>
        <div className="product-facility">
          <ul>
            {guideLink.map((guideLinkItem, index) => {
              if (guideLinkItem.active === true) {
                return (
                  <div>
                    {guideLinkItem.content.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </div>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedIssueWholeLife;
