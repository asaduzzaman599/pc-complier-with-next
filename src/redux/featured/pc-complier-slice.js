import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
}

export const pcBuilderSlice = createSlice({
  name: 'pc-builder',
  initialState,
  reducers: {
    addComponent: (state,action) => {
     
      state[action.payload.category] = action.payload.product
    },
  },
})

export const { addComponent } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer