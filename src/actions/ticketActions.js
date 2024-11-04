import { createAsyncThunk } from "@reduxjs/toolkit";
export const buyTicket = createAsyncThunk(
    'ticket/buyTicket',
    async (ticket, { rejectWithValue }) => {
        try {
            const response = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        status: "OK",
                        data: {
                            film: ticket.film,
                            places: ticket.places,
                            firstName: ticket.firstName,
                            lastName: ticket.lastName,
                            email: ticket.email,
                            orderNumber: Math.floor(Math.random() * 100000000),
                        },
                    });
                }, 5000);
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);







