import React, { Component, PropTypes } from 'react';
import "./App.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
                <div className="container-fluid footer">
                    <i className="fa fa-copyright" aria-hidden="true"></i> Sung Soo Cho 2017.  Built with React.
                </div>
        );
    };
 
}


export default Footer;