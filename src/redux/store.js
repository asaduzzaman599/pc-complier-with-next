import { configureStore } from '@reduxjs/toolkit'
import pcBuilderReducer from './featured/pc-complier-slice'
import { api } from './api/api'

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
    [api.reducerPath]: api.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})