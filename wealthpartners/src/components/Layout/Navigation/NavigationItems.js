import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import "./NavigationItems.css";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import NavigationItem from "./NavigationItem";
import dashboardSVG from "../../../images/index/dashboard_black.svg";
import printBlack from "../../../images/index/print_black.svg";
import termLife from "../../../images/index/termLife.svg";
import indexUniversalLife from "../../../images/index/indexUniversalLife.svg";
import UniversalLifeCA from "../../../images/index/UniversalLifeCA.svg";
import assetBasedHybridLTC from "../../../images/index/assetBasedHybridLTC.svg";
import guaranteedUniversalLife from "../../../images/index/guaranteedUniversalLife.svg";

const NavigationItems = () => {

  const rightNav = [
    {
      link:"/",
      title:"Term Quoter"
    },
    {
      link:"/",
      title:"IUL Estimator"
    },
    {
      link:"/",
      title:"UL Estimator"
    },
    {
      link:"/",
      title:"Asset Based LTC"
    },
    {
      link:"/",
      title:"GUL Term Quoter"
    },
    
  ]

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Row>
      <Col lg={3} className="left-nav col-10">
        <ul className="NavigationItems">
          <NavigationItem link="/home" imgName={dashboardSVG}>Dashboard</NavigationItem>
          <NavigationItem link="/about" imgName={printBlack}>Print</NavigationItem>
        </ul>
      </Col>
      <Col lg={9} className="right-nav">
        <ul className="NavigationItems">
          <NavigationItem link="/contact" imgName={termLife}>Term Quoter</NavigationItem>
          <NavigationItem link="/logout" imgName={indexUniversalLife}>IUL Estimator</NavigationItem>
          <NavigationItem link="/contact" imgName={UniversalLifeCA}>UL Estimator</NavigationItem>
          <NavigationItem link="/logout" imgName={assetBasedHybridLTC}>Asset Based LTC</NavigationItem>
          <NavigationItem link="/contact" imgName={guaranteedUniversalLife}>GUL Term Quoter</NavigationItem>
        </ul>
      </Col>
      <Col className="col-2 mobile-nav">
        <button onClick={handleClick}>Next</button>
        <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><img src={termLife} />Term Quoter</MenuItem>
        <MenuItem onClick={handleClose}><img src={indexUniversalLife} />IUL Estimator</MenuItem>
        <MenuItem onClick={handleClose}><img src={UniversalLifeCA} />UL Estimator</MenuItem>
        <MenuItem onClick={handleClose}><img src={assetBasedHybridLTC} />Asset Based LTC</MenuItem>
        <MenuItem onClick={handleClose}><img src={guaranteedUniversalLife} />GUL Term Quoter</MenuItem>
      </Menu>
      </Col>
    </Row>
  );
};

export default NavigationItems;
