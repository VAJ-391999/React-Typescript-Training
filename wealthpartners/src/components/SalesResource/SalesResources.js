import React from 'react';
import { Row, Col } from "react-bootstrap";
import Moto from '../CardComponent/Moto/Moto';
import resourcePlay from '../../images/life/resourcePlay.svg';
import PlanCard from '../CardComponent/PlanCard/PlanCard';

const SalesResource = () => {

    const motoTitle = ['Dashboard', 'Sales Resources']; 
    const planCard = [
        {
            title: "1Click Platform Overview",
            text: "Video - Introduction to 1Click.",
            imgName: resourcePlay,
            openLink: false,
            playVideoLink: true,
        },
        {
          title: "1Click Platform Overview",
          text: "OES Overview.",
          imgName: resourcePlay,
          openLink: false,
            playVideoLink: true,
        },
        {
          title: "1Click Platform Overview",
          text: "Video - Customer sales Intro 1.",
          imgName: resourcePlay,
          openLink: false,
            playVideoLink: true,
        },
        {
          title: "Simplified Intro Term",
          text: "Video - Customer sales Intro 2.",
          imgName: resourcePlay,
          openLink: false,
            playVideoLink: true,
        },
        {
          title: "Simplified Intro Term",
          text: "Video - Customer sales Brochure.",
          imgName: resourcePlay,
          openLink: false,
            playVideoLink: true,
        },
      ];

    return (
        <div className="SalesResource" style={{padding:"15px"}}>
            <Moto mototitles={motoTitle} />
            <Row>
                {planCard.map((plancarditem, index) => {
                    return <PlanCard key={index} plancarditem={plancarditem} />
                })}
            </Row>
        </div>
    );
};

export default SalesResource;