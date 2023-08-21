import {  createSlice, nanoid } from '@reduxjs/toolkit'

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


export const {addNote} = noteSlice.actions

export default noteSlice.reducer