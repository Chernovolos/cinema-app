import { createSlice } from '@reduxjs/toolkit';
import { sendFeedback } from "../actions/formActions.js";

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: {
        response: null,
        status: 'idle',
        error: null,
        preloader: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendFeedback.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.preloader = true;
            })
            .addCase(sendFeedback.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.response = action.payload;
                state.preloader = false;
            })
            .addCase(sendFeedback.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || "Failed to send feedback";
            });
    },
});

export default feedbackSlice.reducer;