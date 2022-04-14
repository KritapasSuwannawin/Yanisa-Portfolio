import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: { dataHome: [], dataWork: [], dataCertificate: [] },
  reducers: {
    initializeState(state, action) {
      state.dataHome = action.payload[0];
      state.dataWork = action.payload[1];
      state.dataCertificate = action.payload[2];
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
