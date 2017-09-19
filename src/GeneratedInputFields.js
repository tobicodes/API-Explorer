import React, { Component } from 'react';
import './GeneratedInputFields.css'

class GeneratedInputFields extends Component {
  constructor(props){
    super(props)

    this.state = {
      'formInputs': this.props.requestObj.body, 
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){

    let newFormInputs = this.state.formInputs.slice();
    newFormInputs[e.target.id].value = e.target.value;
    this.setState({formInputs: newFormInputs})

  }

   handleSubmit(e){
    e.preventDefault();
    let dataObjects = [];

    for (var i=0; i< this.state.formInputs.length; i++){
      dataObjects.push({
        [this.state.formInputs[i].name] : this.state.formInputs[i].value
      })
      
    }
    this.props.makeRequest(this.props.requestObj, dataObjects)

  }

  render(){
    let inputsToRender = this.props.requestObj.body.length > 0 ?
      this.props.requestObj.body.map((input, i) => (
        <div key={i}>
          <label className='inputLabels'htmlFor={input.name}> {input.name}</label> 
          <input 
            name={input.name}
            type={input.type}
            value= {this.state.formInputs[i].value}
            className="form-control inputFields"
            placeholder = {input.placeholder || `Enter a valid ${input.type} here`}
            max = {input.max}
            min = {input.min}
            required = {input.required}
            pattern ={input.pattern}
            onChange = {this.handleChange}
            id={i}
          />
        </div> 
      ))
      : null

    return(
      <div> 
        <form className='form-group' onSubmit={this.handleSubmit}>
          <h5> Enter your data for your request</h5> 
          {inputsToRender}
          <input type='submit' value= 'Send request'className='btn btn-warning'/>
        </form>
      </div>
    )
  }
}


export default GeneratedInputFields;
