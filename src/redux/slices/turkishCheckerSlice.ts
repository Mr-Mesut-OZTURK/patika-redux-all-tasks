import { createSlice } from '@reduxjs/toolkit'

export interface TurkishCheckerState {
    value: number
}

const initialState: TurkishCheckerState = {
    value: 0
}

export const turkishCheckerSlice = createSlice({
    name: 'turkishChecker',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = turkishCheckerSlice.actions

export default turkishCheckerSlice.reducer