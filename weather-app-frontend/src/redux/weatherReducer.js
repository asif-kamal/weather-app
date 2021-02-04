import { SET_WEATHER } from './actionCreator';

const initialState = {

        weeklyForecast: [],
        dailyForecast: [],
    
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_WEATHER": 
            return {...state, weeklyForecast: action.payload.data} 
        default: 
            return {...state}
    }

}
