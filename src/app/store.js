import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import personReducer from '../features/person/personSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    person: personReducer,
  },
});
