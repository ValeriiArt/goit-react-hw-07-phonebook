
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const contactsApi = createApi({

    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62e15bf8fa99731d75d50729.mockapi.io/' }),
    endpoints: (build) => ({
        getContacts: build.query({
            query: () => 'contacts',
            providesTags: (result) => result
                ? [
                    ...result.map(({ id }) => ({ type: 'Contacts', id })),
                    { type: 'Contacts', id: 'LIST' },
                    ]
                : [{ type: 'Contacts', id: 'LIST' }],
        }),

        addContact: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}],
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}],
        })
    })
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation } = contactsApi;

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        filter: '',
    },
    reducers: {
        getFilterContact(state, action) {
            state.filter = action.payload;
        },
    },
});

export const { getFilterContact } = contactsSlice.actions;
export default contactsSlice.reducer;