import React from "react";
import {Row} from 'react-bootstrap';
import './Moto.css';

const Moto = (props) => {
  return (
    <div className="Moto">
      <pre>
        <Row className="moto">
          <span>
            {props.mototitles.map((item,index) => {
              return <a href="#">{item} / </a>
            })}
          </span>
        </Row>
      </pre>
    </div>
  );
};

export default Moto;
