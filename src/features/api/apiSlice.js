import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (input) => ({
        url: "/products",
        method: "POST",
        body: input,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: (id, input) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: input,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = apiSlice;
