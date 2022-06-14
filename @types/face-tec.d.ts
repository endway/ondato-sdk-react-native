declare module 'react-native-facetec-zoom' {
  export interface InitializeConfig {
    licenseKey: string;
  }

  export const initialize: (config: InitializeConfig) => Promise;
  export const verify: (id: string) => Promise;
}
