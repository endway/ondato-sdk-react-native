import React, { FC, useEffect } from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Theme } from '@ondato/theme/types';
import { useTheme, useThemeAwareObject } from '@ondato/theme/hooks';
import { flex1, row } from '@ondato/theme/common';
import Svg from './Svg';
import PrimaryText from './PrimaryText';

export interface ToastMessageProps {
  onClose: () => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  showDuration?: number;
}

const ToastMessage: FC<ToastMessageProps> = (props) => {
  const { onClose, title, style, showDuration = 5000 } = props;

  const theme = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  useEffect(() => {
    const timeoutId = setTimeout(onClose, showDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showDuration, onClose]);

  return (
    <View style={[themedStyles.container, style]}>
      <View style={[row, flex1, theme.margins.right.m]}>
        <Svg
          style={theme.margins.right.m}
          color={theme.colors.text}
          width={24}
          height={24}
          name="dangerTriangle"
        />
        <PrimaryText fontWeight="bold" fontSize="m" color="text">
          {title}
        </PrimaryText>
      </View>
      <TouchableOpacity onPress={onClose}>
        <Svg color={theme.colors.text} width={24} height={24} name="close" />
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...row,
      ...theme.boxShadows.l,
      ...theme.paddings.horizontal.m,
      borderRadius: theme.borderRadius.s,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.primary,
      borderWidth: 1,
      height: 56,
    },
  });
};

export default ToastMessage;
