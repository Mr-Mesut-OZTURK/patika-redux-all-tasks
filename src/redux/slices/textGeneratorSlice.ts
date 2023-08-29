import { createSlice } from '@reduxjs/toolkit'


export interface TextGeneratorState {
    paragrahhsCount: number,
    isHtml:number,
    paragraphs:string,
}

const initialState: TextGeneratorState = {
    paragrahhsCount: 1,
    isHtml:0,
    paragraphs:""
}

export const textGeneratorSlice = createSlice({
    name: 'textGenerator',
    initialState,
    reducers: {
        setParagraphsCount: (state, action) => {
            state.paragrahhsCount = action.payload
        },
        setIsHtml: (state, action) => {
            state.isHtml = action.payload
        },
        setParagraphs:(state,actions)=>{
            state.paragraphs = actions.payload
        }
    }
})


export const { setParagraphsCount, setIsHtml, setParagraphs } = textGeneratorSlice.actions

export default textGeneratorSlice.reducer