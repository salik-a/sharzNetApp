import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './index';
import {storage} from '../services/storage';

export type TRezervationsList = {
  rezervationsArray: any[];
};
const list = storage.getString('rezervationsArray');
const rezervationsArray = list ? JSON.parse(list) : [];
const initialState: TRezervationsList = {
  rezervationsArray: rezervationsArray,
};

const rezervationsListSlice = createSlice({
  name: 'rezervationsList',
  initialState: initialState,
  reducers: {
    addToRezervationsList: (
      state: TRezervationsList,
      action: PayloadAction<any>,
    ) => {
      return {
        ...state,
        rezervationsArray: [...state.rezervationsArray, action.payload],
      };
    },
    deleteAll: (state: TRezervationsList) => {
      return {...state, rezervationsArray: []};
    },
  },
});

export const {addToRezervationsList, deleteAll} = rezervationsListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getrezervationsArray = (state: RootState) => state.rezervations;

export default rezervationsListSlice.reducer;
