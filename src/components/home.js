import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};

 class home extends React.Component
{
    render(){
        return(<MuiThemeProvider>
        <div>
         <TextField hintText="Enter your email" floatingLabelText="Username*"/><br />
         <TextField hintText="Password" floatingLabelText="Password*" type="password"/><br/>
       <Link to = '/add'> <RaisedButton label="Add" primary={true} style={style} /></Link>
        <Link to = '/update'><RaisedButton label="Update" primary={true} style={style} /></Link>
        <Link to = '/view'><RaisedButton label="View" primary={true} style={style}/></Link>
        </div>
        </MuiThemeProvider>);
    }
}
export default home;