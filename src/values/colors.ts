const COLORS = {
  cameraBackGround: '#07244D',
  socialBG: '#ECECEC',
  black: '#000',
  white: '#fff',
  pink: '#FFE3CC',
  alfaBlack: 'rgba(0, 0, 0, 0.8)',
  lightGrey: '#DDDDDD',
  grey: '#B4B4B4',
  red: '#ff0000',
  warning: '#CC0505',
  textGrey: '#999da1',
  orange: '#ffc007',
  primary: '#0287ff',
  errorRed: '#F23005',
};

export default COLORS;

export type TThemeColor = keyof typeof COLORS;
