import React, { FC } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';
import { row } from '../theme/common';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { quitConfirmationRoute } from '../navigation/types';
import { useTheme } from '../theme/hooks';
import ScreenContainer from './ScreenContainer';
import Container from './Container';
import Svg from './Svg';

export interface FlowScreenContainerProps {
  children: React.ReactNode;
  isLoading?: boolean;
  style?: StyleProp<ViewStyle>;
}

const FlowScreenContainer: FC<FlowScreenContainerProps> = (props) => {
  const { children, style, ...rest } = props;
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScreenContainer {...rest} style={[style, theme.paddings.top.l]}>
      <Container style={[row, theme.margins.bottom.m]}>
        <TouchableOpacity
          onPress={() => navigation.navigate(quitConfirmationRoute)}
          style={theme.margins.left.auto}
        >
          <Svg color={theme.colors.text} name="close" width={32} height={32} />
        </TouchableOpacity>
      </Container>
      {children}
    </ScreenContainer>
  );
};

export default FlowScreenContainer;
