import { SerializedError } from "@reduxjs/toolkit";

export type MetaStateData = {
  isLoading: boolean;
  error?: SerializedError | string;
};
