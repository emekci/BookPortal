import React, {Component} from "react";
import {Switch,Route, Redirect, BrowserRouter, Link} from 'react-router-dom';
class Links extends React.Component{
    render(){
        return(

            <div>
        <Link to="/links"></Link>
                <ul>
        <li><Link to="/word"> Word </Link> </li>
        <li><Link to="/searchbooks"> Search Books </Link> </li>
        </ul>
        </div>
)
    }
}
export default Links;