const initialState = {

    weeklyForecast: [],

}


export const weatherReducer = (state = initialState, action) => {
switch(action.type){
    case "SET_WEATHER": 
        return {...state, weeklyForecast: action.payload.dailyData} 
    default: 
        return {...state}
}

}

