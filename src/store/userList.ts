import { createSlice } from "@reduxjs/toolkit";
import { user } from "../Type/user";

const initialState : user[] =[];

export const userList = createSlice({
    name: "user-list",
    initialState,
    reducers: {
        update: (state, action) => {
            state = action.payload
        },
    },
})

export const { update } = userList.actions;
export default userList.reducer;