import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from './featured/pc-complier-slice'

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer
  },
})