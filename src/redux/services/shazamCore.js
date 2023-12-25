import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({ 
    reducer: 'shazamApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam.p.rapidapi.com' ,
        prepareHeaders(headers) {
            headers.set('X-RapidAPI-Key', '181d475541msh87144561b36efefp1c5593jsn7e9d953f7842');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCharts: builder.query({
            query: () => `/charts/track`,
        }),
        
    }),
});
    
export const { useGetChartsQuery } = shazamApi;