import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IdentityState {
  setupId: string | null;
}

const initialState: IdentityState = {
  setupId: null,
};

const identitySlice = createSlice({
  name: 'identity',
  initialState,
  reducers: {
    setSetupId: (state, action: PayloadAction<{ setupId: string }>) => {
      state.setupId = action.payload.setupId;
    },
  },
});

export const { setSetupId } = identitySlice.actions;
export const { reducer } = identitySlice;
