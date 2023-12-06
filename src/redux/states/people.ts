import { LocalStorageTypes } from "@/models";
import { Person } from "@/models/people";
import { getLocalStorage, setLocalStorage } from "@/utilities";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
    name: LocalStorageTypes.PEOPLE,
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE) as string) : initialState, 
    reducers: {
        addPeople:  ( state, action ) => {
            setLocalStorage(LocalStorageTypes.PEOPLE, state);
            localStorage.setItem(LocalStorageTypes.PEOPLE, JSON.stringify(state))

            return action.payload
        },

    }
})