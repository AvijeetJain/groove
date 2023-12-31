import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({ 
    reducer: 'shazamApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam.p.rapidapi.com' ,
        prepareHeaders(headers) {
            headers.set('X-RapidAPI-Key', '486158e265msh296eeb8af239741p1a7ee2jsn2de7248dd0af');
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCharts: builder.query({
            query: () => `/charts/track`,
        }),
        getSongsBySearch: builder.query({
            query: (songname) => `/search?term=${songname}&limit=10`,
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
    useGetSongsBySearchQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamApi;