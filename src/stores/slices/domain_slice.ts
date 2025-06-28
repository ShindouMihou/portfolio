import {createSlice, PayloadAction} from "@reduxjs/toolkit";
export const domainSlice = createSlice({
    name: 'domain',
    initialState: { value: "https://storymkr.co" },
    reducers: {
        setDomain: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})
export const { setDomain } = domainSlice.actions
export default domainSlice.reducer