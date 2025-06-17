import { createSlice } from '@reduxjs/toolkit';
import {RootState} from '../index'

const extraInfoSlice = createSlice({
    name: 'extraInfo',
    initialState: {
        showExtraInfo: false,
    },
    reducers: {
        toggle: state => {
            state.showExtraInfo = !state.showExtraInfo;
        },
    },
});
export const { toggle } = extraInfoSlice.actions;
export const selectShowExtraInfo = (state: RootState) => state.extraInfo.showExtraInfo;
export default extraInfoSlice.reducer