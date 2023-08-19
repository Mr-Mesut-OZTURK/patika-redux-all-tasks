import {  createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface MainState {
    notes:[
        {
            color: string,
            id:string,
            text:string
        }
    ]
}


const initialState: MainState = {
    notes: JSON.parse(sessionStorage.getItem("notes") || '[]') ?? [],
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNote:(state:MainState, action:{payload:{color:string, text:string}}) => {
            state.notes.push({
                id: nanoid(),
                // text:action.payload.text,
                ...action.payload,
            })

            sessionStorage.setItem("notes", JSON.stringify(state.notes))
        }
    }
})


export const selectCount = (state: RootState) => state.main.value
export const {addNote} = noteSlice.actions

export default noteSlice.reducer