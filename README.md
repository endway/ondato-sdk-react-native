# Ondato React Native SDK

## Overview

This SDK provides a drop-in set of screens and tools for Android and iOS applications to allow capturing of identity documents and face photos/live videos for the purpose of identity verification. The SDK offers a number of benefits to help you create the best onboarding/identity verification experience for your customers:

- Carefully designed UI to guide your customers through the entire photo/video-capturing process
- Modular design to help you seamlessly integrate the photo/video-capturing process into your application flow
- Advanced image quality detection technology to ensure the quality of the captured images meets the requirement of the Ondato identity verification process, guaranteeing the best success rate
- Direct image upload to the Ondato service, to simplify integration\*

Note: the SDK is only responsible for capturing and uploading photos/videos. You still need to access the Ondato API to create and manage checks.

SDK supports iOS 12.0 and up, Android from 5.0.0 version and up.

## Android integration

### 1. Adding the SDK dependency

Add repository to project level build.gradle file: 
reikia kodo pavyzdzio

Add SDK dependency to module level build.gradle file:
reikia kodo pavyzdzio

### 2. Creating the SDK configuration

Create an `OndatoConfig` using your Client Id, along with the Client secret, and Setup Id. Choose mode of: "TEST" and "LIVE" environment, default mode is TEST. 

reikia kodo pavyzdzio

Regarding all needed configurations, please, contact Ondato support team support@ondato.com to check if your account is configured accordingly.

### 3. Customising SDK

#### 1. Loading Screen
You can override the default fragment used to show loading state by setting `.setLoadingScreenProvider()` when building config.

reikia kodo pavyzdzio kaip vadinasi `.setLoadingScreenProvider()`

#### 2. Start Screen
You can override the default fragment used to start the verification process by setting `.setStartScreenProvider()` with your own implementation of `StartScreenProvider`. Note that, when custom start screen is used, it is up to you to start the verification process. Custom start fragment can start it by calling provided callback.

reikia kodo pavyzdzio kaip vadinasi `StartScreenProvider`

#### 3. Success Screen
You can define custom success screen which is shown when user data is successfully submited. Set it using `.setsetSuccessScreenProvider()` and pass your `SuccessScreenProvider` implementation. When success screen is overriden is up to you to call the provided callback, so the process can continue.

reikia kodo pavyzdzio kaip vadinasi `.setsetSuccessScreenProvider()`

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
In order to enhance the user experience on the transition between your application and the SDK, you can provide some customisation by defining certain colors inside your own colors.xml file:

reikia kodo pavyzdzio

### 4. Starting the flow

reikia kodo pavyzdzio

## iOS integration

### 1. Adding the SDK dependency

Add repository to project level build.gradle file:
reikia kodo pavyzdzio

Add SDK dependency to module level build.gradle file:
reikia kodo pavyzdzio

### 2. Creating the SDK configuration

Create an `OndatoConfig` using your Client Id, along with the Client secret, and Setup Id. Choose mode of: "TEST" and "LIVE" environment, default mode is TEST. 

reikia kodo pavyzdzio

Regarding all needed configurations, please, contact Ondato support team support@ondato.com to check if your account is configured accordingly.

### 3. Customising SDK

#### 1. Loading Screen
You can override the default fragment used to show loading state by setting `.setLoadingScreenProvider()` when building config.

reikia kodo pavyzdzio kaip vadinasi `.setLoadingScreenProvider()`

#### 2. Start Screen
You can override the default fragment used to start the verification process by setting `.setStartScreenProvider()` with your own implementation of `StartScreenProvider`. Note that, when custom start screen is used, it is up to you to start the verification process. Custom start fragment can start it by calling provided callback.

reikia kodo pavyzdzio kaip vadinasi `StartScreenProvider`

#### 3. Success Screen
You can define custom success screen which is shown when user data is successfully submited. Set it using `.setsetSuccessScreenProvider()` and pass your `SuccessScreenProvider` implementation. When success screen is overriden is up to you to call the provided callback, so the process can continue.

reikia kodo pavyzdzio kaip vadinasi `.setsetSuccessScreenProvider()`

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
In order to enhance the user experience on the transition between your application and the SDK, you can provide some customisation by defining certain colors inside your own colors.xml file:

reikia kodo pavyzdzio

### 4. Starting the flow

reikia kodo pavyzdzio
