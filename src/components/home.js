import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import { Field, form } from 'redux-form';
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
        <form>
        <div>
         <Field hintText="Id" type="text" floatingLabelText="Enter Id*" value={this.state.Id} onChange = {this.getid.bind(this)}/><br />
         <Field hintText="name" type="text" floatingLabelText="name*" value = {this.state.name} onchange = {this.getname.bind(this)}/><br/>
       <Link to = '/add'> <RaisedButton label="Add" onclick = {this.passDataToAdd.bind(this)} primary={true} style={style} /></Link>
        <Link to = '/update'><RaisedButton label="Update" primary={true} style={style} /></Link>
        <Link to = '/view'><RaisedButton label="View" primary={true} style={style}/></Link>
        </div>
        </form>
        </MuiThemeProvider>);
    }
}
export default home;