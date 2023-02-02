import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../constants/requestUrl";
import { IClassificationType } from "../store/interfaces";

export const getPizzas = createAsyncThunk(
  "getPizzas",
  async (classifications: keyof IClassificationType, thunkAPI?) => {
    try {
      const response = await axios.get(
        `${url}?classifications=${classifications}`,
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
