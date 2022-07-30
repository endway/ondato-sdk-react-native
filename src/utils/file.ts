import fs from 'react-native-fs';
import { DocumentImageFileType } from '../api/clients/kyc/types';

export const getBase64Image = (path: string) => {
  return fs.readFile(path, 'base64');
};

export const getImageFileType = (): DocumentImageFileType => {
  return 'Png';
};

export const getAdditionalDocumentFileType = (): DocumentImageFileType => {
  return 'jpeg';
};

export const getImageUri = (path: string) => {
  return `file://${path}`;
};
