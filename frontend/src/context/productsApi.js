import {
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { BASE_URL, PRPDUCT_URL } from './contanst.js';
const baseurl = fetchBaseQuery({
	baseUrl: BASE_URL,
});

const productstApi = createApi({
	reducerPath: 'Products',
	credentials: 'include',
	baseQuery: baseurl,
	endpoints(builder) {
		return {
			getProducts: builder.query({
				query: () => ({
					url: PRPDUCT_URL,
					method: 'GET',
				}),
				keepUnusedDataFor: 5,
			}),

			getProductsAllDetals: builder.query({
				query: productsId => {
					return {
						url: `${PRPDUCT_URL}/${productsId}`,
					};
				},
				extraOptions: { maxRetries: 0 },
			}),
			createProduct: builder.mutation({
				query: data => {
					return {
						url: `${PRPDUCT_URL}`,
						method: 'POST',
						body: data,
					};
				},
				providesTags: ['Products'],
			}),
			deleteProduct: builder.mutation({
				query: productId => ({
					url: `${PRPDUCT_URL}/${productId}`,
					method: 'DELETE',
				}),
				providesTags: ['Product'],
			}),
		};
	},
});
export let {
	useGetProductsQuery,
	useGetProductsAllDetalsQuery,
	useCreateProductMutation,
	useDeleteProductMutation,
} = productstApi;

export { productstApi };
