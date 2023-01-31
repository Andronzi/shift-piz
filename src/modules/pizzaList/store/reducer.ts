import { createSlice } from "@reduxjs/toolkit";
import { changeStateMeta } from "@src/helpers/changeStateMeta";
import { getPizzas } from "../api/getPizzas";
import { PizzasState } from "./interfaces";

const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        loading: null,
        currentRequestId: null,
        error: null
    } as PizzasState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPizzas.pending, (state: PizzasState, action) => {
            changeStateMeta({
                loading: "pending", 
                currentRequestId: action.meta.requestId, 
                error: null }, 
                state
            );
        })
        .addCase(getPizzas.fulfilled, (state: PizzasState, action) => {
            const { requestId } = action.meta;
            if (state.currentRequestId === requestId) {
                changeStateMeta({
                    loading: "fulfilled", 
                    currentRequestId: null, 
                    error: null }, 
                    state
                );
                state.pizzas = action.payload;
            }
        })
        .addCase(getPizzas.rejected, (state: PizzasState, action) => {
            const { requestId } = action.meta;
            if (state.currentRequestId === requestId) {
                changeStateMeta({
                    loading: "rejected", 
                    currentRequestId: null, 
                    error: action.error }, 
                    state
                );
            }
        })
    }
});

export default pizzaSlice.reducer;