import React, { Component } from 'react';
import { connect } from 'react-redux'
import { carDetail,clearDetail } from '../actions'
import { bindActionCreators } from 'redux'


class Car extends Component {

  componentWillMount() {
    this.props.carDetail(this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.clearDetail();
  }


  renderDetail = ({ detail }) => {
    if (detail) {
      return detail.map((item) => {
        console.log()
        return (
          <div key={item.id} className="car_detail">
            <img src={`/images/${item.image}`} alt="image" />
            <div className="content">
              <h2>{item.model}</h2>
              <h4>{item.brand}</h4>
              <p>
                {item.description}
              </p>

            </div>

          </div>
        )

      })
    }

  }

  render() {
    console.log("desde car_container detail, ",this.props)
    return (
      <div>
        {this.renderDetail(this.props.car)}
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    car: state.cars
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ carDetail,clearDetail }, dispatch)
}





export default connect(mapStateToProps, mapDispatchToProps)(Car)