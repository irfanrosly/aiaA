import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface HomeState {
  data: Array<string | number>;
}

const initialState: HomeState = {
  data: ['Test data'],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Array<string | number>>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = homeSlice.actions;

export default homeSlice.reducer;
