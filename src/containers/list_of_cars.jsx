import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class ListOfCars extends Component {

    listaOfCars = ({ list }) => {
        if (list) {
            return list.map((car) => {
                return (
                    <Link
                        key={car.id}
                        to={`/car/${car.id}`}
                        className="car_item">
                        <div className="left">
                            <img src={`/images/${car.image}`} />
                        </div>
                        <div className="right">
                            <h4>{car.model}</h4>
                            <h6>{car.brand}</h6>
                        </div>
                    </Link>)
            })
        }

    }
    render() {
        console.log("render list of cars ", this.props)
        return (
            <div>

                {this.listaOfCars(this.props.cars)}
            </div>
        )
    }
};


function mapStateToProps(state) {
    console.log("desde list_of_cars, ", state)
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps, null)(ListOfCars)