import { RootState } from '@ondato/core/store';

export const selectFullAccessToken = (state: RootState): string | null => {
  return state.sessions.fullAccessToken;
};
