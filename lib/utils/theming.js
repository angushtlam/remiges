const objectToRgba = ({r, g, b, a = 1.0}) => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

// Colors are generated here: https://www.colorbox.io/#steps=9#hue_start=257#hue_end=244#hue_curve=easeOutQuad#sat_start=2#sat_end=37#sat_curve=easeInQuad#sat_rate=163#lum_start=94#lum_end=1#lum_curve=easeInSine#lock_hex=7B63F6
const colors = {
  white: {r: 244, g: 242, b: 250},
  offwhite: {r: 234, g: 232, b: 240},
  lightestPrimary: {r: 207, g: 194, b: 246},
  lighterPrimary: {r: 167, g: 148, b: 245},
  accent: {r: 123, g: 99, b: 246},
  primary: {r: 92, g: 79, b: 180},
  darkerPrimary: {r: 62, g: 55, b: 122},
  darkestPrimary: {r: 36, g: 32, b: 74},
  offblack: {r: 15, g: 14, b: 34},
  black: {r: 1, g: 1, b: 3},
}

const theme = {
  breakpointMobile: '0px',
  breakpointTabletPortrait: '600px',
  breakpointTabletLandscape: '900px',
  breakpointDesktop: '1200px',
  breakpointBigDesktop: '1800px',

  colorBlank: objectToRgba(colors.offwhite),
  colorPrint: objectToRgba(colors.black),
  colorMuted: objectToRgba(colors.lighterPrimary),
  colorShadow: objectToRgba(colors.lightestPrimary),
  colorInteractable: objectToRgba(colors.primary),
  colorInteracted: objectToRgba(colors.darkerPrimary),

  roundedCorner: '0.1em',
  roundedCornerInteractable: '1em',

  spacingDivider: '0.1em',
  spacingThin: '0.4em',
  spacingNormal: '0.8em',
  spacingWide: '2.4em',
  spacingMassive: '3.2em',

  fontFamilySanSerif: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  fontFamilyFixedWidth: `Menlo, Monaco, 'Courier New', monospace`,

  fontWeightThin: 100,
  fontWeightNormal: 400,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  bodyBackground: objectToRgba(colors.white),
  navbarLinkWeight: 700,
}

export const defaultTheme = Object.freeze(theme)
