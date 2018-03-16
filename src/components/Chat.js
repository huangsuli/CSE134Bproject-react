import React from 'react'
import '../styles/CSS/styles.css';
import '../styles/CSS/chat_styles.css';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const ParentComponent = props => (
   <div id="chatbox"> 
    {props.children}
  </div>   
);

const ChildComponent = props => <p id="\doctor"> {props.name}: {props.value} </p>

 class Chat extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      numChildren: 0,
      chat:[],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //console.log(this.state.value);
    var arrayvar = this.state.chat.slice()
    arrayvar.push(this.state.value)
    this.setState({
      numChildren: this.state.numChildren + 1,
      chat: arrayvar,
      value: ''
    });
    event.preventDefault();
  }
  
  render() {
    const children = [];

    
    let name = null;
    let rate_url = null;
    if(this.props.isDoctor == true) {
      name = "Doctor";
      rate_url = "/doctor_rate";
    }
    else {
      name = "Patient";
      rate_url = "patient_rate";
    }
    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} name={name} value={this.state.chat[i]}/>);
    }
    return ( 
     <div id="chat_body">

      <h2 className="article_title_center">Chat Room</h2>

      <div id="wrapper">
          <div id="chat_menu">
            <p className="welcome roboto" id="welcome_message">Welcome, {name}</p>
            <p className="logout roboto"><Link id="exit" to={rate_url}>Exit Chat</Link></p>
            
          </div>
          <ParentComponent>
            {children}
          </ParentComponent>   
          <form name="message" id="input_form">
          <input type="text" value={this.state.value} onChange={this.handleChange} name="usermsg" id="usermsg" size="63"/>
          <input name="submitmsg" type="submit"  id="submitmsg" value="Submit" onClick={this.handleSubmit} />
          </form>    
      </div>
  </div>
)
}
}


export default Chat
