import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface MainState {
    value: number
}

const initialState: MainState = {
    value: 0
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {}
})


export const selectCount = (state: RootState) => state.main.value

export default mainSlice.reducer