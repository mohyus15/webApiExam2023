import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {
	BASE_URL,
	DASHBORT_URL,
	HOURS_URL,
} from './contanst.js';
const baseurl = fetchBaseQuery({
	baseUrl: BASE_URL,
});

const dashbortApi = createApi({
	reducerPath: 'Dashbors',
	baseQuery: baseurl,
	endpoints(builder) {
		return {
			getDashbort: builder.query({
				query: () => ({
					url: DASHBORT_URL,
					method: 'GET',
				}),
				providesTags: ['Dashbors'],
				keepUnusedDataFor: 5,
			}),
			createDashbort: builder.mutation({
				query: data => {
					return {
						url: `${DASHBORT_URL}`,
						method: 'POST',
						body: data,
					};
				},
			}),
			createHours: builder.mutation({
				query: data => {
					return {
						url: `${HOURS_URL}`,
						method: 'POST',
						body: data,
					};
				},
			}),
			deleteDashDeparment: builder.mutation({
				query: id => ({
					url: `${DASHBORT_URL}/${id}`,
					method: 'DELETE',
				}),
				keepUnusedDataFor: 5,
			}),
		};
	},
});
export let {
	useGetDashbortQuery,
	useCreateDashbortMutation,
	useDeleteDashDeparmentMutation,
	useCreateHoursMutation,
} = dashbortApi;

export { dashbortApi };
