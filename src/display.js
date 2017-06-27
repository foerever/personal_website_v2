import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import HomeView from './homeView'
import DirectoryView from './directoryView'
// import DeviceDetailView from '../devicedetails/devicedetails'


export const Display = ({ currentPage }) => {

    switch(currentPage) {
        case 'Home_PAGE':
            return <HomeView/>;
        case 'DIRECTORY_PAGE':
            return <DirectoryView/>;
        default:
            return <HomeView/>;
    }
};

Display.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default connect(
    (state) => ({ currentPage: state.currentPage }),
    (dispatch) => ({ })
)(Display)