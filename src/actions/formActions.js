import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendFeedback = createAsyncThunk(
    'feedback/sendFeedback',
    async (feedback, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        status: "OK",
                        data: {
                            name: feedback.name,
                            email: feedback.email,
                            message: feedback.message,
                            responseNumber: Math.floor(Math.random() * 100000),
                        },
                    });
                }, 3000);
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
