import React, { FC, useMemo } from 'react';
import { SvgProps } from 'react-native-svg';

const Close = require('../../assets/svg/close.svg');
const QuitConfirmation = require('../../assets/svg/quit-confirmation.svg');
const Iso = require('../../assets/svg/iso.svg');
const IBeta = require('../../assets/svg/ibeta.svg');
const Gdpr = require('../../assets/svg/gdpr.svg');
const Document = require('../../assets/svg/onboarding-document.svg');
const PhotoDocument = require('../../assets/svg/onboarding-photo-document.svg');
const Selfie = require('../../assets/svg/onboarding-selfie.svg');
const Help = require('../../assets/svg/help.svg');
const ArrowRight = require('../../assets/svg/arrow-right.svg');
const Error = require('../../assets/svg/error.svg');
const Logo = require('../../assets/svg/logo.svg');
const Success = require('../../assets/svg/success.svg');
const Danger = require('../../assets/svg/danger.svg');
const IdCard = require('../../assets/svg/id-card.svg');
const Passport = require('../../assets/svg/passport.svg');
const DrivingLicense = require('../../assets/svg/driving-license.svg');
const IdCardFront = require('../../assets/svg/id-card-front.svg');
const IdCardBack = require('../../assets/svg/id-card-back.svg');
const DrivingLicenseFront = require('../../assets/svg/driving-license-front.svg');
const DrivingLicenseBack = require('../../assets/svg/driving-license-back.svg');
const PassportFront = require('../../assets/svg/passport-front.svg');
const SelfieFront = require('../../assets/svg/selfie-front.svg');
const DocumentWithSelfieFront = require('../../assets/svg/document-with-selfie-front.svg');
const DocumentWithSelfieFrontFrameWhite = require('../../assets/svg/document-with-selfie-front-frame-white.svg');
const IdCardFrontFrame = require('../../assets/svg/id-card-front-frame.svg');
const IdCardBackFrame = require('../../assets/svg/id-card-back-frame.svg');
const DrivingLicenseFrontFrame = require('../../assets/svg/driving-license-front-frame.svg');
const DrivingLicenseBackFrame = require('../../assets/svg/driving-license-back-frame.svg');
const PassportFrontFrame = require('../../assets/svg/passport-front-frame.svg');
const CardTooBlurry = require('../../assets/svg/card-too-blurry.svg');
const CardTooSmall = require('../../assets/svg/card-too-small.svg');
const CardTooDark = require('../../assets/svg/card-too-dark.svg');
const PassportTooBlurry = require('../../assets/svg/passport-too-blurry.svg');
const PassportTooSmall = require('../../assets/svg/passport-too-small.svg');
const PassportTooDark = require('../../assets/svg/passport-too-dark.svg');
const SelfieTooBlurry = require('../../assets/svg/selfie-too-blurry.svg');
const SelfieBadLighting = require('../../assets/svg/selfie-bad-lighting.svg');
const SelfieNotNeutral = require('../../assets/svg/selfie-not-neutral.svg');
const DrivingLicenseFrontFrameWhite = require('../../assets/svg/driving-license-front-frame-white.svg');
const DrivingLicenseBackFrameWhite = require('../../assets/svg/driving-license-back-frame-white.svg');
const IdCardFrontFrameWhite = require('../../assets/svg/id-card-front-frame-white.svg');
const IdCardBackFrameWhite = require('../../assets/svg/id-card-back-frame-white.svg');
const PassportFrontFrameWhite = require('../../assets/svg/passport-front-frame-white.svg');
const DangerTriangle = require('../../assets/svg/danger-triangle.svg');

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
