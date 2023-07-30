import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pc-complier.vercel.app/api' }),
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => `/categories`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetCategoriesQuery } = api