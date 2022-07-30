import { RootState } from '../../core/store';

export const selectFullAccessToken = (state: RootState): string | null => {
  return state.sessions.fullAccessToken;
};
