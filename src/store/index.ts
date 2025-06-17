import { configureStore } from '@reduxjs/toolkit';
import extraInfoReducer from './slices/extraInfoSlice';

export const store = configureStore({
    reducer: {
        extraInfo: extraInfoReducer,
    },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;