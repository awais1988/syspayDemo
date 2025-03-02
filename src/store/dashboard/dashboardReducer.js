import { createSlice } from "@reduxjs/toolkit";
import { getChartsData, getSalesData } from "./dashboardActions";

const initialState = {
  salesData: null,
  chartsData: null,
  loading: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getSalesData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSalesData.fulfilled, (state, action) => {
        state.salesData = action.payload;
        state.loading = false;
      })

      .addCase(getChartsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChartsData.fulfilled, (state, action) => {
        state.chartsData = action.payload;
        state.loading = false;
      });
  },
});

export default dashboardSlice.reducer;
