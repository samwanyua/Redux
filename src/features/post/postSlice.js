import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; // to generate random id. no need for uuid


const initialState = [
    {id: '1', title: 'Learning Redux toolkit', content: 'I love how Redux helps in managing states globally'},
    {id: '2', title: 'Learning Node', content: 'Node JS is my favorite runtime environment'},
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
        reducer(state, action){
            state.push(action.payload) 
        },
        prepare(title,content){
            return{
                payload: {
                    id: nanoid(),
                    title,
                    content
                }
            }
        }

    },

    }
});
export const selectAllPosts = (state) => state.posts
export const {postAdded } = postSlice.actions
export default postSlice.reducer