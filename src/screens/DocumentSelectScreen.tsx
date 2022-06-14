import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Container,
  DocumentsListItem,
  FlowScreenContainer,
  ListSeparator,
  PrimaryText,
} from '@ondato/components';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { documentPrepareRoute, DocumentSelectScreenProps } from '@ondato/navigation/types';
import { useAppSelector } from '@ondato/core/store';
import { useTheme } from '@ondato/theme/hooks';
import { selectDocuments } from '@ondato/modules/kyc/selectors';
import { Document, DocumentVariant } from '@ondato/modules/kyc/types';
import { useLogging } from '@ondato/hooks';
import { LogActions } from '@ondato/api/clients/identity/constants';

const DocumentSelectScreen: FC<DocumentSelectScreenProps> = (props) => {
  const { navigation } = props;
  const documents = useAppSelector(selectDocuments);

  const { log } = useLogging();
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    log(LogActions.documentTypeSelectPage);
  }, [log]);

  const handleDocumentPress = (document: Document) => {
    const [sideId] = document.sidesIds;
    const variant: DocumentVariant = { id: document.id, sideId };
    navigation.navigate(documentPrepareRoute, { variant });
  };

  const renderItem = (item: ListRenderItemInfo<Document>) => {
    const document = item.item;
    return <DocumentsListItem onPress={() => handleDocumentPress(document)} id={document.id} />;
  };

  return (
    <FlowScreenContainer>
      <Container style={theme.margins.bottom.xl}>
        <PrimaryText fontSize="xl" fontWeight="bold" center>
          {t('document_selection.title')}
        </PrimaryText>
      </Container>
      <FlatList
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
        ItemSeparatorComponent={ListSeparator}
        contentContainerStyle={[theme.paddings.horizontal.l, theme.paddings.vertical.xxl]}
        keyExtractor={(item) => item.id}
        data={documents}
        renderItem={renderItem}
      />
    </FlowScreenContainer>
  );
};

export default DocumentSelectScreen;
