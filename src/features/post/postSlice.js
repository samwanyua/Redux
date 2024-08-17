import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; // to generate random id. no need for uuid
import { sub } from "date-fns";

const initialState = [
    {id: '1', title: 'Learning Redux toolkit', content: 'I love how Redux helps in managing states globally', date:sub(new Date(), {minutes: 10}).toISOString() },
    {id: '2', title: 'Learning Node', content: 'Node JS is my favorite runtime environment', date:sub(new Date(), {minutes: 5}).toISOString()},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
        reducer(state, action){
            state.push(action.payload) 
        },
        prepare(title,content, userId){
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                }
            }
        }

    },

    }
});
export const selectAllPosts = (state) => state.posts
export const {postAdded } = postSlice.actions
export default postSlice.reducer