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
    setImgUrl(state, action) {
      const { url, i } = action.payload;

      if (i === 0) {
        const dataHome = [...state.dataHome];
        dataHome.forEach((obj, i) => {
          obj.img_url = url[i];
        });
        state.dataHome = dataHome;
        return;
      }

      if (i === 1) {
        const dataWork = [...state.dataWork];
        dataWork.forEach((obj, i) => {
          obj.img_url = url[i];
        });
        state.dataWork = dataWork;
        return;
      }

      if (i === 2) {
        const dataCertificate = [...state.dataCertificate];
        dataCertificate.forEach((obj, i) => {
          obj.img_url = url[i];
        });
        state.dataCertificate = dataCertificate;
        return;
      }
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
