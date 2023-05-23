import {StyleSheet} from 'react-native';

const transparentColors = {
  black50: 'rgba(0,0,0,0.5)',
};
const colors = {
  primary: '#00b951',
  secondary: '#e30038',
  black: '#0B0B0B',
  white: '#FFFFFF',
  textBlack800: '#0B0B0B',
  textBlack600: '#1E1E1E',
  textBlack400: '#737373',
  textBlack200: '#C5C5C5',
  textWhite200: '#FAFAFA',
  linkText: '#cf7129',
};

const typography = {
  regular: 'Roboto-Regular',
  italic: 'Roboto-Italic',
  boldItalic: 'Roboto-BoldItalic',
  bold: 'Roboto-Bold',
};

export const baseStyles = {
  colors,
  typography,
  transparentColors,
};

const globalStyles = stylesCallback => {
  return StyleSheet.create(stylesCallback(baseStyles));
};

export default globalStyles;
