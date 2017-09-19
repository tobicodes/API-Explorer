import React, { Component } from 'react';
import axios from 'axios';
import './UserInput.css';
import RequestToDisplay from './RequestToDisplay';
import RequestBody from './RequestBody';
import Response from './Response';
import GeneratedInputFields from './GeneratedInputFields'
import Headers from './Headers';

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {

      'request': {
        'url': '',
        'httpMethod': 'GET',
        'headers': [
          {
            key: 'contentType',
            value: 'application/json'
          },
          {
            key: '',
            value:'' 
          }, 
          {
            key: '',
            value:'' 
          }
        ],
          
        'body': this.exampleRequestBody.body
      },

      'response': []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHeadersChange = this.handleHeadersChange.bind(this)
    this.handleHeadersSubmit = this.handleHeadersSubmit.bind(this)

    this.makeRequest = this.makeRequest.bind(this);

    this.performGetRequest = this.performGetRequest.bind(this)
    this.performPostRequest = this.performPostRequest.bind(this)
    this.performDeleteRequest = this.performDeleteRequest.bind(this)
    this.performPatchRequest = this.performPatchRequest.bind(this)

  }

// updates state with user's request info after developer 
//  pastes into textbox

  handleChange(e){
    let state = Object.assign({}, this.state)
    state['request'][e.target.name] = e.target.value
    if(typeof this.state.request.body === 'string' && this.state.request.body.length > 1){
      state['request'].body = JSON.parse(this.state.request.body)
    }

    this.setState(state)
  }


  handleSubmit(e){
    e.preventDefault();
    this.makeRequest(this.state)
  }

  handleHeadersChange(e){
    let state = Object.assign({}, this.state)
    state['request']['headers'][e.target.id][e.target.name] = e.target.value
    this.setState(state)
  }

  handleHeadersSubmit(e){
    e.preventDefault();
  }


 exampleRequestBody = {
    'httpMethod': 'POST',
    'body': [
      {
        name: 'email',
        type: 'email',
        max: 24,
        min: 3
      },
      {
        name: 'full-name',
        type: 'text',
        placeholder: 'John Doe',
        required: true
      }
    ]
  } 

  
  componentWillMount(){
    let newRequest = {...this.state.request};

    for(var requestBody of newRequest.body){
        requestBody['value'] = ''
    }

    this.setState({request: newRequest})
  }

// send request using user's inputs 

  makeRequest(request, data){
    
    let newResponse = this.state.response.slice()

    // generates a headers object where each key is the user-provided key, and the value is the user-provided value
    // e.g. 'Authorization' could be the key and 'Bearer eawke!ddxaweaarglebargleaw,1' is its corresponding value 
    let headers = {}
      for (var i=0; i< this.state.request.headers.length; i++){
        if(this.state.request.headers[i].key.length > 0 && this.state.request.headers[i].value.length > 0){
          headers[this.state.request.headers[i].key] = this.state.request.headers[i].value
        }
      }

    if(request.httpMethod === 'GET'){
      this.performGetRequest(request,data, headers)
  }

    if(request.httpMethod === 'POST'){
      this.performPostRequest(request,data,headers)
      }

    if(request.httpMethod === 'DELETE'){
      this.performDeleteRequest(request, data, headers)
    }

    if(request.httpMethod === 'PATCH'){
      this.performPatchRequest(request, data, headers)
    }
}

  performGetRequest(request,data,headers){
    let result = []
    axios.get(request.url, 'headers': headers)
      .then((response) => {
        this.setState({
          'response': {
            'statusCode': response.status,
            'responseHeaders': response.headers,
            'data': response.data
          }
        })
    })
      .catch((err)=> console.error(err))
  }

  performPostRequest(request,data,headers){
    let responseArr = []

    let promiseArray = data.map(body => axios.post(request.url, body, 'headers': headers)); 
    axios.all(promiseArray)
    .then(function(results) {
      results.map(response => responseArr.push(response));
     
    })
    .then(() =>{
      this.setState({
        'response': responseArr
      })
    })
      .catch((err)=> console.error("Could not complete POST request ", err))
    }

  performPatchRequest(request, data, headers){
    let response = [];

     axios.patch(request.url, data, 'headers': headers)
    .then((result)=> {
      response.push(result)
    })
    .then(() =>{
      this.setState({
        response: response
      })
    })
    .catch((err) => console.error("Could not complete PATCH request", err))
  }

  performDeleteRequest(request, data, headers){
    let response = [];
      axios.delete(request.url, 'headers': headers)
      .then((result)=> {
        response.push(result)
      })
      .then(() =>{
        this.setState({
          response: response
        })
      })
      .catch((err)=> console.error("Could not complete DELETE request ", err))

  }



  render(){
    let configData = this.state.request;
    return(
      <div className='userInputContainer'>
        <h4 className='requestMeta text-center'> Request meta details </h4>
        <div className='row'> 
          <form className='userInputForm text-center' onSubmit={this.handleSubmit}>
            <div className='form-group col-lg-3'>
              <label htmlFor="url">URL</label>
              <input className="form-control userInputText" type="text" name="url" value={this.state.request.url} onChange={this.handleChange} placeholder="Enter the target URL"/>
              <small className ="form-text"> Don't forget the 'http' or 'https' prefix :) </small>
            </div>
            <div className='form-group col-lg-2' >
              <label htmlFor="httpMethod">HTTP Method</label>
              <select className="form-control" name="httpMethod"value={this.state.request.httpMethod} onChange={this.handleChange}>
                <option>GET</option>
                <option>POST</option>
                <option>PATCH</option>
                <option>DELETE</option>
              </select>
            </div>
            </form>
            <div className='col-lg-7'> 
              <Headers handleHeadersChange ={this.handleHeadersChange} headers={this.state.request.headers} />
            </div>
           </div>
          
          <div className='row'>
            <div className='col-lg-6'> 
              <h4 className='requestMeta text-center'> Request body details </h4>
              <div className='col-lg-6'> 
                <RequestBody body={this.state.request.body} updateBody= {this.handleChange}/>
              </div> 
              <div className='col-lg-6'> 
                <GeneratedInputFields requestObj = {configData} makeRequest = {this.makeRequest}/>
              </div>
            </div> 
            <div className='col-lg-6'> 
              <Response responseToDisplay = {this.state.response}/> 
            </div>
          </div> 
      </div>
    )
  }
}

export default UserInput;
