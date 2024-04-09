import * as solidIcons from '@fortawesome/free-solid-svg-icons'

const allIconKeys = Object.keys(solidIcons)

// @ts-ignore
export const faIcons = allIconKeys.map(iconKey => solidIcons[iconKey])
