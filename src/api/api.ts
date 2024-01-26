import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAllPost } from '../redux/type/TypeGetAllPost';

const BASE_URL = 'http://localhost:3600/';
// json-server -w db.json --port 3600
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getAllPost: builder.query<getAllPost[], null>({
      query: () => ({
        url: '/todos',
        params: {
          _sort: 'id',
          _order: 'desc',
        },
      }),
      providesTags: () => [
        {
          type: 'Post',
        },
      ],
    }),
  }),
});

export const { useGetAllPostQuery } = api;
