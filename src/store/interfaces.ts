import { SerializedError } from "@reduxjs/toolkit";

export type MetaStateData = {
    loading: string | null;
    currentRequestId: string | null;
    error: SerializedError | null;
}