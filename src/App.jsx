import './App.css';
import React ,{Component, useState} from 'react';
import RatingComponent from './components/RatingComponent';
import ThankYouComponent from './components/ThankYouComponent';

class App extends Component {

  constructor(props) {
    super(props)
    
    this.handleState = this.handleState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
       value: 0,
       submit: false
    }
  }

  handleSubmit(e){
    if(e.target.classList.contains('Submit')){
      this.setState({submit: true});
    }
    if(e.target.classList.contains('Ok-btn')){
      this.setState({value: 0,submit: false});
    }
  }

  handleState(clickValue){
    this.setState({value: clickValue});
  }

  render(){ 
    let clickValue = this.state.value;
    let submitValue = this.state.submit;
    return(
      <div className='App'>
        {!submitValue ?
          <RatingComponent clickValue = {clickValue}
          clickChange = {this.handleState} clickSubmit = {this.handleSubmit}/>:
          <ThankYouComponent clickOk = {this.handleSubmit} clickValue = {clickValue} />}
      </div>
    )
  }
}

export default App
