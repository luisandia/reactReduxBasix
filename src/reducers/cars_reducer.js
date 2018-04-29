export default function(state = {}, action) {
  console.log(action)


  switch (action.type) {
    case 'SEARCH_CARS':
      return {
        ...state, list: action.payload, color: false,detail:[]
      }
    case 'CAR_DETAIL':
      return {
        ...state, detail: action.payload, color: true
      }
      case 'CLEAR_DETAIL':
      return{
        ...state, detail: action.payload
      }
    default:
      return state;
  }
}