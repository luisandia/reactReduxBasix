import {combineReducers} from 'redux'

import carDetail from './car_detail.js'
import cars from './cars_reducer'

const rootReducer = combineReducers({
    cars
})

export default rootReducer;