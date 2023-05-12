import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'


import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";


//combining all reducers here
const reducers = combineReducers({
    posts: postsSlice,         
});


// configuring persist
const persistConfig = {
    key: 'root',
    storage
};


// building persistreducer on top of combined reducers
const persistedReducer = persistReducer(persistConfig, reducers);


// configuring stores
export default configureStore({
    reducer: persistedReducer,
})
