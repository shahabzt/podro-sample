import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface VerificationStateProps {
    activeStep: number;
    phoneNumber: string;
}

const initialState: VerificationStateProps = {
    activeStep:0,
    phoneNumber:""
}

export const verificationSlice = createSlice({
    name: "verificationSlice",
    initialState,
    reducers: {
     setPhoneNumber:(state, action: PayloadAction<VerificationStateProps>) => {
        return {
          ...state,
          activeStep :action.payload.activeStep,
          phoneNumber: action.payload.phoneNumber
        };
      },
      resetVerify : ()=>{
        return initialState
      }
    },
  });

  export const { setPhoneNumber, resetVerify } = verificationSlice.actions;

export default verificationSlice.reducer;