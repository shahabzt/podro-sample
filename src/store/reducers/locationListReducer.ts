import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilteredDataProps {
  ipAddress: string;
  country: string;
  region: string;
  city: string;
  latitude: string;
  Longitude: string;
}

const initialState: FilteredDataProps[] = [];

export const locationListSlice = createSlice({
  name: "locationListSlice",
  initialState,
  reducers: {
    setNewLocation: (state, action: PayloadAction<FilteredDataProps>) => {
      return [...state, action.payload];
    },
  },
});

export const { setNewLocation } = locationListSlice.actions;

export default locationListSlice.reducer;
