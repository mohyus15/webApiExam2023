import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL, USERS_URL } from './contanst.js';
const baseurl = fetchBaseQuery({
	baseUrl: BASE_URL,
});

const userSlice = createApi({
	reducerPath: 'users',
	baseQuery: baseurl,
	endpoints(builder) {
		return {
			login: builder.mutation({
				query: data => {
					return {
						url: `${USERS_URL}/auth`,
						method: 'POST',
						body: data,
					};
				},
				extraOptions: { maxRetries: 0 },
			}),
			register: builder.mutation({
				query: data => {
					return {
						url: `${USERS_URL}`,
						method: 'POST',
						body: data,
					};
				},
				extraOptions: { maxRetries: 0 },
			}),
			logout: builder.mutation({
				query: () => ({
					url: `${USERS_URL}/logout`,
					method: 'POST',
				}),
			}),
			getUsers: builder.query({
				query: () => ({
					url: USERS_URL,
					method: 'GET',
				}),
				providesTags: ['User'],
				keepUnusedDataFor: 5,
			}),
			deleteUser: builder.mutation({
				query: id => ({
					url: `${USERS_URL}/${id}`,
					method: 'DELETE',
				}),
				keepUnusedDataFor: 5,
			}),

			getUserDetails: builder.query({
				query: userId => ({
					url: `${USERS_URL}/${userId}`,
				}),
				keepUnusedDataFor: 5,
			}),
			updateUser: builder.mutation({
				query: data => {
					return {
						url: `${USERS_URL}/${data.userId}`,
						method: 'PUT',
						body: data,
					};
				},
				providesTags: ['Users'],
			}),
		};
	},
});
export let {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useGetUsersQuery,
	useDeleteUserMutation,
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} = userSlice;

export { userSlice };
export default userSlice.reducer;
