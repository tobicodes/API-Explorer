import React, { Component } from 'react';
import './Headers.css'

const Headers =(props) => (
  
  <div className='headers'> 
    <form className="form-inline">
      <h5> Headers</h5>
      <p> Add headers to your request as key-value pairs <span><input type='submit' className='btn btn-success' value='Set Headers'/>  </span>  </p> 
      

      <div className='headersInput form-group'> 
        <label htmlFor='key1'> Key1 </label>
        <input className= 'form-control' type='text' id = '1' name='key' onChange ={props.handleHeadersChange} value={props.headers[1].key} />
        <label htmlFor='value1'> Value1 </label>
        <input className= 'form-control' type='text' id = '1' name='value' onChange ={props.handleHeadersChange} value={props.headers[1].value} />
      </div> 

      <div className='form-group headersInput'> 
        <label htmlFor='key2'> Key2 </label>
        <input className= 'form-control'type='text' id = '2' name='key' onChange ={props.handleHeadersChange} value={props.headers[2].key} />
        <label htmlFor='value2'> Value2 </label>
        <input className= 'form-control'type='text' id = '2' name='value' onChange ={props.handleHeadersChange} value={props.headers[2].value} />
      </div>

      
    </form> 
  </div> 

)

export default Headers;

