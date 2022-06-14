import React, { FC } from 'react';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

const LottieAnimation: FC<AnimatedLottieViewProps> = (props) => {
  return <LottieView {...props} />;
};

export default LottieAnimation;
