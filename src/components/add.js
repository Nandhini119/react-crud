import React from 'react';
import Home from './home.js';
import superagent from 'superagent';


 class add extends React.Component
 {
     constructor()
    {
        super();
        this.state = {data:[]};
    }

     addData(data)
     
     {
        
        superagent
        .post('http://eclipseche3.niit-mts.com:34104/data')
        .send(data)

        .end((err,res) => {
            if(err){
                console.log("error");
        }
        else
        {
            console.log("success");
        }

        });
        
    
     }
     render(){
         return(<Home add = {this.addData.bind(this)}>
         
         </Home>);
     }
 }
 export default add;