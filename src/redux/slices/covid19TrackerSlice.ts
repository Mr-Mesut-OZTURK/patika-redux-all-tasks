import { createSlice } from '@reduxjs/toolkit'

export interface Covid19TrackerState {
    covid19Country: number
}

const initialState: Covid19TrackerState = {
    covid19Country: 0
}

export const covid19TrackerSlice = createSlice({
    name: 'covid19Tracker',
    initialState,
    reducers: {
        setCovid19Country: (state, action) => {
            state.covid19Country = action.payload
        }
    }
})


export const { setCovid19Country } = covid19TrackerSlice.actions

export default covid19TrackerSlice.reducer