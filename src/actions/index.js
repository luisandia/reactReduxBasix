
const URL_ROOT = 'http://localhost:3004'
export function getCars(keywords){
    console.log(`Made request with ${keywords} key`)

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`,
    {method:'GET'}).then(response=>response.json())


    //action 
    //fech -> json server -> search -> return data -> to reducer
    // ->  
    return {
        type:'SEARCH_CARS',
        payload:request
    }
}

export function carDetail(id){

    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`,
    {method:'GET'}).then(response=>response.json())

    return {
        type:'CAR_DETAIL',
        payload: request
    }
}

export function clearDetail(){
    return {
        type:'CLEAR_DETAIL',
        payload: []
    }
}