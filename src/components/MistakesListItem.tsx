import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { center } from '@ondato/theme/common';
import { Mistake } from '@ondato/api/types';
import { useTheme } from '@ondato/theme/hooks';
import PrimaryText from './PrimaryText';
import Svg from './Svg';

interface Props {
  mistake: Mistake;
}

const MistakesListItem: FC<Props> = (props) => {
  const { mistake } = props;
  const theme = useTheme();

  return (
    <View style={center}>
      <Svg color={theme.colors.primary} style={theme.margins.bottom.s} name={mistake.iconName} />
      <Svg name="danger" style={theme.margins.bottom.xs} width={19} height={19} />
      <PrimaryText style={styles.label} center fontSize="xs">
        {mistake.label}
      </PrimaryText>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: 92,
  },
});

export default MistakesListItem;
