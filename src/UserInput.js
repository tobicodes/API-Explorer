import React, { Component } from 'react';
import axios from 'axios';
import './UserInput.css';
import RequestToDisplay from './RequestToDisplay';
import RequestBody from './RequestBody';
import Response from './Response';
import GeneratedInputFields from './GeneratedInputFields'

class UserInput extends Component {
  constructor(props){
    super(props);

    this.state = {

      'request': {
        'url': '',
        'httpMethod': 'GET',
        'headers': {
          'contentType': 'application/json'
        },
        'body': this.exampleRequestBody.body
      },

      'response': []
     
      
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.makeRequest = this.makeRequest.bind(this);

  }

// updates state with user's request info after developer 
//pastes into textbox

  handleChange(e){
    let state = Object.assign({}, this.state)
    state['request'][e.target.name] = e.target.value
    this.setState(state)
   
  }

  handleSubmit(e){
    e.preventDefault();
    this.makeRequest(this.state)
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
    
    if(request.httpMethod === 'GET'){
      axios.get(request.url)
      .then((response) => {
        this.setState({
          'response': {
            'statusCode': response.status,
            'responseHeaders': response.headers,
            'data': response.data
          }
        })
        
        console.log('ruby', this.state.response)
    })
      .catch((err)=> console.error(err));
  }

    if(request.httpMethod === 'POST'){

      axios.all([
        axios.post(request.url, data[0], 'headers': { Authorization: 'Bearer eawke!ddxaweaarglebargleaw,1'}),
        axios.post(request.url, data[1], 'headers': { Authorization: 'Bearer eawke!ddxaweaarglebargleaw,1'})
      ])
         // axios.post(request.url, [data[i],  'headers': { Authorization: 'Bearer eawke!ddxaweaarglebargleaw,1'}])
        .then(axios.spread(function(firstResponse, secondResponse){
          console.log('first', firstResponse);
          console.log('second', secondResponse)
          debugger;
        
          newResponse.push(firstResponse, secondResponse)
          
        }))
        .then((x) => {
          this.setState({
          'response': newResponse
          }
        )
        })

        .catch((err)=> console.error("asensio", err))
        
        
      }
      
      }



  render(){
     let configData = typeof this.state.request === 'string' ? JSON.parse(this.state.request) : this.state.request;
    return(
      <div className='userInputContainer'>
        <h4 className='requestMeta text-center'> Request meta details </h4>

        <form className='userInputForm text-center' onSubmit={this.handleSubmit}>
          <div className='form-group col-lg-4'>
            <label htmlFor="url">URL</label>
            <input className="form-control userInputText" type="text" name="url" value={this.state.request.url} onChange={this.handleChange} placeholder="Enter the target URL"/>
            <small className ="form-text"> Don't forget the 'http' or 'https' prefix :) </small>
          </div>
          <div className='form-group col-lg-4' >
            <label htmlFor="httpMethod">HTTP Method</label>
            <select className="form-control" name="httpMethod"value={this.state.request.httpMethod} onChange={this.handleChange}>
              <option>GET</option>
              <option>POST</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>
          <div className='form-group col-lg-4'>
            <label htmlFor="Content-Type">Content-Type</label>
            <p className="form-control-static userInputText" name="Content-Type" >{this.state.request.headers.contentType} </p>
           
            
          </div>
          </form>
          <h4 className='requestMeta text-center'> Request body details </h4>
          <div> 
            <RequestBody body={this.state.request.body} updateBody= {this.handleChange}/>
            <GeneratedInputFields requestObj = {configData} makeRequest = {this.makeRequest}/>
            <Response responseToDisplay = {this.state.response}/> 
          </div> 
      </div>
    )
  }
}


export default UserInput;

//     axios.all([
  //   axios.get('https://api.github.com/users/codeheaven-io');
  //   axios.get('https://api.github.com/users/codeheaven-io/repos')
  // ])
  // .then(axios.spread(function (userResponse, reposResponse) {
  //   //... but this callback will be executed only when both requests are complete.
  //   console.log('User', userResponse.data);
  //   console.log('Repositories', reposResponse.data);
  // }));

  // response: {
     // {
      //   'statusCode': '',
      //   'data': '',
      //   'responseHeaders': ''
      // }
      // componentWillReceiveProps(nextProps){
  //   // console.log("thot", nextProps)
    
  //   this.setState({'formInputs': nextProps.requestObj.body})
  //   debugger;
  // }

  // componentDidMount(){
  //   debugger;
  // }


