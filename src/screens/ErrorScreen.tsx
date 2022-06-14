import React, { FC, useMemo } from 'react';
import { ErrorScreenProps } from '@ondato/navigation/types';
import { Button, Container, PrimaryText, ScreenContainer, Svg } from '@ondato/components';
import { center, flex1 } from '@ondato/theme/common';
import { useTranslation } from 'react-i18next';
import { useRetryIdentification } from '@ondato/hooks';
import { resetToDocumentSelectRoute } from '@ondato/navigation/actions';
import { useTheme } from '@ondato/theme/hooks';
import { CriticalReasons, RejectionReasons } from '@ondato/api/clients/kyc/constants';
import { useCallbacks } from '@ondato/core/screens-config/hooks';
import { TFunction } from 'i18next';

interface PageContent {
  title: string;
  description: string;
}

const ErrorScreen: FC<ErrorScreenProps> = (props) => {
  const { route, navigation } = props;
  const { params } = route;
  const { rejectionReason } = params;

  const { onError } = useCallbacks();
  const theme = useTheme();
  const { t } = useTranslation();
  const { retry, isLoading } = useRetryIdentification();

  const { title, description } = useMemo<PageContent>(
    () => content(t)[rejectionReason],
    [rejectionReason, t]
  );
  const isCriticalReason = CriticalReasons.includes(rejectionReason);

  const handleOnRetry = async () => {
    await retry();
    navigation.dispatch(resetToDocumentSelectRoute());
  };

  return (
    <ScreenContainer isLoading={isLoading}>
      <Container style={[flex1, center]}>
        <Svg
          color={theme.colors.primary}
          name="error"
          style={theme.margins.bottom.xxl}
          width={72}
          height={72}
        />
        <PrimaryText style={theme.margins.bottom.l} fontSize="xl" fontWeight="bold" center>
          {title}
        </PrimaryText>
        <PrimaryText fontSize="m" center>
          {description}
        </PrimaryText>
      </Container>
      <Container style={[center, theme.paddings.vertical.l]}>
        {isCriticalReason && <Button onPress={onError} label={t('buttons.close')} />}
        {!isCriticalReason && <Button onPress={handleOnRetry} label={t('buttons.try_again')} />}
      </Container>
    </ScreenContainer>
  );
};

const content = (t: TFunction): Record<RejectionReasons, PageContent> => ({
  [RejectionReasons.missingDocumentPhoto]: {
    title: t('reject_reasons.missing_document_photo.title'),
    description: t('reject_reasons.missing_document_photo.description'),
  },
  [RejectionReasons.documentNotAccepted]: {
    title: t('reject_reasons.document_not_accepted.title'),
    description: t('reject_reasons.document_not_accepted.description'),
  },
  [RejectionReasons.dataDoesNotMatch]: {
    title: t('reject_reasons.data_does_not_match.title'),
    description: t('reject_reasons.data_does_not_match.description'),
  },
  [RejectionReasons.sanctioned]: {
    title: t('reject_reasons.sanctioned.title'),
    description: t('reject_reasons.sanctioned.description'),
  },
  [RejectionReasons.missingSelfiePhoto]: {
    title: t('reject_reasons.missing_selfie_photo.title'),
    description: t('reject_reasons.missing_selfie_photo.description'),
  },
  [RejectionReasons.facesDoesNotMatch]: {
    title: t('reject_reasons.faces_does_not_match.title'),
    description: t('reject_reasons.faces_does_not_match.description'),
  },
  [RejectionReasons.poorPhotoQuality]: {
    title: t('reject_reasons.poor_photo_quality.title'),
    description: t('reject_reasons.poor_photo_quality.description'),
  },
  [RejectionReasons.poorPhotoLighting]: {
    title: t('reject_reasons.poor_photo_lighting.title'),
    description: t('reject_reasons.poor_photo_lighting.description'),
  },
  [RejectionReasons.blurredPhoto]: {
    title: t('reject_reasons.blurred_photo.title'),
    description: t('reject_reasons.blurred_photo.description'),
  },
  [RejectionReasons.badMediaFormat]: {
    title: t('reject_reasons.bad_media_format.title'),
    description: t('reject_reasons.bad_media_format.description'),
  },
  [RejectionReasons.miscellaneous]: {
    title: t('reject_reasons.miscellaneous.title'),
    description: t('reject_reasons.miscellaneous.description'),
  },
  [RejectionReasons.possibleFraudAttempt]: {
    title: t('reject_reasons.possible_fraud_attempt.title'),
    description: t('reject_reasons.possible_fraud_attempt.description'),
  },
  [RejectionReasons.unrelatedPhoto]: {
    title: t('reject_reasons.unrelated_photo.title'),
    description: t('reject_reasons.unrelated_photo.description'),
  },
  [RejectionReasons.moreThanOnePerson]: {
    title: t('reject_reasons.more_than_one_person.title'),
    description: t('reject_reasons.more_than_one_person.description'),
  },
  [RejectionReasons.prohibitedCountryOrState]: {
    title: t('reject_reasons.prohibited_country_or_state.title'),
    description: t('reject_reasons.prohibited_country_or_state.description'),
  },
  [RejectionReasons.documentIsExpired]: {
    title: t('reject_reasons.document_is_expired.title'),
    description: t('reject_reasons.document_is_expired.description'),
  },
  [RejectionReasons.documentWithNonLatinCharacters]: {
    title: t('reject_reasons.document_with_non_latin_characters.title'),
    description: t('reject_reasons.document_with_non_latin_characters.description'),
  },
  [RejectionReasons.partOfDocumentIsCovered]: {
    title: t('reject_reasons.part_of_document_is_covered.title'),
    description: t('reject_reasons.part_of_document_is_covered.description'),
  },
  [RejectionReasons.underagePerson]: {
    title: t('reject_reasons.underage_person.title'),
    description: t('reject_reasons.underage_person.description'),
  },
  [RejectionReasons.partOfFaceIsCovered]: {
    title: t('reject_reasons.part_of_face_is_covered.title'),
    description: t('reject_reasons.part_of_face_is_covered.description'),
  },
  [RejectionReasons.prohibitedNationality]: {
    title: t('reject_reasons.prohibited_nationality.title'),
    description: t('reject_reasons.prohibited_nationality.description'),
  },
  [RejectionReasons.duplicatedInfo]: {
    title: t('reject_reasons.duplicated_info.title'),
    description: t('reject_reasons.duplicated_info.description'),
  },
  [RejectionReasons.nameMismatch]: {
    title: t('reject_reasons.unknown.title'),
    description: t('reject_reasons.unknown.description'),
  },
  [RejectionReasons.expirationDateMismatch]: {
    title: t('reject_reasons.unknown.title'),
    description: t('reject_reasons.unknown.description'),
  },
  [RejectionReasons.incorrectInformationProvided]: {
    title: t('reject_reasons.unknown.title'),
    description: t('reject_reasons.unknown.description'),
  },
  [RejectionReasons.docAndBioAgeDoesntMatch]: {
    title: t('reject_reasons.unknown.title'),
    description: t('reject_reasons.unknown.description'),
  },
});

export default ErrorScreen;
