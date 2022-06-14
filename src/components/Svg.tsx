import React, { FC, useMemo } from 'react';
import { SvgProps } from 'react-native-svg';

import Close from '@ondato/assets/svg/close.svg';
import QuitConfirmation from '@ondato/assets/svg/quit-confirmation.svg';
import Iso from '@ondato/assets/svg/iso.svg';
import IBeta from '@ondato/assets/svg/ibeta.svg';
import Gdpr from '@ondato/assets/svg/gdpr.svg';
import Document from '@ondato/assets/svg/onboarding-document.svg';
import PhotoDocument from '@ondato/assets/svg/onboarding-photo-document.svg';
import Selfie from '@ondato/assets/svg/onboarding-selfie.svg';
import Help from '@ondato/assets/svg/help.svg';
import ArrowRight from '@ondato/assets/svg/arrow-right.svg';
import Error from '@ondato/assets/svg/error.svg';
import Logo from '@ondato/assets/svg/logo.svg';
import Success from '@ondato/assets/svg/success.svg';
import Danger from '@ondato/assets/svg/danger.svg';
import IdCard from '@ondato/assets/svg/id-card.svg';
import Passport from '@ondato/assets/svg/passport.svg';
import DrivingLicense from '@ondato/assets/svg/driving-license.svg';
import IdCardFront from '@ondato/assets/svg/id-card-front.svg';
import IdCardBack from '@ondato/assets/svg/id-card-back.svg';
import DrivingLicenseFront from '@ondato/assets/svg/driving-license-front.svg';
import DrivingLicenseBack from '@ondato/assets/svg/driving-license-back.svg';
import PassportFront from '@ondato/assets/svg/passport-front.svg';
import SelfieFront from '@ondato/assets/svg/selfie-front.svg';
import DocumentWithSelfieFront from '@ondato/assets/svg/document-with-selfie-front.svg';
import DocumentWithSelfieFrontFrameWhite from '@ondato/assets/svg/document-with-selfie-front-frame-white.svg';
import IdCardFrontFrame from '@ondato/assets/svg/id-card-front-frame.svg';
import IdCardBackFrame from '@ondato/assets/svg/id-card-back-frame.svg';
import DrivingLicenseFrontFrame from '@ondato/assets/svg/driving-license-front-frame.svg';
import DrivingLicenseBackFrame from '@ondato/assets/svg/driving-license-back-frame.svg';
import PassportFrontFrame from '@ondato/assets/svg/passport-front-frame.svg';
import CardTooBlurry from '@ondato/assets/svg/card-too-blurry.svg';
import CardTooSmall from '@ondato/assets/svg/card-too-small.svg';
import CardTooDark from '@ondato/assets/svg/card-too-dark.svg';
import PassportTooBlurry from '@ondato/assets/svg/passport-too-blurry.svg';
import PassportTooSmall from '@ondato/assets/svg/passport-too-small.svg';
import PassportTooDark from '@ondato/assets/svg/passport-too-dark.svg';
import SelfieTooBlurry from '@ondato/assets/svg/selfie-too-blurry.svg';
import SelfieBadLighting from '@ondato/assets/svg/selfie-bad-lighting.svg';
import SelfieNotNeutral from '@ondato/assets/svg/selfie-not-neutral.svg';
import DrivingLicenseFrontFrameWhite from '@ondato/assets/svg/driving-license-front-frame-white.svg';
import DrivingLicenseBackFrameWhite from '@ondato/assets/svg/driving-license-back-frame-white.svg';
import IdCardFrontFrameWhite from '@ondato/assets/svg/id-card-front-frame-white.svg';
import IdCardBackFrameWhite from '@ondato/assets/svg/id-card-back-frame-white.svg';
import PassportFrontFrameWhite from '@ondato/assets/svg/passport-front-frame-white.svg';
import DangerTriangle from '@ondato/assets/svg/danger-triangle.svg';

export type IconName =
  | 'close'
  | 'quitConfirmation'
  | 'iso'
  | 'ibeta'
  | 'gdpr'
  | 'document'
  | 'photoDocument'
  | 'selfie'
  | 'help'
  | 'idCardFront'
  | 'idCardBack'
  | 'drivingLicenseFront'
  | 'drivingLicenseBack'
  | 'passportFront'
  | 'documentWithSelfieFrontFrameWhite'
  | 'documentWithSelfieFront'
  | 'idCardFrontFrame'
  | 'idCardBackFrame'
  | 'drivingLicenseFrontFrame'
  | 'drivingLicenseBackFrame'
  | 'passportFrontFrame'
  | 'idCard'
  | 'passport'
  | 'drivingLicense'
  | 'arrowRight'
  | 'error'
  | 'logo'
  | 'cardTooBlurry'
  | 'cardTooSmall'
  | 'cardTooDark'
  | 'passportTooBlurry'
  | 'passportTooSmall'
  | 'passportTooDark'
  | 'selfieTooBlurry'
  | 'selfieBadLighting'
  | 'selfieNotNeutral'
  | 'success'
  | 'danger'
  | 'selfieFront'
  | 'drivingLicenseFrontFrameWhite'
  | 'drivingLicenseBackFrameWhite'
  | 'idCardFrontFrameWhite'
  | 'idCardBackFrameWhite'
  | 'passportFrontFrameWhite'
  | 'dangerTriangle';

const icons: Record<IconName, FC<SvgProps>> = {
  close: Close,
  quitConfirmation: QuitConfirmation,
  iso: Iso,
  ibeta: IBeta,
  gdpr: Gdpr,
  document: Document,
  photoDocument: PhotoDocument,
  selfie: Selfie,
  help: Help,
  idCardFront: IdCardFront,
  idCardBack: IdCardBack,
  drivingLicenseFront: DrivingLicenseFront,
  drivingLicenseBack: DrivingLicenseBack,
  passportFront: PassportFront,
  documentWithSelfieFrontFrameWhite: DocumentWithSelfieFrontFrameWhite,
  idCardFrontFrame: IdCardFrontFrame,
  idCardBackFrame: IdCardBackFrame,
  drivingLicenseFrontFrame: DrivingLicenseFrontFrame,
  drivingLicenseBackFrame: DrivingLicenseBackFrame,
  passportFrontFrame: PassportFrontFrame,
  idCard: IdCard,
  passport: Passport,
  drivingLicense: DrivingLicense,
  arrowRight: ArrowRight,
  error: Error,
  logo: Logo,
  success: Success,
  danger: Danger,
  selfieFront: SelfieFront,
  documentWithSelfieFront: DocumentWithSelfieFront,
  cardTooBlurry: CardTooBlurry,
  cardTooDark: CardTooDark,
  cardTooSmall: CardTooSmall,
  passportTooBlurry: PassportTooBlurry,
  passportTooDark: PassportTooDark,
  passportTooSmall: PassportTooSmall,
  selfieBadLighting: SelfieBadLighting,
  selfieNotNeutral: SelfieNotNeutral,
  selfieTooBlurry: SelfieTooBlurry,
  drivingLicenseFrontFrameWhite: DrivingLicenseFrontFrameWhite,
  drivingLicenseBackFrameWhite: DrivingLicenseBackFrameWhite,
  idCardFrontFrameWhite: IdCardFrontFrameWhite,
  idCardBackFrameWhite: IdCardBackFrameWhite,
  passportFrontFrameWhite: PassportFrontFrameWhite,
  dangerTriangle: DangerTriangle,
};

interface Props extends SvgProps {
  name: IconName;
}

const Svg: FC<Props> = (props) => {
  const { name, ...rest } = props;
  const Icon = useMemo(() => icons[name], [name]);

  return <Icon {...rest} />;
};

export default Svg;
