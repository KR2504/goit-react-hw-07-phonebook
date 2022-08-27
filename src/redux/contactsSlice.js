import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://630a25b7f8a20183f77c8450.mockapi.io'
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContact: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: (body) => ({
                url: `/contacts`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        })
    }),
})

export const { useGetContactQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;