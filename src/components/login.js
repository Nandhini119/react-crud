import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

 const style = {
          height: '300px',
          width: '70%',
          margin: '50',
          textAlign: 'center',
          float:'center',
          display: 'inline-block',
          backgroundColor: 'cyan',
         padding:'20px'
    };
  

class login extends React.Component
{
    render(){
        return(<MuiThemeProvider><Paper style={style} zDepth={4}>
        <div>
           <TextField hintText="Enter your email" floatingLabelText="Username*"/><br />
         <TextField hintText="Password" floatingLabelText="Password*" type="password"/><br/>
          <Link to="/home"><RaisedButton label="Login" secondary={true} /></Link>
            
        </div>
        </Paper></MuiThemeProvider>
        );
    }
}

export default login;