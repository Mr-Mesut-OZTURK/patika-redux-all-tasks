import { configureStore } from '@reduxjs/toolkit'

import mainSlice from './slices/mainSlice'
import noteSlice from './slices/noteSlice'
import billGatesSlice from './slices/billGatesSlice'

const store = configureStore({
  reducer: {
    main: mainSlice,
    note: noteSlice,
    billGates: billGatesSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store