import '@fontsource/karla/500.css';
import '@fontsource/karla/600.css';
import '@fontsource-variable/dm-sans';

// Define the font configurations
const fontConfigs = [
  { name: 'Karla', value: 'karla', fontFamily: '"Karla", sans-serif', weights: [400, 600], isCustom: false },
  { name: 'DM Sans', value: 'dm-sans', fontFamily: '"DM Sans Variable", sans-serif', weights: [400, 500, 600, 700], isCustom: false },
];

export const fontOptions = fontConfigs.map(({ name, value, fontFamily, isCustom }) => ({
  name,
  value,
  fontFamily,
  isCustom,
}));

export type FontOptionKey = typeof fontConfigs[number]['value'];

export interface CustomFont {
  name: string;
  fontFamily: string;
  isCustom: boolean;
}
