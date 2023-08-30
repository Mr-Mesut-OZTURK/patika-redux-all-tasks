import { createSlice } from '@reduxjs/toolkit'


export interface WeatherState {
    weatherSelectedCity: string,
    selectedAreaWeatherState: {
        main:{
            temp : number,
            feels_like : number,
            temp_min : number,
            temp_max : number,
            pressure : number,
            humidity : number
        } | null,
        weather:[{
            main:string,
            description:string
        }] | null
    } | null,
}

const initialState: WeatherState = {
    weatherSelectedCity: "",
    selectedAreaWeatherState: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeatherSelectedCity: (state, action) => {
            state.weatherSelectedCity = action.payload
        },
        setSelectedAreaWeatherState: (state, action) => {
            state.selectedAreaWeatherState = action.payload
        }
    }
})


export const { setWeatherSelectedCity,setSelectedAreaWeatherState } = weatherSlice.actions

export default weatherSlice.reducer