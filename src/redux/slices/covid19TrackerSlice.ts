import { createSlice } from '@reduxjs/toolkit'

export interface Covid19TrackerState {
    value: number
}

const initialState: Covid19TrackerState = {
    value: 0
}

export const covid19TrackerSlice = createSlice({
    name: 'covid19Tracker',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = covid19TrackerSlice.actions

export default covid19TrackerSlice.reducer