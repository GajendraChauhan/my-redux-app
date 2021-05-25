import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPerson, addPerson } from './personAPI';

const initialState = {
  data: [],
  status: 'idle',
};

export const get = createAsyncThunk("person/get", async () => {
    const data = await getPerson();
    return data;
});

export const addNewPErson = createAsyncThunk(
  'person/post',
  async (person) => {
    const response = await addPerson(person);
    return response.data;
  }
);

export const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        set: (state, action) => {
            state.data[action.payload.key] = action.payload.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(get.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                get.fulfilled, (state, action) => {
                    state.status = 'idle';
                    state.data = action.payload
                }
            )
            .addCase(addNewPErson.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(
                addNewPErson.fulfilled, (state, action) => {
                    state.status = 'idle';
                    state.data = action.payload
                }
            )
    },
});

export const { set } = personSlice.actions;

export default personSlice.reducer;