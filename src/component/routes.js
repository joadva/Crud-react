 import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import  axios from 'axios'; 

//component
import Header from './Header';
import Naveegacion from './Navegacion';



export default class Router extends Component {

    render() {
        return (
            <div className="class-name">
                <BrowserRouter>
                <div className="container">
                    <div className="row justify-content-center">
                    <Header />
                    <Naveegacion/>       
                    </div>

                </div>
                
                </BrowserRouter>
            </div>
        );
    }
}