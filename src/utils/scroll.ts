import { NativeScrollEvent } from 'react-native';

export const isCloseToBottom = (event: NativeScrollEvent, threshold: number = 20) => {
  const { layoutMeasurement, contentOffset, contentSize } = event;
  return layoutMeasurement.height + contentOffset.y >= contentSize.height - threshold;
};
