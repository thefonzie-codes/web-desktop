import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// type AppTypes = {
//   active: boolean,
// }

interface AppState {
    openApps: string[],
}

const initialState: AppState = {
    openApps: [],
};

export const AppSlice = createSlice({
    name: 'apps',
    initialState,
    reducers: {
        open: (state, action) => {
            const { openApps } = state;
            console.log(action.payload);
            openApps.push(action.payload);
            return;
        },
        close: (state, action) => {
            const appName = action.payload;
            const { openApps } = state;
            const index = openApps.indexOf(appName);
            if (index > -1) {
                openApps.splice(index, 1);
            }
            console.log(`Array is: ${openApps}`);
            return;
        },
        // minimize: (state, action) => {
        //   state.value += action.payload
        // },
    }
});

export const { open, close } = AppSlice.actions;

export const selectApps = (state: RootState) => state.apps.openApps;

export default AppSlice.reducer;