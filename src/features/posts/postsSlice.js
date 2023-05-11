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
    reducers: {}
})

export default postsSlice.reducer;

