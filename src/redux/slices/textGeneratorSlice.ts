import { createSlice } from '@reduxjs/toolkit'


export interface TextGeneratorState {
    value: number
}

const initialState: TextGeneratorState = {
    value: 0
}

export const textGeneratorSlice = createSlice({
    name: 'textGenerator',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = textGeneratorSlice.actions

export default textGeneratorSlice.reducer