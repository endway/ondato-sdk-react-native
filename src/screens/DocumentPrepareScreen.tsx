import React, { FC, useEffect, useMemo } from 'react';
import {
  documentCaptureRoute,
  DocumentPrepareScreenProps,
  selfieCaptureRoute,
} from '../navigation/types';
import {
  Button,
  Container,
  FlowScreenContainer,
  MistakesListItem,
  PrimaryText,
  Svg,
} from '../components';
import { center, row, rowStart, spaceBetween } from '../theme/common';
import { ScrollView, View } from 'react-native';
import { Mistake } from '../api/types';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../theme/hooks';
import { BaseDocumentId, DocumentSideId } from '../modules/kyc/types';
import { useLogging } from '../hooks';
import { LogActions } from '../api/clients/identity/constants';
import { TFunction } from 'i18next';
import { IconName } from '../components/Svg';

const DocumentPrepareScreen: FC<DocumentPrepareScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { variant } = params;

  const { log } = useLogging();
  const theme = useTheme();
  const { t } = useTranslation();

  const { title, description, iconName, mistakes } = useMemo(
    () => ({
      title: pageTitle(t)[variant.id][variant.sideId],
      description: pageDescription(t)[variant.id][variant.sideId],
      iconName: pageIconName[variant.id][variant.sideId],
      mistakes: pageMistakes(t)[variant.id],
    }),
    [variant, t]
  );

  useEffect(() => {
    if (variant.id === 'SelfieWithDoc') log(LogActions.selfieWithDocumentPage);
    if (variant.id === 'IdCard' && variant.sideId === 'Front') log(LogActions.idCardFrontPage);
    if (variant.id === 'IdCard' && variant.sideId === 'Back') log(LogActions.idCardBackPage);
    if (variant.id === 'Passport' && variant.sideId === 'Front') log(LogActions.passportFrontPage);
    if (variant.id === 'Passport' && variant.sideId === 'Back') log(LogActions.passportBackPage);
    if (variant.id === 'DriverLicense' && variant.sideId === 'Front') log(LogActions.driverLicenseFrontPage);
    if (variant.id === 'Passport' && variant.sideId === 'Back') log(LogActions.driverLicenseBackPage);
  }, [log, variant]);

  const handleOnStart = () => {
    if (variant.id === 'Selfie') {
      navigation.push(selfieCaptureRoute);
      return;
    }

    navigation.push(documentCaptureRoute, { variant });
  };

  return (
    <FlowScreenContainer style={theme.paddings.bottom.l}>
      <Container style={theme.paddings.bottom.m}>
        <PrimaryText fontSize="xl" fontWeight="bold" center>
          {title}
        </PrimaryText>
      </Container>
      <ScrollView contentContainerStyle={theme.paddings.horizontal.l}>
        <PrimaryText style={theme.margins.bottom.xxl} fontSize="s" center>
          {description}
        </PrimaryText>
        {!!iconName && (
          <View style={center}>
            <Svg color={theme.colors.primary} name={iconName} />
          </View>
        )}
        {mistakes.length > 0 && (
          <View style={theme.margins.top.xxl}>
            <PrimaryText style={theme.margins.bottom.m} fontSize="s" center>
              {t('mistakes.title')}
            </PrimaryText>
            <View style={[rowStart, spaceBetween]}>
              {mistakes.map((mistake, index) => (
                <MistakesListItem mistake={mistake} key={index} />
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      <Container style={[row, spaceBetween, theme.paddings.top.l]}>
        <Button onPress={navigation.goBack} variant="secondary" label={t('buttons.go_back')} />
        <Button onPress={handleOnStart} label={t('buttons.start')} />
      </Container>
    </FlowScreenContainer>
  );
};

const pageTitle = (t: TFunction): Record<BaseDocumentId, Record<DocumentSideId, string | undefined>> => ({
  IdCard: {
    Front: t('document_preparation.id_card.front.title'),
    Back: t('document_preparation.id_card.back.title'),
  },
  DriverLicense: {
    Front: t('document_preparation.driving_license.front.title'),
    Back: t('document_preparation.driving_license.back.title'),
  },
  Passport: {
    Front: t('document_preparation.passport.title'),
    Back: undefined,
  },
  Selfie: {
    Front: t('document_preparation.selfie.title'),
    Back: undefined,
  },
  SelfieWithDoc: {
    Front: t('document_preparation.document_with_selfie.title'),
    Back: undefined,
  },
});

const pageDescription = (
  t: TFunction
): Record<BaseDocumentId, Record<DocumentSideId, string | undefined>> => ({
  IdCard: {
    Front: t('document_preparation.id_card.front.description'),
    Back: t('document_preparation.id_card.back.description'),
  },
  DriverLicense: {
    Front: t('document_preparation.driving_license.front.description'),
    Back: t('document_preparation.driving_license.back.description'),
  },
  Passport: {
    Front: t('document_preparation.passport.description'),
    Back: undefined,
  },
  Selfie: {
    Front: t('document_preparation.selfie.description'),
    Back: undefined,
  },
  SelfieWithDoc: {
    Front: t('document_preparation.document_with_selfie.description'),
    Back: undefined,
  },
});

const pageIconName: Record<BaseDocumentId, Record<DocumentSideId, IconName | undefined>> = {
  IdCard: {
    Front: 'idCardFront',
    Back: 'idCardBack',
  },
  DriverLicense: {
    Front: 'drivingLicenseFront',
    Back: 'drivingLicenseBack',
  },
  Passport: {
    Front: 'passportFront',
    Back: undefined,
  },
  Selfie: {
    Front: 'selfieFront',
    Back: undefined,
  },
  SelfieWithDoc: {
    Front: 'documentWithSelfieFront',
    Back: undefined,
  },
};

const pageMistakes = (t: TFunction): Record<BaseDocumentId, Mistake[]> => ({
  IdCard: [
    { iconName: 'cardTooBlurry', label: t('mistakes.too_blurry') },
    { iconName: 'cardTooSmall', label: t('mistakes.too_small') },
    { iconName: 'cardTooDark', label: t('mistakes.too_dark') },
  ],
  DriverLicense: [
    { iconName: 'cardTooBlurry', label: t('mistakes.too_blurry') },
    { iconName: 'cardTooSmall', label: t('mistakes.too_small') },
    { iconName: 'cardTooDark', label: t('mistakes.too_dark') },
  ],
  Passport: [
    { iconName: 'passportTooBlurry', label: t('mistakes.too_blurry') },
    { iconName: 'passportTooSmall', label: t('mistakes.too_small') },
    { iconName: 'passportTooDark', label: t('mistakes.too_dark') },
  ],
  Selfie: [
    { iconName: 'selfieTooBlurry', label: t('mistakes.too_blurry') },
    { iconName: 'selfieBadLighting', label: t('mistakes.bad_lightning') },
    { iconName: 'selfieNotNeutral', label: t('mistakes.not_a_neutral_face') },
  ],
  SelfieWithDoc: [],
});

export default DocumentPrepareScreen;
