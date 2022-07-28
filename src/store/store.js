import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contactsAPI";
import contactsSlice from './contactsAPI'


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        contacts: contactsSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),
})
