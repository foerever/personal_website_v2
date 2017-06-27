import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

export const DirectoryView = ({ sensors }) => {

    return (<div>
                <h1>Directory</h1>     
            </div>)
};

DirectoryView.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default connect(
    (state) => ({ }),
    (dispatch) => ({ })
)(DirectoryView)
