import React from 'react'

function TestComponent(props) {
    const {state, setState} = props;

    return (
      <div className='rating-comp' id = 'rating'>
        <ul>
          <li>
            <button onClick = {(e) => setState(e.target.value * 1)}>
                1
            </button >
          </li>
          <li>
            <button  onClick = {(e) => setState(e.target.value * 1)}>
               2
            </button>
          </li>
          <li>
            <button  onClick = {(e) => setState(e.target.value * 1)}>
               3
            </button>
          </li>
        </ul>
        <button>Sumbit</button>
      </div>
    )
  }


export default TestComponent;