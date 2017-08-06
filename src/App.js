import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Particles from 'react-particles-js';
import About from "./About.js"
import Landing from "./Landing.js"
import Projects from "./Projects.js"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <Landing/>
                <About/>
                <Projects/>
            </div>
        );
    };
 
}


export default App;