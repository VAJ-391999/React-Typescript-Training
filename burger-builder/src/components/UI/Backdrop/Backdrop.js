"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Backdrop.css");
var backdrop = function (_a) {
    var clicked = _a.clicked, show = _a.show;
    return (show ? <div className="Backdrop" onClick={clicked}></div> : null);
};
exports["default"]=backdrop;
// props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null
