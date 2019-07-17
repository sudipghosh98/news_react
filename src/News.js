import React,{Component} from 'react';
import App from './App';
import Test from './Test';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class News extends React.Component{
    render(){
        return (

            <Router>
             
                  <Route exact path="/app"  component={App}/>
                  <Route exact path="/test" component={Test} />
            </Router>


        );
    }
}
export default News


