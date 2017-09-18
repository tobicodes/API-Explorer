import React from 'react';
import './RequestToDisplay.css'

const RequestToDisplay = (props) => {
  return(
    <div className =' col-lg-4 RequestToDisplayContainer'>
      <h5> This is the request you have generated </h5>
      <div className='requestDisplay'>
        <pre> {JSON.stringify(props.requestObj, null, " ")}</pre> 
      </div>
    </div> 
  )
}


export default RequestToDisplay;

