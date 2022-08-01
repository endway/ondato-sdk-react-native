import React, { FC, useMemo } from 'react';
import { SvgProps } from 'react-native-svg';

import Close = require('../../assets/svg/close.svg');
import QuitConfirmation = require('../../assets/svg/quit-confirmation.svg');
import Iso = require('../../assets/svg/iso.svg');
import IBeta = require('../../assets/svg/ibeta.svg');
import Gdpr = require('../../assets/svg/gdpr.svg');
import Document = require('../../assets/svg/onboarding-document.svg');
import PhotoDocument = require('../../assets/svg/onboarding-photo-document.svg');
import Selfie = require('../../assets/svg/onboarding-selfie.svg');
import Help = require('../../assets/svg/help.svg');
import ArrowRight = require('../../assets/svg/arrow-right.svg');
import Error = require('../../assets/svg/error.svg');
import Logo = require('../../assets/svg/logo.svg');
import Success = require('../../assets/svg/success.svg');
import Danger = require('../../assets/svg/danger.svg');
import IdCard = require('../../assets/svg/id-card.svg');
import Passport = require('../../assets/svg/passport.svg');
import DrivingLicense = require('../../assets/svg/driving-license.svg');
import IdCardFront = require('../../assets/svg/id-card-front.svg');
import IdCardBack = require('../../assets/svg/id-card-back.svg');
import DrivingLicenseFront = require('../../assets/svg/driving-license-front.svg');
import DrivingLicenseBack = require('../../assets/svg/driving-license-back.svg');
import PassportFront = require('../../assets/svg/passport-front.svg');
import SelfieFront = require('../../assets/svg/selfie-front.svg');
import DocumentWithSelfieFront = require('../../assets/svg/document-with-selfie-front.svg');
import DocumentWithSelfieFrontFrameWhite = require('../../assets/svg/document-with-selfie-front-frame-white.svg');
import IdCardFrontFrame = require('../../assets/svg/id-card-front-frame.svg');
import IdCardBackFrame = require('../../assets/svg/id-card-back-frame.svg');
import DrivingLicenseFrontFrame = require('../../assets/svg/driving-license-front-frame.svg');
import DrivingLicenseBackFrame = require('../../assets/svg/driving-license-back-frame.svg');
import PassportFrontFrame = require('../../assets/svg/passport-front-frame.svg');
import CardTooBlurry = require('../../assets/svg/card-too-blurry.svg');
import CardTooSmall = require('../../assets/svg/card-too-small.svg');
import CardTooDark = require('../../assets/svg/card-too-dark.svg');
import PassportTooBlurry = require('../../assets/svg/passport-too-blurry.svg');
import PassportTooSmall = require('../../assets/svg/passport-too-small.svg');
import PassportTooDark = require('../../assets/svg/passport-too-dark.svg');
import SelfieTooBlurry = require('../../assets/svg/selfie-too-blurry.svg');
import SelfieBadLighting = require('../../assets/svg/selfie-bad-lighting.svg');
import SelfieNotNeutral = require('../../assets/svg/selfie-not-neutral.svg');
import DrivingLicenseFrontFrameWhite = require('../../assets/svg/driving-license-front-frame-white.svg');
import DrivingLicenseBackFrameWhite = require('../../assets/svg/driving-license-back-frame-white.svg');
import IdCardFrontFrameWhite = require('../../assets/svg/id-card-front-frame-white.svg');
import IdCardBackFrameWhite = require('../../assets/svg/id-card-back-frame-white.svg');
import PassportFrontFrameWhite = require('../../assets/svg/passport-front-frame-white.svg');
import DangerTriangle = require('../../assets/svg/danger-triangle.svg');

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
