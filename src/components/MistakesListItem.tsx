import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { center } from '../theme/common';
import { Mistake } from '../api/types';
import { useTheme } from '../theme/hooks';
import PrimaryText from './PrimaryText';
import Svg from './Svg';

export interface MistakesListItemProps {
  mistake: Mistake;
}

const MistakesListItem: FC<MistakesListItemProps> = (props) => {
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
