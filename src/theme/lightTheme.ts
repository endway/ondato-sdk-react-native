import { BorderRadius, BoxShadows, Colors, Fonts, FontSizes, Margins, Paddings, Sizes, Theme } from './types';

const sizes: Sizes = {
  auto: 'auto',
  xxs: 2,
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
  full: '100%',
};

const fontSizes: FontSizes = {
  xs: { fontSize: 14, lineHeight: 20 },
  s: { fontSize: 16, lineHeight: 22 },
  m: { fontSize: 18, lineHeight: 24 },
  l: { fontSize: 20, lineHeight: 24 },
  xl: { fontSize: 24, lineHeight: 28 },
  xxl: { fontSize: 40, lineHeight: 40 },
  xxxl: { fontSize: 72, lineHeight: 72 },
};

const borderRadius: BorderRadius = {
  s: 4,
  m: 8,
  l: 16,
};

const colors: Colors = {
  white: '#FFFFFF',
  black: '#000000',
  danger: '#DC1212',
  grey: '#244D50',
  lightGrey: '#EEEEEE',
  disabled: '#E0E0E0',
  primary: '#FE5A27',
  background: '#FFFFFF',
  text: '#2B2B2B',
};

const fonts: Fonts = {
  primary: {
    regular: {
      fontFamily: 'Metropolis-Regular',
      fontWeight: '400',
    },
    bold: {
      fontFamily: 'Metropolis-Bold',
      fontWeight: '700',
    },
  },
};

const boxShadows: BoxShadows = {
  m: {
    shadowColor: colors.black,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  l: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
};

const margins: Margins = {
  base: {
    auto: { margin: sizes.auto },
    xxs: { margin: sizes.xxs },
    xs: { margin: sizes.xs },
    s: { margin: sizes.s },
    m: { margin: sizes.m },
    l: { margin: sizes.l },
    xl: { margin: sizes.xl },
    xxl: { margin: sizes.xxl },
    full: { margin: sizes.full },
  },
  top: {
    auto: { marginTop: sizes.auto },
    xxs: { marginTop: sizes.xxs },
    xs: { marginTop: sizes.xs },
    s: { marginTop: sizes.s },
    m: { marginTop: sizes.m },
    l: { marginTop: sizes.l },
    xl: { marginTop: sizes.xl },
    xxl: { marginTop: sizes.xxl },
    full: { marginTop: sizes.full },
  },
  bottom: {
    auto: { marginBottom: sizes.auto },
    xxs: { marginBottom: sizes.xxs },
    xs: { marginBottom: sizes.xs },
    s: { marginBottom: sizes.s },
    m: { marginBottom: sizes.m },
    l: { marginBottom: sizes.l },
    xl: { marginBottom: sizes.xl },
    xxl: { marginBottom: sizes.xxl },
    full: { marginBottom: sizes.full },
  },
  left: {
    auto: { marginLeft: sizes.auto },
    xxs: { marginLeft: sizes.xxs },
    xs: { marginLeft: sizes.xs },
    s: { marginLeft: sizes.s },
    m: { marginLeft: sizes.m },
    l: { marginLeft: sizes.l },
    xl: { marginLeft: sizes.xl },
    xxl: { marginLeft: sizes.xxl },
    full: { marginLeft: sizes.full },
  },
  right: {
    auto: { marginRight: sizes.auto },
    xxs: { marginRight: sizes.xxs },
    xs: { marginRight: sizes.xs },
    s: { marginRight: sizes.s },
    m: { marginRight: sizes.m },
    l: { marginRight: sizes.l },
    xl: { marginRight: sizes.xl },
    xxl: { marginRight: sizes.xxl },
    full: { marginRight: sizes.full },
  },
  vertical: {
    auto: { marginVertical: sizes.auto },
    xxs: { marginVertical: sizes.xxs },
    xs: { marginVertical: sizes.xs },
    s: { marginVertical: sizes.s },
    m: { marginVertical: sizes.m },
    l: { marginVertical: sizes.l },
    xl: { marginVertical: sizes.xl },
    xxl: { marginVertical: sizes.xxl },
    full: { marginVertical: sizes.full },
  },
  horizontal: {
    auto: { marginHorizontal: sizes.auto },
    xxs: { marginHorizontal: sizes.xxs },
    xs: { marginHorizontal: sizes.xs },
    s: { marginHorizontal: sizes.s },
    m: { marginHorizontal: sizes.m },
    l: { marginHorizontal: sizes.l },
    xl: { marginHorizontal: sizes.xl },
    xxl: { marginHorizontal: sizes.xxl },
    full: { marginHorizontal: sizes.full },
  },
};

const paddings: Paddings = {
  base: {
    auto: { padding: sizes.auto },
    xxs: { padding: sizes.xxs },
    xs: { padding: sizes.xs },
    s: { padding: sizes.s },
    m: { padding: sizes.m },
    l: { padding: sizes.l },
    xl: { padding: sizes.xl },
    xxl: { padding: sizes.xxl },
    full: { padding: sizes.full },
  },
  top: {
    auto: { paddingTop: sizes.auto },
    xxs: { paddingTop: sizes.xxs },
    xs: { paddingTop: sizes.xs },
    s: { paddingTop: sizes.s },
    m: { paddingTop: sizes.m },
    l: { paddingTop: sizes.l },
    xl: { paddingTop: sizes.xl },
    xxl: { paddingTop: sizes.xxl },
    full: { paddingTop: sizes.full },
  },
  bottom: {
    auto: { paddingBottom: sizes.auto },
    xxs: { paddingBottom: sizes.xxs },
    xs: { paddingBottom: sizes.xs },
    s: { paddingBottom: sizes.s },
    m: { paddingBottom: sizes.m },
    l: { paddingBottom: sizes.l },
    xl: { paddingBottom: sizes.xl },
    xxl: { paddingBottom: sizes.xxl },
    full: { paddingBottom: sizes.full },
  },
  left: {
    auto: { paddingLeft: sizes.auto },
    xxs: { paddingLeft: sizes.xxs },
    xs: { paddingLeft: sizes.xs },
    s: { paddingLeft: sizes.s },
    m: { paddingLeft: sizes.m },
    l: { paddingLeft: sizes.l },
    xl: { paddingLeft: sizes.xl },
    xxl: { paddingLeft: sizes.xxl },
    full: { paddingLeft: sizes.full },
  },
  right: {
    auto: { paddingRight: sizes.auto },
    xxs: { paddingRight: sizes.xxs },
    xs: { paddingRight: sizes.xs },
    s: { paddingRight: sizes.s },
    m: { paddingRight: sizes.m },
    l: { paddingRight: sizes.l },
    xl: { paddingRight: sizes.xl },
    xxl: { paddingRight: sizes.xxl },
    full: { paddingRight: sizes.full },
  },
  vertical: {
    auto: { paddingVertical: sizes.auto },
    xxs: { paddingVertical: sizes.xxs },
    xs: { paddingVertical: sizes.xs },
    s: { paddingVertical: sizes.s },
    m: { paddingVertical: sizes.m },
    l: { paddingVertical: sizes.l },
    xl: { paddingVertical: sizes.xl },
    xxl: { paddingVertical: sizes.xxl },
    full: { paddingVertical: sizes.full },
  },
  horizontal: {
    auto: { paddingHorizontal: sizes.auto },
    xxs: { paddingHorizontal: sizes.xxs },
    xs: { paddingHorizontal: sizes.xs },
    s: { paddingHorizontal: sizes.s },
    m: { paddingHorizontal: sizes.m },
    l: { paddingHorizontal: sizes.l },
    xl: { paddingHorizontal: sizes.xl },
    xxl: { paddingHorizontal: sizes.xxl },
    full: { paddingHorizontal: sizes.full },
  },
};

const lightTheme: Theme = {
  colors,
  sizes,
  fontSizes,
  borderRadius,
  fonts,
  boxShadows,
  paddings,
  margins,
};

export default lightTheme;
