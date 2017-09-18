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

  // jsFriendlyJSONStringify (s) {
  //   return JSON.stringify(s).
  //       replace(/\u2028/g, '\\u2028').
  //       replace(/\u2029/g, '\\u2029');
  // }


  render(){

    return (
      <div>
        <div className='form-group col-md-3' >
          <div> 
            <form onSubmit={this.handleSubmit}> 
              <label htmlFor="exampleInputRequest">Configure the body for your request here </label>
              <textarea className="form-control requestText autoExpand" name= "body" value= {JSON.stringify(this.props.body, null, " ")} onChange= {this.props.updateBody} data-min-rows='3' rows="15" />
            {/*<ReactJson src={this.props.body} />*/}
              <button className='btn btn-warning'> Generate input fields</button> 
            </form> 
          </div> 
        </div>
      </div> 
    )
  }
}


export default RequestBody;

