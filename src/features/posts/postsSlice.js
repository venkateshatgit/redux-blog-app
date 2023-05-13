import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: '1', title: 'First Post', content: 'Hello!'},
    {id: '2', title: 'Second Post', content: 'More text'},
    {id: '3', title: 'Third Post', content: 'Third post text'},
    {id: '4', title: 'Fourth Post', content: 'Fourth post text'}
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdd(state, action){
            state.unshift(action.payload)
        },

        postUpdate(state, action){
            let newState = [...state]
            newState.map((post, index) => {
                if(post.id === action.payload.id){
                    state[index] = action.payload
                }
            })
        },

        postDelete(state, action){
            let newState = [...state]
            newState.map((post, index) => {
                if(post.id === action.payload.id){
                    state.splice(index, 1)
                }   
            })

        }
    }
})

export default postsSlice.reducer;
export const {
    postAdd, 
    postUpdate,
    postDelete
} = postsSlice.actions;

