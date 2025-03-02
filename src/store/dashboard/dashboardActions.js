import axiosInstance from "../../config/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../config/apiConfig";

export const getChartsData = createAsyncThunk(
  "dashboard/getChartsData",
  async () => {
    try {
      const response = await axiosInstance.get(endpoints.dashboards.getCharts);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const getSalesData = createAsyncThunk(
  "dashboard/getSalesData",
  async () => {
    try {
      const response = await axiosInstance.get(
        endpoints.dashboards.getSaleData
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
);
