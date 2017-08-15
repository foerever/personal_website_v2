import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import "./App.css"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (

            <div className="about_container">

                <div className="row">
                    <div className="col-xs-4">
                        <img src="http://i.imgur.com/2k2QxRe.jpg" width="50%" height="50%"/>   
                    </div>

                    <div className="col-xs-7">
                        <h1>About Me </h1>
                        <p>
                            I'm currently pursuing a BS in computer science at Rice University. 
                            I love coding and am always looking for ways to share this passion with others. 
                            For me, this means working to build Rice's CS community through my role as Treasurer of Rice CS Club.
                            For example, I co-founded Rice's first Learnathon, an amalgam of hackathons and workshops aimed at giving students opportunities to develop new, practical skill sets.                            
                            As a hackathon enthusiast, it also means helping organize HackRice and actively working to build a "hacker" culture here.
                        </p>

                        <p>
                            I'm also passionate about entrepreneurship. 
                            In my first semester at Rice, my partner and I won $11,000 in funding for our projects through the LILIE New Entrepeneurs Grant and the Rice Undergraduate Elevator Pitch Competition.
                            I've also been involved in a variety of entrepreneurial events in Houston such as Houston 3 Day Start Up.
                            One of my goals during my time at Rice is to bring together the CS and Entrepreneurship communities.
                        </p>

                        <p>
                            I was born in small city in South Korea called Pohang. 
                            However, I was raised in Houston, TX where I've pursued a variety of interests ranging from gardening to breakdancing. 
                            My greatest interest, however, has always been in creating.
                            I grew up playing with legos, started working with VEX robots in the 5th grade, moved on to creating CAD designs and circuits in high school, and eventually fell in love with coding during an internship working with NASA's ICESat1 satellite.
                        </p> 
                    </div>
                </div>
            </div>
        );
    };
 
}


export default About;