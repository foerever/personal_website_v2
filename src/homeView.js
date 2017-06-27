import React, { PropTypes } from 'react'
import { connect } from 'react-redux'


export const HomeView = ({  }) => {

    return (<div>
                <h1>Testing Stuff</h1>  
            </div>)
};

HomeView.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default connect(
    (state) => ({ }),
    (dispatch) => ({ })
)(HomeView)
