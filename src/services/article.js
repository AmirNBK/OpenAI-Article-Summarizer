import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'dfd0d0314amsh741988ddff712c6p1f8585jsn4ef2201fd0ea');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3
            }`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;