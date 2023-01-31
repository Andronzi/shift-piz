import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../constants/requestUrl";

export const getPizzas = createAsyncThunk(
    "getPizzas",
    async (classifications: string, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          `${url}?classifications=${classifications}`,
        );
        return response.data;
      } catch (err) {
        return rejectWithValue(err);
      }
    },
);