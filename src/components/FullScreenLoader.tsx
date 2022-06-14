import React, { FC, useEffect, useRef, useState } from 'react';
import { Theme } from '@ondato/theme/types';
import { ActivityIndicator, Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { useThemeAwareObject } from '@ondato/theme/hooks';
import { center } from '@ondato/theme/common';
import hexToRgba from 'hex-to-rgba';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@ondato/theme/hooks';
import PrimaryText from './PrimaryText';

export interface FullScreenLoaderProps {
  style?: StyleProp<ViewStyle>;
  isVisible: boolean;
}

const visibleZIndex = 999;
const hiddenZIndex = -1;

const FullScreenLoader: FC<FullScreenLoaderProps> = (props) => {
  const { style, isVisible } = props;
  const { t } = useTranslation();

  const theme = useTheme();
  const themedStyles = useThemeAwareObject(styles);

  const [zIndex, setZIndex] = useState<number>(isVisible ? visibleZIndex : hiddenZIndex);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isVisible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      if (!isVisible) setZIndex(hiddenZIndex);
    });
  }, [opacity, isVisible]);

  useEffect(() => {
    if (isVisible) setZIndex(visibleZIndex);
  }, [isVisible]);

  return (
    <Animated.View style={[themedStyles.container, { opacity, zIndex }, style]}>
      <ActivityIndicator style={theme.margins.bottom.m} size={50} color={theme.colors.white} />
      <PrimaryText fontSize="xs" color="white">
        {t('common.loading')}
      </PrimaryText>
    </Animated.View>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      ...center,
      ...StyleSheet.absoluteFillObject,
      backgroundColor: hexToRgba(theme.colors.black, 0.6),
    },
  });
};

export default FullScreenLoader;
