import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '1', title: 'Learning Redux toolkit', content: 'I love how Redux helps in managing states globally'},
    {id: '2', title: 'Learning Node', content: 'Node JS is my favorite runtime environment'},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload)
        }

    }
});

export const selectAllPosts = (state) => state.posts
export default postSlice.reducer