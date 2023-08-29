import { configureStore } from '@reduxjs/toolkit'

import mainSlice from './slices/mainSlice'
import noteSlice from './slices/noteSlice'
import billGatesSlice from './slices/billGatesSlice'
import covid19TrackerSlice from './slices/covid19TrackerSlice'
import findCardSlice from './slices/findCardSlice'
import markdownPreviewerSlice from './slices/markdownPreviewerSlice'
import textGeneratorSlice from './slices/textGeneratorSlice'
import turkishCheckerSlice from './slices/turkishCheckerSlice'
import typingSpeedSlice from './slices/typingSpeedSlice'
import weatherSlice from './slices/weatherSlice'

const store = configureStore({
  reducer: {
    billGates: billGatesSlice,
    covid19Tracker:covid19TrackerSlice,
    findCard:findCardSlice,
    main: mainSlice,
    markdownPreviewer:markdownPreviewerSlice,
    note: noteSlice,
    textGenerator: textGeneratorSlice,
    turkishChecker:turkishCheckerSlice,
    typingSpeed: typingSpeedSlice,
    weather:weatherSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store