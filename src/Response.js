import React from 'react';

const Response = (props) => (
  <div className='col-lg-4'> 
    <h5 className='text-center'> Server Response</h5> 
    <small> This is displayed as an array of response objects for each request you send </small> 
    <pre> {JSON.stringify(props.responseToDisplay, null, "\t") } </pre>
  </div>
)


export default Response;
