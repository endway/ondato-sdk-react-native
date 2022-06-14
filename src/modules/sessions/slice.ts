import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SessionsState {
  accessToken: string | null;
  fullAccessToken: string | null;
}

const initialState: SessionsState = {
  accessToken: null,
  fullAccessToken: null,
};

const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    setFullAccessToken: (state, action: PayloadAction<{ fullAccessToken: string }>) => {
      state.fullAccessToken = action.payload.fullAccessToken;
    },
  },
});

export const { setAccessToken, setFullAccessToken } = sessionsSlice.actions;
export const { reducer } = sessionsSlice;
