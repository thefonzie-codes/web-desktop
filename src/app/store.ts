import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/Apps/AppSlice'

export const store = configureStore({
  reducer: {
    apps: appReducer
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']