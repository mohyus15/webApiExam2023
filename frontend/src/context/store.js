import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { dashbortApi } from './dashbortApi.js';
import authSliceReducer from './authSlices.js';
import { userSlice } from './usersSlice.js';
export const store = configureStore({
	reducer: {
		[dashbortApi.reducerPath]: dashbortApi.reducer,
		[userSlice.reducerPath]: userSlice.reducer,
		auth: authSliceReducer,
	},
	middleware: getDefaultMiddeleware =>
		getDefaultMiddeleware()
			.concat(dashbortApi.middleware)
			.concat(userSlice.middleware),

	devTools: true,
});
setupListeners(store.dispatch);
