import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const style = {
  margin: 12,
};


 class home extends React.Component
{
    constructor()
    {
        super();
        this.state = {Id:"",name:""};
    }
    getid(e)
    {
        console.log(e.target.value);
        this.setState = e.target.value;
    }
    getname(e)
    {
        this.setState = e.target.value;
    }
    passDataToAdd(event)
    {
        event.preventDefault();
      this.props.addData({ Id: this.state.Id,
        name:this.state.name
      });
    }
    render(){
        return(<MuiThemeProvider>
        
        <div>
        <Paper>
         <TextField hintText="Id" floatingLabelText="Enter Id*" id="Id" onChange = {this.getid.bind(this,Id)}/><br />
         <TextField hintText="name"  floatingLabelText="name*" id="name" onchange = {this.getname.bind(this,name)}/><br/>
       <Link to = '/add'> <RaisedButton label="Add" onclick = {this.passDataToAdd.bind(this)} primary={true} style={style} /></Link>
        <Link to = '/update'><RaisedButton label="Update" primary={true} style={style} /></Link>
        <Link to = '/view'><RaisedButton label="View" primary={true} style={style}/></Link>
        </Paper>
        </div>
        
        </MuiThemeProvider>);
    }
}
export default home;