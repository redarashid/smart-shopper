// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const proudectApi = createApi({
  reducerPath: 'proudectApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getproudectByName: builder.query({
      query: (name) => `proudect/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproudectByNameQuery } = proudectApi