import { configureStore } from '@reduxjs/toolkit'

import mainSlice from './slices/mainSlice'
import noteSlice from './slices/noteSlice'

const store = configureStore({
  reducer: {
    main: mainSlice,
    note: noteSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store