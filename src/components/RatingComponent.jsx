import React, { Component } from "react";
import starIcon from "../images/icon-star.svg";

export class RatingComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ratingRef = React.createRef();
  }

  handleSubmit(e) {
    console.log(e);
    if (this.props.clickValue === 0) {
      alert("Pls select a value");
    } else {
      this.props.clickSubmit(e);
    }
  }

  componentDidMount(){
    const ratingList = this.ratingRef.current;
    const childrenArr = this.ratingRef.current.children;
    let check = new Array(5).fill(false);
    
    for(let i = 0; i < childrenArr.length; i++){
      childrenArr[i].addEventListener('click', e => {
        childrenArr[i].classList.add('selected');
        for(let j = 0; j < childrenArr.length; j++){
          if(i !== j) childrenArr[j].classList.remove('selected');
        }
      })
    }
  }

  handleChange(e) {
    this.props.clickChange(e.target.textContent);
  }

  render() {
    return (
      <div className="rating-comp" id="rating">
        <div className="logo">
          <img src={starIcon} alt="star icon" />
        </div>
        <div className="text-area">
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with our support request. All feedback
            is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="rating-list" ref = {this.ratingRef}>
          <button onClick={this.handleChange} className="rating-btn">
            1
          </button>

          <button onClick={this.handleChange} className="rating-btn">
            2
          </button>

          <button onClick={this.handleChange} className="rating-btn">
            3
          </button>

          <button onClick={this.handleChange} className="rating-btn">
            4
          </button>

          <button onClick={this.handleChange} className="rating-btn">
            5
          </button>
        </div>
        <button onClick={this.handleSubmit} className="Submit">
          SUBMIT
        </button>
      </div>
    );
  }
}

export default RatingComponent;
