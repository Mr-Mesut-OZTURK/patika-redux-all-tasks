import { createSlice } from '@reduxjs/toolkit'

export interface MarkdownPreviewerState {
    text: string
}

const initialState: MarkdownPreviewerState = {
    text: ""
}

export const markdownPreviewerSlice = createSlice({
    name: 'markdownPreviewer',
    initialState,
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        }
    }
})


export const { setText } = markdownPreviewerSlice.actions

export default markdownPreviewerSlice.reducer