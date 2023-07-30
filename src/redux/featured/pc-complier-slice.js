import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: {},
  enabledBuild: false
  
}

export const pcBuilderSlice = createSlice({
  name: 'pc-builder',
  initialState,
  reducers: {
    addComponent: (state,action) => {
     
      state.category[action.payload.category] = action.payload.product
      
      state.enabledBuild = state.category && !Object.entries(state.category).find(([k,v])=>k !== 'Others' && !v) && Object.keys(state.category).filter(i=>i !=='Others').length===6
    },
  },
})

export const { addComponent } = pcBuilderSlice.actions

export default pcBuilderSlice.reducer