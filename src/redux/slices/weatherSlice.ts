import { createSlice } from '@reduxjs/toolkit'


export interface WeatherState {
    value: number
}

const initialState: WeatherState = {
    value: 0
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = weatherSlice.actions

export default weatherSlice.reducer