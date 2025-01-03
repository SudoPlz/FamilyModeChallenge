// Types
interface spacingType {
  borderRadius: number;
  layoutPaddingH: number;
  containerPaddingV: number;
  cardMarginB: number;
}

interface typeSizesType {
  FONT_SIZE_SMALL: number;
  FONT_SIZE_MEDIUM: number;
  FONT_SIZE_LARGE: number;
  FONT_WEIGHT_LIGHT: number;
  FONT_WEIGHT_MEDIUM: number;
  FONT_WEIGHT_HEAVY: number;
}

export interface themeType {
  name: string;
  color: string;
  inactiveColor: string;
  primary: string;
  layoutBg: string;
  cardBg: string;
  cardBorderColor: string;
  accent: string;
  error: string;
}

interface themesType {
  light: themeType;
  dark: themeType;
}

// Spacing:- Common margins and paddings
const spacing: spacingType = {
  borderRadius: 16,
  layoutPaddingH: 16,
  containerPaddingV: 22,
  cardMarginB: 16,
};

// Type Sizes:- Font sizes and weights
const typeSizes: typeSizesType = {
  FONT_SIZE_LARGE: 16,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_SMALL: 12,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 700,
};

const typeVariants = {
  titleLarge: {
    fontFamily: 'Poppins-Bold',
    fontSize: typeSizes.FONT_SIZE_LARGE,
  },
  titleSmall: {
    fontFamily: 'Poppins-Bold',
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
  bodyMedium: {
    fontFamily: 'Poppins-Regular',
    fontSize: typeSizes.FONT_SIZE_MEDIUM,
  },
  bodySmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: typeSizes.FONT_SIZE_SMALL,
  },
};

// Themes:- Can alter values here. Can only be consumed through Context (see useTheme.js file)
const themes: themesType = {
  light: {
    name: 'light',
    color: '#FFFFFF',
    inactiveColor: '#ADB3C5',
    primary: '#2bbca2',
    layoutBg: '#000000',
    cardBg: '#151515',
    cardBorderColor: '#EEECEC',
    accent: '#143F99',
    error: '#B00020',
  },
  dark: {
    name: 'dark',
    color: '#ffffff',
    inactiveColor: '#ADB3C5',
    primary: '#2bbca2',
    layoutBg: '#121212',
    cardBg: '#1e1e1e',
    cardBorderColor: '#1A1A1A',
    accent: '#143F99',
    error: '#B00020',
  },
};

export { spacing, typeSizes, typeVariants, themes };
