import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phone } from '../types/Phone';
import { fetchPhonesPage } from './allPhonesAPI';

export interface allPhonesState {
  phonesOnPage: Phone[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: allPhonesState = {
  phonesOnPage: null,
  status: 'idle',
};

type getPhonesPageAsyncType = {
  page: number,
  onPage: number,
}

export const getPhonesPageAsync = createAsyncThunk(
  'phonesPage/fetchPhonesPage',
  async({ page, onPage }: getPhonesPageAsyncType) => {
    // eslint-disable-next-line no-return-await
    return await fetchPhonesPage(page, onPage);
  },
);

export const phonesPageSlice = createSlice({
  name: 'phonesPage',
  initialState,
  reducers: {
    setPhonesOnPage: (state, action: PayloadAction<Phone[] | null>) => {
      // eslint-disable-next-line no-param-reassign
      state.phonesOnPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhonesPageAsync.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'loading';
      })
      .addCase(getPhonesPageAsync.fulfilled, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'idle';
        // eslint-disable-next-line no-param-reassign
        state.phonesOnPage = action.payload;
      })
      .addCase(getPhonesPageAsync.rejected, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.status = 'failed';
      });
  },
});

export const { setPhonesOnPage } = phonesPageSlice.actions;
export default phonesPageSlice.reducer;
