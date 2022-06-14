import { useMemo } from 'react';
import useTheme from './useTheme';
import { Theme } from '../types';

type AnyObject = Record<string, unknown>;
type Generator<T = AnyObject> = (theme: Theme) => T;

const useThemeAwareObject = <T = AnyObject>(fn: Generator<T>) => {
  const theme = useTheme();

  return useMemo(() => fn(theme), [fn, theme]);
};

export default useThemeAwareObject;
