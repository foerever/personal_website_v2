import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Sidebar from './sidebar'
import Display from './display'

export const App = ({ currentPage }) => {

    return (
      <div>
        <Sidebar/>
        <Display/>   
    </div>
    )
};

App.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default connect(
    (state) => ({ currentPage: state.currentPage }),
    (dispatch) => ({ })
)(App)
