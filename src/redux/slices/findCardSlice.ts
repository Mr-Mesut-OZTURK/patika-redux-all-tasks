import { createSlice } from '@reduxjs/toolkit'


export interface FindCardState {
    value: number
}

const initialState: FindCardState = {
    value: 0
}

export const findCardSlice = createSlice({
    name: 'findCard',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = findCardSlice.actions

export default findCardSlice.reducer