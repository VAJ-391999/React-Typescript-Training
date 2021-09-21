import React from 'react';
import { Row, Col } from "react-bootstrap";
import Moto from '../CardComponent/Moto/Moto';
import PlanCard from '../CardComponent/PlanCard/PlanCard';
import advisorResourceCenter from '../../images/salesassistance/advisorResourceCenter.svg';
import FolderGroup from '../../images/salesassistance/FolderGroup.svg';
import FolderGroupLock from '../../images/salesassistance/FolderGroupLock.svg';
import needsAnalysis from '../../images/salesassistance/needsAnalysis.svg';
import requestAPolicyReview from '../../images/salesassistance/requestAPolicyReview.svg';
import requestAQuote from '../../images/salesassistance/requestAQuote.svg';
import requestATermConversion from '../../images/salesassistance/requestATermConversion.svg';
import SignalBarsBarGraph from '../../images/salesassistance/SignalBarsBarGraph.svg';
import './GetSalesAssistance.css';

const GetSalesAssistance = () => {
    const motoTitle = ['Dashboard', 'Get sales asssistancs'];
    const planCard = [
        {
            title: "Request a Quote",
            text: "Request a customized quote ffrom the sales desk.",
            imgName: requestAQuote,
            playVideoLink: false,
        },
        {
          title: "Request a Policy Review",
          text: "Request a policy review from the sales desk.",
          imgName: requestAPolicyReview,
          playVideoLink: false,
        },
        {
          title: "Request a Term Conversion",
          text: "Request a Term Conversion.",
          imgName: requestAPolicyReview,
          playVideoLink: false,
        },
        {
          title: "Inforce Policy Managment",
          text: "Manage a inforce Book of Business through corv insights.",
          imgName: SignalBarsBarGraph,
          playVideoLink: false,
        },
        {
          title: "Needs Analysis",
          text: "Calculate how much life insurance is needed.",
          imgName: needsAnalysis,
          playVideoLink: false,
        },
        {
          title: "Advisor Resource Center",
          text: "Access Core and advance Insurance Planning Documents.",
          imgName: advisorResourceCenter,
          playVideoLink: false,
        },
        {
          title: "View Submitted Requestes",
          text: "View all of your submitted policy reviews, term conversions, illustrations, and app requests.",
          imgName: FolderGroup,
          playVideoLink: false,
        },
        {
          title: "Saved Quotes",
          text: "Run a saved quote.",
          imgName: FolderGroupLock,
          playVideoLink: false,
        },
        {
          title: "Advancd Insurance Planning",
          text: "Estate planning Business Planning Executive Compensation Planning Philanthropic Planing Retirement Planning For Assistance Contact: Doug Brisco JD, LLM, CLU, ChFC, CAP, CASL, SVP, Estate & Business Insurance Planning (208) 383-3807 doug.brisc@corvtech.com ",
          imgName: requestATermConversion,
          playVideoLink: false,
        },
      ];
    return (
        <div className="GetSalesAssistance">
            <Moto mototitles={motoTitle} />
            <Row>
                {planCard.map((plancarditem,index) => {
                    return <PlanCard key={index} plancarditem={plancarditem} />
                })}
            </Row>
            
        </div>
    );
};

export default GetSalesAssistance;