import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({ 
    reducer: 'shazamApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam.p.rapidapi.com' ,
        prepareHeaders(headers) {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_RAPID_API_KEY);
            headers.set('X-RapidAPI-Host', import.meta.env.VITE_SHAZAM_RAPID_API_HOST);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCharts: builder.query({
            query: () => `/charts/track`,
        }),
        getCharts2: builder.query({
            query: () => `/charts/track?pageSize=20&startFrom=21`,
        }),
        getSongsBySearch: builder.query({
            query: (songname) => `/search?term=${songname}&offset=0&limit=5`,
        }),
        getSongDetails: builder.query({ 
            query: (songid) => `/songs/get-details?key=${songid}` 
        }),
        getSongRelated: builder.query({
            query: (songid) => `/shazam-songs/list-similarities?id=track-similarities-id-${songid}`
        }),
        getArtistDetails: builder.query({
            query: (artistid) => `/artists/get-top-songs?id=${artistid}`
        }),
    }),
});

export const { 
    useGetChartsQuery,
    useGetCharts2Query,
    useGetSongsBySearchQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamApi;