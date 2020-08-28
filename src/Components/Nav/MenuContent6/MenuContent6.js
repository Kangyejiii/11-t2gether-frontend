import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./MenuContent6.scss";
class MenuContent6 extends Component {
  render() {
    return (
      <div className="MenuContent6">
        <div className="MenuContentContainer">
          <div className="MenuContentBox">
            <ul className="upperList">
              <li>ABOUT T2 SOCIETY</li>
              <li>JOIN T2 SOCIETY</li>
            </ul>
          </div>
          <div className="MenuBanner">
            <div className="bannerImg">
              <Link to="/account">
                <div className="bannerTitle">Tea Society</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuContent6;
