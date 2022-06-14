import React, { FC, useMemo, useState } from 'react';
import ThemeContext, { ThemeContextValue } from './ThemeContext';
import { ConfigurableTheme, Theme } from '../types';
import lightTheme from '../lightTheme';

interface Props {
  configurableTheme: ConfigurableTheme;
  children: React.ReactNode;
}

const ThemeProvider: FC<Props> = (props) => {
  const { children, configurableTheme } = props;

  const initialTheme = useMemo<Theme>(() => {
    const configuredColors = { ...lightTheme.colors, ...configurableTheme.colors };
    return { ...lightTheme, colors: configuredColors };
  }, [configurableTheme]);

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const memoizedValue = useMemo<ThemeContextValue>(() => {
    return { theme, setTheme };
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
