import React, { FC } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@ondato/navigation/RootNavigator';
import { row } from '@ondato/theme/common';
import { TouchableOpacity } from 'react-native';
import { quitConfirmationRoute } from '@ondato/navigation/types';
import { useTheme } from '@ondato/theme/hooks';
import ScreenContainer, { ScreenContainerProps } from './ScreenContainer';
import Container from './Container';
import Svg from './Svg';

const FlowScreenContainer: FC<ScreenContainerProps> = (props) => {
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