import React, { Component } from "react";
import ThankYouImg from "../images/illustration-thank-you.svg";

export class ThankYouComponent extends Component {
  constructor(props) {
    super(props);
    this.handleOk = this.handleOk.bind(this);
  }

  handleOk(e) {
    this.props.clickOk(e);
  }

  render() {
    return (
      <div className="Thank-Comp">
        <div className="Thank-Img">
          <img src={ThankYouImg} alt="Thank You Image" />
        </div>
        <div className="rating-result">
          <p>You selected {this.props.clickValue} out of 5</p>
        </div>
        <div className="ThankYou-Text">
          <h1>Thank You!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  }
}

export default ThankYouComponent;
