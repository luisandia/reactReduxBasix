import React, { Component } from 'react';

import { connect } from 'react-redux'
import { getCars } from '../actions'
import { bindActionCreators } from 'redux'

class Search extends Component {

    constructor(...props) {
        super(...props)

        this.state = {
            keyword: ''
        }
    }
    handleChange = (event) => {

        this.setState({
            keyword: event.target.value
        })
    }
    searchCars = (event) => {
        event.preventDefault();
        // console.log(this.state)

        this.props.getCars(this.state.keyword);
    }
    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                    <input type="text" value={this.state.keyword}
                        onChange={this.handleChange} />
                </form>

            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ getCars }, dispatch)

}

export default connect(null, mapDispatchToProps)(Search)