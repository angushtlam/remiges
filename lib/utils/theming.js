// Colors are generated here: https://www.colorbox.io/#steps=10#hue_start=238#hue_end=221#hue_curve=easeOutQuad#sat_start=1#sat_end=60#sat_curve=easeInQuad#sat_rate=163#lum_start=100#lum_end=2#lum_curve=easeInOutQuint#lock_hex=201b68
const colors = {
  color90: 'rgb(251, 251, 255)',
  color80: 'rgb(227, 228, 255)',
  color70: 'rgb(196, 197, 255)',
  color60: 'rgb(156, 156, 252)',
  color50: 'rgb(108, 104, 230)',
  color40: 'rgb(32, 27, 104)',
  color30: 'rgb(4, 7, 26)',
  color20: 'rgb(1, 4, 13)',
  color10: 'rgb(0, 2, 5)',
  color0: 'rgb(0, 1, 3)',
}

const theme = {
  ...colors,
  breakpointMobile: '@media screen and (min-width: 0px)',
  breakpointTabletPortrait: '@media screen and (min-width: 600px)',
  breakpointTabletLandscape: '@media screen and (min-width: 900px)',
  breakpointDesktop: '@media screen and (min-width: 1200px)',
  breakpointBigDesktop: '@media screen and (min-width: 1800px)',
  fontA: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Helvetica Neue', Arial, sans-serif`,
  fontB: `'Lucida Console', Monaco, monospace`,
  fontWeightNormal: 400,
  fontWeightStrong: 700,
  gradientA: `linear-gradient(-18deg, ${colors.color40}, ${colors.color30})`,
  round: '0.1em',
  roundInteractable: '1em',
  spaceHairline: '1px',
  spaceHalf: '0.4em',
  space: '0.8em',
  spaceThick: '4em',
  spaceMassive: '8em',
}

export const defaultTheme = Object.freeze(theme)
