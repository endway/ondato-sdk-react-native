import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FaceTecLicense } from './types';

export interface IdentityState {
  license: FaceTecLicense | null;
}

const initialState: IdentityState = {
  license: null,
};

const faceTecSlice = createSlice({
  name: 'faceTec',
  initialState,
  reducers: {
    setFaceTecLicense: (state, action: PayloadAction<{ license: FaceTecLicense }>) => {
      state.license = action.payload.license;
    },
  },
});

export const { setFaceTecLicense } = faceTecSlice.actions;
export const { reducer } = faceTecSlice;
