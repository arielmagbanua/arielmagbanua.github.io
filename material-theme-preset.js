import typography from '@tailwindcss/typography';

export default {
  theme: {
    colors: {
      primary: {
        light: '#904B3E',
        DEFAULT: '#904B3E',
        dark: '#FFB4A6',
        0: '#000000',
        5: '#2B0200',
        10: '#3F0300',
        15: '#520500',
        20: '#660800',
        25: '#781103',
        30: '#891E0D',
        35: '#992A18',
        40: '#AA3622',
        50: '#CB4E38',
        60: '#ED664E',
        70: '#FF8A74',
        80: '#FFB4A6',
        90: '#FFDAD3',
        95: '#FFEDE9',
        98: '#FFF8F6',
        99: '#FFFBFF',
        100: '#FFFFFF',
      },
      'surface-tint': {
        light: '#904B3E',
        DEFAULT: '#904B3E',
        dark: '#FFB4A6',
      },
      'on-primary': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#561E14',
      },
      'primary-container': {
        light: '#FFDAD3',
        DEFAULT: '#FFDAD3',
        dark: '#733428',
      },
      'on-primary-container': {
        light: '#3A0A04',
        DEFAULT: '#3A0A04',
        dark: '#FFDAD3',
      },
      secondary: {
        light: '#775650',
        DEFAULT: '#775650',
        dark: '#E7BDB5',
        0: '#000000',
        5: '#230805',
        10: '#31130D',
        15: '#3D1D16',
        20: '#4A2720',
        25: '#56322B',
        30: '#633D35',
        35: '#714840',
        40: '#7E544B',
        50: '#9A6C63',
        60: '#B6857B',
        70: '#D39F95',
        80: '#F1BAAF',
        90: '#FFDAD3',
        95: '#FFEDE9',
        98: '#FFF8F6',
        99: '#FFFBFF',
        100: '#FFFFFF',
      },
      'on-secondary': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#442A24',
      },
      'secondary-container': {
        light: '#FFDAD3',
        DEFAULT: '#FFDAD3',
        dark: '#5D3F3A',
      },
      'on-secondary-container': {
        light: '#2C1511',
        DEFAULT: '#2C1511',
        dark: '#FFDAD3',
      },
      tertiary: {
        light: '#6F5C2E',
        DEFAULT: '#6F5C2E',
        dark: '#DCC48C',
        0: '#000000',
        5: '#181000',
        10: '#251A00',
        15: '#312400',
        20: '#3E2E00',
        25: '#4B3900',
        30: '#594402',
        35: '#664F0E',
        40: '#735B1A',
        50: '#8E7431',
        60: '#A98E48',
        70: '#C5A85F',
        80: '#E2C377',
        90: '#FFDF94',
        95: '#FFEFD0',
        98: '#FFF8F1',
        99: '#FFFBFF',
        100: '#FFFFFF',
      },
      'on-tertiary': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#3D2E04',
      },
      'tertiary-container': {
        light: '#FAE0A6',
        DEFAULT: '#FAE0A6',
        dark: '#554519',
      },
      'on-tertiary-container': {
        light: '#251A00',
        DEFAULT: '#251A00',
        dark: '#FAE0A6',
      },
      error: {
        light: '#BA1A1A',
        DEFAULT: '#BA1A1A',
        dark: '#FFB4AB',
      },
      'on-error': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#690005',
      },
      'error-container': {
        light: '#FFDAD6',
        DEFAULT: '#FFDAD6',
        dark: '#93000A',
      },
      'on-error-container': {
        light: '#410002',
        DEFAULT: '#410002',
        dark: '#FFDAD6',
      },
      background: {
        light: '#FFF8F6',
        DEFAULT: '#FFF8F6',
        dark: '#1A1110',
      },
      'on-background': {
        light: '#231918',
        DEFAULT: '#231918',
        dark: '#F1DFDB',
      },
      surface: {
        light: '#FFF8F6',
        DEFAULT: '#FFF8F6',
        dark: '#1A1110',
      },
      'on-surface': {
        light: '#231918',
        DEFAULT: '#231918',
        dark: '#F1DFDB',
      },
      'surface-variant': {
        light: '#F5DDD9',
        DEFAULT: '#F5DDD9',
        dark: '#534340',
      },
      'on-surface-variant': {
        light: '#534340',
        DEFAULT: '#534340',
        dark: '#D8C2BD',
      },
      outline: {
        light: '#85736F',
        DEFAULT: '#85736F',
        dark: '#A08C89',
      },
      'outline-variant': {
        light: '#D8C2BD',
        DEFAULT: '#D8C2BD',
        dark: '#534340',
      },
      shadow: {
        light: '#000000',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      scrim: {
        light: '#000000',
        DEFAULT: '#000000',
        dark: '#000000',
      },
      'inverse-surface': {
        light: '#392E2C',
        DEFAULT: '#392E2C',
        dark: '#F1DFDB',
      },
      'inverse-on-surface': {
        light: '#FFEDE9',
        DEFAULT: '#FFEDE9',
        dark: '#392E2C',
      },
      'inverse-primary': {
        light: '#FFB4A6',
        DEFAULT: '#FFB4A6',
        dark: '#904B3E',
      },
      'primary-fixed': {
        light: '#FFDAD3',
        DEFAULT: '#FFDAD3',
        dark: '#FFDAD3',
      },
      'on-primary-fixed': {
        light: '#3A0A04',
        DEFAULT: '#3A0A04',
        dark: '#3A0A04',
      },
      'primary-fixed-dim': {
        light: '#FFB4A6',
        DEFAULT: '#FFB4A6',
        dark: '#FFB4A6',
      },
      'on-primary-fixed-variant': {
        light: '#733428',
        DEFAULT: '#733428',
        dark: '#733428',
      },
      'secondary-fixed': {
        light: '#FFDAD3',
        DEFAULT: '#FFDAD3',
        dark: '#FFDAD3',
      },
      'on-secondary-fixed': {
        light: '#2C1511',
        DEFAULT: '#2C1511',
        dark: '#2C1511',
      },
      'secondary-fixed-dim': {
        light: '#E7BDB5',
        DEFAULT: '#E7BDB5',
        dark: '#E7BDB5',
      },
      'on-secondary-fixed-variant': {
        light: '#5D3F3A',
        DEFAULT: '#5D3F3A',
        dark: '#5D3F3A',
      },
      'tertiary-fixed': {
        light: '#FAE0A6',
        DEFAULT: '#FAE0A6',
        dark: '#FAE0A6',
      },
      'on-tertiary-fixed': {
        light: '#251A00',
        DEFAULT: '#251A00',
        dark: '#251A00',
      },
      'tertiary-fixed-dim': {
        light: '#DCC48C',
        DEFAULT: '#DCC48C',
        dark: '#DCC48C',
      },
      'on-tertiary-fixed-variant': {
        light: '#554519',
        DEFAULT: '#554519',
        dark: '#554519',
      },
      'surface-dim': {
        light: '#E8D6D3',
        DEFAULT: '#E8D6D3',
        dark: '#1A1110',
      },
      'surface-bright': {
        light: '#FFF8F6',
        DEFAULT: '#FFF8F6',
        dark: '#423735',
      },
      'surface-container-lowest': {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#140C0B',
      },
      'surface-container-low': {
        light: '#FFF0EE',
        DEFAULT: '#FFF0EE',
        dark: '#231918',
      },
      'surface-container': {
        light: '#FCEAE6',
        DEFAULT: '#FCEAE6',
        dark: '#271D1C',
      },
      'surface-container-high': {
        light: '#F7E4E1',
        DEFAULT: '#F7E4E1',
        dark: '#322826',
      },
      'surface-container-highest': {
        light: '#F1DFDB',
        DEFAULT: '#F1DFDB',
        dark: '#3D3230',
      },
      neutral: {
        0: '#000000',
        5: '#15100E',
        10: '#201A19',
        15: '#2B2423',
        20: '#362F2D',
        25: '#413A38',
        30: '#4D4543',
        35: '#59504F',
        40: '#655C5B',
        50: '#7F7573',
        60: '#998E8C',
        70: '#B4A9A7',
        80: '#D0C4C1',
        90: '#EDE0DD',
        95: '#FBEEEB',
        98: '#FFF8F6',
        99: '#FFFBFF',
        100: '#FFFFFF',
      },
      'neutral-variant': {
        0: '#000000',
        5: '#190E0C',
        10: '#251916',
        15: '#302320',
        20: '#3B2D2A',
        25: '#473835',
        30: '#534340',
        35: '#5F4F4C',
        40: '#6C5B57',
        50: '#85736F',
        60: '#A08C89',
        70: '#BCA7A3',
        80: '#D8C2BD',
        90: '#F5DDD9',
        95: '#FFEDE9',
        98: '#FFF8F6',
        99: '#FFFBFF',
        100: '#FFFFFF',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [typography],
};
