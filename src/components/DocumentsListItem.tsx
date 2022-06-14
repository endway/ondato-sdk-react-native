import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { flex1, row } from '@ondato/theme/common';
import { useTheme } from '@ondato/theme/hooks';
import { DocumentId } from '@ondato/modules/kyc/types';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import PrimaryText from './PrimaryText';
import Svg, { IconName } from './Svg';

export interface DocumentsListItemProps {
  id: DocumentId;
  onPress?: () => void;
}

const DocumentsListItem: FC<DocumentsListItemProps> = (props) => {
  const { id, onPress } = props;
  const theme = useTheme();
  const { t } = useTranslation();

  const { iconName, name } = useMemo(
    () => ({
      iconName: documentIconName[id],
      name: documentTitle(t)[id],
    }),
    [id, t]
  );

  return (
    <TouchableOpacity style={[row, theme.paddings.vertical.xl]} onPress={onPress}>
      <View style={[row, flex1]}>
        <Svg color={theme.colors.primary} name={iconName} style={theme.margins.right.l} />
        <PrimaryText>{name}</PrimaryText>
      </View>
      <Svg color={theme.colors.text} name="arrowRight" width={32} height={32} />
    </TouchableOpacity>
  );
};

const documentIconName: Record<DocumentId, IconName> = {
  IdCard: 'idCard',
  DriverLicense: 'drivingLicense',
  Passport: 'passport',
};

const documentTitle = (t: TFunction): Record<DocumentId, string> => ({
  IdCard: t('documents.id_card.name'),
  DriverLicense: t('documents.driving_license.name'),
  Passport: t('documents.passport.name'),
});

export default DocumentsListItem;
