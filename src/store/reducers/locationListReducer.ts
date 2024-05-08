import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ResponseData } from "../../services/getLocationInfo/getLocationInfo.types";

const initialState: ResponseData[] = [];

export const locationListSlice = createSlice({
  name: "locationListSlice",
  initialState,
  reducers: {
    setNewLocation: (state, action: PayloadAction<ResponseData>) => {
      return [...state, action.payload];
    },
  },
});

export const { setNewLocation } = locationListSlice.actions;

export default locationListSlice.reducer;
