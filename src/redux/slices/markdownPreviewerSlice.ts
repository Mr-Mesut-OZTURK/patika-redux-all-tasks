import { createSlice } from '@reduxjs/toolkit'

export interface MarkdownPreviewerState {
    value: number
}

const initialState: MarkdownPreviewerState = {
    value: 0
}

export const markdownPreviewerSlice = createSlice({
    name: 'markdownPreviewer',
    initialState,
    reducers: {
        setValue: (state, action) => {
            console.log({state, action})
        }
    }
})


export const { setValue} = markdownPreviewerSlice.actions

export default markdownPreviewerSlice.reducer