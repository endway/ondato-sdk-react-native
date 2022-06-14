import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { flex1 } from '@ondato/theme/common';
import { Theme } from '@ondato/theme/types';
import { useThemeAwareObject } from '@ondato/theme/hooks';
import FullScreenLoader from './FullScreenLoader';

export interface ScreenContainerProps {
  children: React.ReactNode;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ScreenContainer: FC<ScreenContainerProps> = (props) => {
  const { children, style, isLoading = false } = props;
  const themedStyles = useThemeAwareObject(styles);

  return (
    <SafeAreaView style={[themedStyles.container, flex1]}>
      <FullScreenLoader isVisible={isLoading} />
      <View style={[flex1, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
    },
  });
};

export default ScreenContainer;
