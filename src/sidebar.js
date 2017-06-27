import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { viewWarnings, viewDirectory } from './mainActions'
// import { navigate } from './actions'

// menu, currentPage, navigate
export const Sidebar = ({}) => {

//   const _toWarning = () => {
//     navigate('WARNING_PAGE')
//   }

//   const _toDirectory = () => {
//     navigate('DIRECTORY_PAGE')
//   }

    return (
        <div>
            <h1>this is just a test</h1>
        </div>)

};

Sidebar.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    currentPage: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
};

export default connect(
    (state) => ({ menu: state.sensors, currentPage: state.currentPage }),
    (dispatch) => ({
        // navigate: (newpage) => navigate(newpage)(dispatch)
    })
)(Sidebar)
