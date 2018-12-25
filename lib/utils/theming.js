const objectToRgba = ({r, g, b, a = 1.0}) => {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

// Colors are generated here: https://www.colorbox.io/#steps=10#hue_start=238#hue_end=221#hue_curve=easeOutQuad#sat_start=1#sat_end=60#sat_curve=easeInQuad#sat_rate=163#lum_start=100#lum_end=2#lum_curve=easeInOutQuint#lock_hex=201b68

const colors = {
  white: {r: 251, g: 251, b: 255},
  offwhite: {r: 227, g: 228, b: 255},
  lightestPrimary: {r: 196, g: 197, b: 255},
  lighterPrimary: {r: 156, g: 156, b: 252},
  primary: {r: 108, g: 104, b: 230},
  accent: {r: 32, g: 27, b: 104},
  darkerPrimary: {r: 4, g: 7, b: 26},
  darkestPrimary: {r: 1, g: 4, b: 13},
  offblack: {r: 0, g: 2, b: 5},
  black: {r: 0, g: 1, b: 3},
}

const theme = {
  breakpointMobile: '0px',
  breakpointTabletPortrait: '600px',
  breakpointTabletLandscape: '900px',
  breakpointDesktop: '1200px',
  breakpointBigDesktop: '1800px',

  colorBlank: objectToRgba(colors.offwhite),
  colorInteractable: objectToRgba(colors.accent),
  colorInteracted: objectToRgba(colors.primary),
  colorMuted: objectToRgba(colors.lighterPrimary),
  colorPrint: objectToRgba(colors.black),
  colorShadow: objectToRgba(colors.lightestPrimary),

  gradientAccentPrimary: `linear-gradient(-18deg, ${objectToRgba(
    colors.accent
  )}, ${objectToRgba(colors.primary)})`,

  roundedCorner: '0.1em',
  roundedCornerInteractable: '1em',

  spacingDivider: '0.1em',
  spacingThin: '0.4em',
  spacingNormal: '0.8em',
  spacingWide: '2.4em',
  spacingMassive: '3.2em',

  fontFamilySanSerif: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  fontFamilyFixedWidth: `Menlo, Monaco, 'Courier New', monospace`,

  fontWeightCopy: 400,
  fontWeightStrong: 700,

  bodyBackground: objectToRgba(colors.white),
}

export const defaultTheme = Object.freeze(theme)
