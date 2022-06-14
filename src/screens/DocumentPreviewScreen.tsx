import React, { FC, useMemo } from 'react';
import { documentPrepareRoute, DocumentPreviewScreenProps, loadingRoute } from '@ondato/navigation/types';
import {
  Button,
  Container,
  DimensionContainer,
  FlowScreenContainer,
  PrimaryText,
  Svg,
} from '@ondato/components';
import { useTranslation } from 'react-i18next';
import { center, flex1, fullImageHeight, row, spaceBetween } from '@ondato/theme/common';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { useUploadAdditionalDocument, useUploadDocument } from '@ondato/hooks';
import { DeviceUtils, DimensionsUtils, FileUtils } from '@ondato/utils';
import { useTheme } from '@ondato/theme/hooks';
import { BaseDocumentId, DocumentSideId, DocumentVariant } from '@ondato/modules/kyc/types';
import { useAppSelector } from '@ondato/core/store';
import {
  selectDocuments,
  selectIsSelfieEnabled,
  selectIsSelfieWithDocumentEnabled,
} from '@ondato/modules/kyc/selectors';
import { reset } from '@ondato/navigation/actions';
import { IconName } from '../components/Svg';

const DocumentPreviewScreen: FC<DocumentPreviewScreenProps> = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { variant, photo } = params;

  const isSelfieWithDocumentEnabled = useAppSelector(selectIsSelfieWithDocumentEnabled);
  const documents = useAppSelector(selectDocuments);
  const isSelfieEnabled = useAppSelector(selectIsSelfieEnabled);

  const theme = useTheme();
  const { t } = useTranslation();
  const { uploadDocument, isLoading: isDocumentUploading } = useUploadDocument();
  const { uploadAdditionalDocument, isLoading: isAdditionalUploading } = useUploadAdditionalDocument();
  const currentDocument = useMemo(() => documents.find((document) => document.id === variant.id), [variant]);
  const imageWidth = useMemo(() => DeviceUtils.windowWidth - theme.sizes.l * 2, [theme]);

  const { iconName, dimensions } = useMemo(
    () => ({
      iconName: documentIconName[variant.id][variant.sideId],
      dimensions: variant.id === 'SelfieWithDoc' ? { x: 1, y: 1 } : undefined,
    }),
    [variant]
  );

  const handleNavigationAfterSubmit = () => {
    if (currentDocument) {
      const sidesIds = currentDocument.sidesIds;
      const sideIdIndex = sidesIds.findIndex((sideId) => sideId === variant.sideId);
      const hasNext = sideIdIndex < sidesIds.length - 1;

      if (hasNext) {
        const nextSideVariant: DocumentVariant = { id: variant.id, sideId: sidesIds[sideIdIndex + 1] };
        navigation.push(documentPrepareRoute, { variant: nextSideVariant });
        return;
      }
    }

    if (isSelfieEnabled && variant.id !== 'Selfie' && variant.id !== 'SelfieWithDoc') {
      const selfieVariant: DocumentVariant = { id: 'Selfie', sideId: 'Front' };
      navigation.push(documentPrepareRoute, { variant: selfieVariant });
      return;
    }

    if (isSelfieWithDocumentEnabled && variant.id !== 'SelfieWithDoc') {
      const selfieWithDocumentVariant: DocumentVariant = { id: 'SelfieWithDoc', sideId: 'Front' };
      navigation.push(documentPrepareRoute, { variant: selfieWithDocumentVariant });
      return;
    }

    navigation.dispatch(reset(loadingRoute));
  };

  const onUpload = async () => {
    const base64Image = await FileUtils.getBase64Image(photo.path);
    const fileType = FileUtils.getImageFileType();

    if (currentDocument) {
      await uploadDocument({
        documentSide: variant.sideId,
        documentType: currentDocument.id,
        imageFileType: fileType,
        imageBase64: base64Image,
      });
    } else if (variant.id === 'SelfieWithDoc') {
      await uploadAdditionalDocument({
        imageFileType: fileType,
        imageBase64: base64Image,
        type: 'SelfieWithDoc',
      });
    }

    handleNavigationAfterSubmit();
  };

  return (
    <FlowScreenContainer
      isLoading={isDocumentUploading || isAdditionalUploading}
      style={theme.paddings.bottom.l}
    >
      <Container style={flex1}>
        <PrimaryText style={theme.paddings.bottom.m} fontSize="xl" fontWeight="bold" center>
          {t('document_preview.title')}
        </PrimaryText>
        <PrimaryText style={theme.paddings.bottom.l} fontSize="s" center>
          {t('document_preview.description')}
        </PrimaryText>
        <DimensionContainer width={imageWidth} dimensions={dimensions}>
          <ImageBackground
            style={[styles.imageContainer, { width: imageWidth }]}
            imageStyle={[styles.image, { width: imageWidth }]}
            source={{ uri: FileUtils.getImageUri(photo.path) }}
          />
        </DimensionContainer>
        {!!iconName && (
          <View style={[center, theme.margins.top.l]}>
            <Svg color={theme.colors.text} name={iconName} width={109} />
          </View>
        )}
      </Container>
      <Container style={[row, spaceBetween, theme.paddings.top.l]}>
        <Button onPress={navigation.goBack} variant="secondary" label={t('buttons.try_again')} />
        <Button onPress={onUpload} label={t('buttons.continue')} />
      </Container>
    </FlowScreenContainer>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    height: '100%',
  },
  image: {
    height: 400,
  },
});

const documentIconName: Record<BaseDocumentId, Record<DocumentSideId, IconName | undefined>> = {
  IdCard: {
    Front: 'idCardFrontFrame',
    Back: 'idCardBackFrame',
  },
  DriverLicense: {
    Front: 'drivingLicenseFrontFrame',
    Back: 'drivingLicenseBackFrame',
  },
  Passport: {
    Front: 'passportFrontFrame',
    Back: undefined,
  },
  Selfie: {
    Front: undefined,
    Back: undefined,
  },
  SelfieWithDoc: {
    Front: undefined,
    Back: undefined,
  },
};

export default DocumentPreviewScreen;
