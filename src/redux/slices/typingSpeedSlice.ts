import { createSlice } from '@reduxjs/toolkit'


export interface TypingSpeedState {
    value: number
}

const initialState: TypingSpeedState = {
    value: 0
}

export const typingSpeedSlice = createSlice({
    name: 'typingSpeed',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = typingSpeedSlice.actions

export default typingSpeedSlice.reducer