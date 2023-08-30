import { createSlice } from "@reduxjs/toolkit";
// import { uid } from 'chart.js/helpers';
import { generate } from "random-words";
import { uid } from "uid";

export enum WordStatus {
  IDLE = "idle",
  CORRECT = "correct",
  WRONG = "wrong",
}

type KeyStrokeType = {
  correct: number;
  wrong: number;
  total: number;
};

export type GeneratedWordType = {
  word: string;
  status: WordStatus | string;
  id: string;
};
export interface TypingSpeedState {
  generatedWords: GeneratedWordType[];
  timer: number;
  currentWord: string;
  isGameStarted: boolean;
  keyStrokes: KeyStrokeType;
  typedWord: string;
}

const initialState: TypingSpeedState = {
  generatedWords: generate(375).map((word) => {
    return { word: word, status: "normal", id: uid(16) };
  }),
  timer: 60,
  isGameStarted: false,
  currentWord: "",
  keyStrokes: {
    correct: 0,
    wrong: 0,
    total: 0,
  },
  typedWord: "",
};

export const typingSpeedSlice = createSlice({
  name: "typingSpeed",
  initialState,
  reducers: {},
});

// export const {} = typingSpeedSlice.actions;

export default typingSpeedSlice.reducer;
