import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "./interfaces";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isShow: false,
  } as ModalState,
  reducers: {
    changeShow(state, action: PayloadAction<boolean>) {
      state.isShow = action.payload;
    },
  },
});

export const { changeShow } = modalSlice.actions;
export default modalSlice.reducer;
