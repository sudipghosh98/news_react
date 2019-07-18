import React,{Component} from 'react';
import App from './App';
import Test from './Test';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { get } from 'http';

class News extends React.Component{
    constructor(props){
        super(props);
       
   
    }
    render(){
        return (

            <Router>
             
                  <Route exact path="/"  component={App}/>
                  <Route exact path="/test" component={Test} />
            </Router>


        );
    }
}
export default News


