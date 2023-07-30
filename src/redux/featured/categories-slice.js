import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addComponent: (state,action) => {
     
      state[action.payload.category] = action.payload.product

    },
  },
})

export const { addComponent } = categoriesSlice.actions

export default categoriesSlice.reducer