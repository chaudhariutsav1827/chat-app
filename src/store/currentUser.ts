import { createSlice } from "@reduxjs/toolkit";
import { user } from "../Type/user";

const initialState : user | undefined = undefined;

export const currentUser = createSlice({
    name: "current-user",
    initialState,
    reducers: {
        update: (state, action) => {
            state = action.payload
        },
    },
})

export const { update } = currentUser.actions;
export default currentUser.reducer;