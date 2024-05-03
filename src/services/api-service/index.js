import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
});

export const apiService = createApi({
    reducerPath: 'splitApi',
    baseQuery,
    endpoints: () => ({}),
});