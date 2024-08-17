import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {id: "0", name: 'Dude Lebowski'},
    {id: "1", name: 'Mark Lebowski'},
    {id: "2", name: 'John Greg'},
]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.users
export default userSlice.reducer