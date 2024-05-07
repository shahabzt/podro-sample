import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface VerifyStateProps {
    activeStep: number;
    phoneNumber: string;
}

const initialState: VerifyStateProps = {
    activeStep:0,
    phoneNumber:""
}

export const verifySlice = createSlice({
    name: "verifySlice",
    initialState,
    reducers: {
     setPhoneNumber:(state, action: PayloadAction<VerifyStateProps>) => {
        return {
          ...state,
          activeStep :action.payload.activeStep,
          phoneNumber: action.payload.phoneNumber
        };
      },
    },
  });

  export const { setPhoneNumber } = verifySlice.actions;

export default verifySlice.reducer;