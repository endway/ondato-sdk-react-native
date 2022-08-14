# Ondato React Native SDK

## Overview

This SDK provides a drop-in set of screens and tools for Android and iOS applications to allow capturing of identity documents and face photos/live videos for the purpose of identity verification. The SDK offers a number of benefits to help you create the best onboarding/identity verification experience for your customers:

- Carefully designed UI to guide your customers through the entire photo/video-capturing process
- Modular design to help you seamlessly integrate the photo/video-capturing process into your application flow
- Advanced image quality detection technology to ensure the quality of the captured images meets the requirement of the Ondato identity verification process, guaranteeing the best success rate
- Direct image upload to the Ondato service, to simplify integration\*

Note: the SDK is only responsible for capturing and uploading photos/videos. You still need to access the Ondato API to create and manage checks.

SDK supports iOS 12.0 and up, Android from 5.0.0 version and up.

### 1. Adding the SDK dependency

```npm install --save ondato-sdk-react-native```

```npm install --save https://github.com/ondato/ondato-sdk-react-native```

### 2. Creating the SDK configuration


| Prop                   | Default              | Type              |
|------------------------|----------------------|-------------------|
| identityVerificationId | -                    | string            |
| onError                | -                    | func              |
| onSuccess              | -                    | func              |
| onClose                | -                    | func              |
| SuccessScreen          | SuccessScreen.tsx    | FC                |
| LoadingScreen          | LoadingScreen.tsx    | FC                |
| OnboardingScreen       | OnboardingScreen.tsx | FC                |
| isConsentEnabled       | true                 | boolean           |
| isOnboardingEnabled    | true                 | boolean           |
| isLoggingEnabled       | true                 | boolean           |
| locale                 | en                   | Locales           |
| theme                  | lightTheme           | ConfigurableTheme |

### 3. Customising SDK

#### 1. Loading Screen
You can override the default fragment used to show loading state by setting `LoadingScreen` prop when initializing.

#### 2. Onboarding Screen
You can override the default fragment used to start the verification process by setting `OnboardingScreen` with your own implementation of `OnboardingScreen`. Note that, when custom onboarding screen is used, it is up to you to start the verification process. Custom start fragment can start it by calling provided callback.

#### 3. Success Screen
You can define custom success screen which is shown when user data is successfully submitted. Set it using `SuccessScreen` and pass your `SuccessScreen` implementation. When success screen is override is up to you to call the provided callback, so the process can continue.

#### 4. Localisation
Ondato Android SDK already comes with out-of-the-box translations for the following locales:
- English (en) 🇬🇧
- Lithuanian (lt) 🇱🇹
- German (de) 🇩🇪
- Latvian (lv) 🇱🇻
- Estonian (et) 🇪🇪
- Russian (ru) 🇷🇺
- Albanian (sq) 🇦🇱
- System ⚙️ (if device language is not translated, everything will be in English) 


#### 5. Theme Customization
In order to enhance the user experience on the transition between your application and the SDK, you can provide some customisation by defining certain colors inside your own theme:


#### ConfigurableTheme

| Prop   | Default | Type               |
|--------|---------|--------------------|
| colors | -       | ConfigurableColors |

#### ConfigurableColors

| Prop       | Default   | Type   |
|------------|-----------|--------|
| text       | `#2B2B2B` | string |
| primary    | `#FE5A27` | string |
| background | `#FFFFFF` | string |

### 4. Starting the flow

```typescript jsx
import React, { FC } from 'react';
import OndatoSDK, { ConfigurableTheme } from 'ondato-sdk-react-native';

const App: FC = () => {
  const identityVerificationId = '<Your identitity verification id>';
  
  const theme: ConfigurableTheme = {
    colors: {
      text: '#FFFFFF',
      background: '#000000',
      primary: '#EEEEEE',
    },
  };
  
  const onSuccess = () => {
    // Handle identification process success case
  };

  const onError = () => {
    // Handle identification process error case
  };

  const onClose = () => {
    // Handle identification process close case
  };

  return (
    <OndatoSDK
      onSuccess={onSuccess}
      onError={onError}
      onClose={onClose}
      theme={theme} 
      identityVerificationId={identityVerificationId} 
    />
  );
};

export default App;
```
