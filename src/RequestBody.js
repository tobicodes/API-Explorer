import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import './RequestBody.css'

class RequestBody extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e){
    e.preventDefault()
  }


  render(){

    return (
      <div>
        <div className='form-group' >
          <div> 
            <form onSubmit={this.handleSubmit}> 
              <label htmlFor="exampleInputRequest">Configure the body for your request here </label>
              <textarea className="form-control requestText autoExpand" name= "body" value= {JSON.stringify(this.props.body, null, " ")} onChange= {this.props.updateBody} data-min-rows='3' rows="15" />
            </form> 
          </div> 
        </div>
      </div> 
    )
  }
}


export default RequestBody;

