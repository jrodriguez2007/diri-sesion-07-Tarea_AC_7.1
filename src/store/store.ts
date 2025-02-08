import { configureStore } from '@reduxjs/toolkit'
import { foodSlice } from './food';

export const store = configureStore({
    reducer: {
      food: foodSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;