import { configureStore } from '@reduxjs/toolkit';
import navSlice  from './slices/navslice'

export default configureStore({
  reducer: {
    nav: navSlice,
  },
});
