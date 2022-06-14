import React, { FC, ReactNode, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { DeviceUtils, DimensionsUtils } from '@ondato/utils';

export interface Dimensions {
  x: number;
  y: number;
}

interface Props {
  style?: StyleProp<ViewStyle>;
  dimensions?: Dimensions;
  children?: ReactNode;
  width?: number;
}

const DimensionContainer: FC<Props> = (props) => {
  const { style, dimensions = { x: 3, y: 2 }, children, width = DeviceUtils.windowWidth } = props;

  const containerStyle = useMemo<ViewStyle>(
    () => ({
      height: DimensionsUtils.getHeight(width, dimensions),
    }),
    [dimensions, width]
  );

  return <View style={[containerStyle, style]}>{children}</View>;
};

export default DimensionContainer;
