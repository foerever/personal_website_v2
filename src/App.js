import React, { Component, PropTypes } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import Particles from 'react-particles-js';
import About from "./About.js"
import Landing from "./Landing.js"
import Projects from "./projects/Projects.js"
import "./App.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    render(){
      const options = {
        scrollBar: true,
        delay: 1000,
        navigation: true,
        verticalAlign: false,
        sectionPaddingTop: '0px',
        sectionPaddingBottom: '0px',
        arrowNavigation: true
        }
        return (
            <div>
                <SectionsContainer {...options}>
                    <Section><Landing/></Section>
                </SectionsContainer>
                <About/>
                <Projects/>
            </div>

        );
    };
 
}


export default App;