import React from 'react';
import './Response.css'

const Response = (props) => (
  <div> 
    <h4 className='serverHeader text-center'> Server Response</h4> 
    <small className='text-center'> This is displayed as an array of response objects for each request you send </small> 
    <pre> {JSON.stringify(props.responseToDisplay, null, "\t") } </pre>
  </div>
)

export default Response;
