import styled from 'react-emotion'
import theme from 'theme'

const getColor = ({ theme, color }) => {
  const colors = {
    dark: theme.color.text.dark,
    light: theme.color.text.light,
    teal: theme.color.text.teal,
    danger: theme.color.text.danger,
    primary: theme.color.text.primary,
    overlay: theme.color.text.overlay,
    warning: theme.color.text.warning,
    accent: theme.color.text.accent,
    gold: theme.color.text.gold
  }

  if (color) {
    return colors[color]
  } else {
    return colors['primary']
  }
}

export const Text = styled.p(
  {
    transition: 'all .2s linear',
    margin: 0
  },
  ({
    theme,
    color,
    size,
    weight,
    lineHeight,
    align,
    currency,
    truncate,
    nowrap,
    serif,
    uppercase,
    italic
  }) => ({
    color: getColor({ theme, color }),
    fontWeight: weight ? weight : 400,
    fontSize: size ? size : 18,
    lineHeight: lineHeight ? `${lineHeight}px` : '24px',
    textAlign: align ? align : 'inherit',
    fontFamily: serif ? theme.font.serif : theme.font.sans,
    whiteSpace: truncate || nowrap ? 'nowrap' : 'inherit',
    overflow: truncate ? 'hidden' : 'inherit',
    textOverflow: truncate ? 'ellipsis' : 'inherit',
    textTransform: uppercase ? 'uppercase' : 'inherit',
    fontStyle: italic ? 'italic' : 'inherit',
    ':first-letter': {
      fontSize: currency ? size / 3 : 'inherit',
      lineHeight: currency ? `${size / 2}px` : 'inherit',
      verticalAlign: currency ? 'top' : 'inherit'
    }
  })
)

export const Span = Text.withComponent('span')

export const ResponsiveText = styled.p(
  {
    transition: 'all .2s linear',
    margin: 0
  },
  ({ theme, color, weight, breakpoint, max, min, currency, nowrap }) => ({
    color: getColor({ theme, color }),
    fontSize: `${max}px`,
    lineHeight: `${max}px`,
    fontFamily: theme.font.sans,
    fontWeight: weight ? weight : 400,
    whiteSpace: nowrap ? 'nowrap' : 'inherit',
    ':first-letter': {
      fontSize: currency ? max / 3 : 'inherit',
      lineHeight: currency ? `${max / 2}px` : 'inherit',
      verticalAlign: currency ? 'top' : 'inherit'
    },
    [`@media only screen and (max-width: ${breakpoint}px)`]: {
      fontSize: `${max / (breakpoint / 100)}vw`,
      lineHeight: `${max / (breakpoint / 100)}vw`,
      ':first-letter': {
        fontSize: currency ? `${max / (breakpoint / 100) / 3}vw` : 'inherit',
        lineHeight: currency ? `${max / (breakpoint / 100) / 2}vw` : 'inherit',
        verticalAlign: currency ? 'top' : 'inherit'
      }
    },
    [`@media only screen and (max-width: ${(min / (max / (breakpoint / 100))) *
      100}px)`]: {
      fontSize: `${min}px`,
      lineHeight: `${min}px`,
      ':first-letter': {
        fontSize: currency ? min / 3 : 'inherit',
        lineHeight: currency ? `${min / 2}px` : 'inherit',
        verticalAlign: currency ? 'top' : 'inherit'
      }
    }
  })
)
