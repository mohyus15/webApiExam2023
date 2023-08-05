import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { productstApi } from '../context/productsApi.js';
import authSliceReducer from '../context/authSlices.js';
import { userSlice } from './usersSlice.js';
export const store = configureStore({
	reducer: {
		[productstApi.reducerPath]: productstApi.reducer,
		[userSlice.reducerPath]: userSlice.reducer,
		//[orderSlice.reducerPath]: userSlice.reducer,
		auth: authSliceReducer,
	},
	middleware: getDefaultMiddeleware =>
		getDefaultMiddeleware()
			.concat(productstApi.middleware)
			.concat(userSlice.middleware),

	devTools: true,
});
setupListeners(store.dispatch);
