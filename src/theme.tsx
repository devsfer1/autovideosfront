import { MantineThemeOverride, MantineProvider, ButtonStylesParams, MantineTheme, Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = 'primary' | 'primary1' | 'primary2' | 'text1' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

const themeObject: MantineThemeOverride = {
  //   colorScheme: 'dark',
  headings: {
    sizes: {
      h1: {
        fontSize: '3rem',
        lineHeight: 1.4,
      },
    },
  },
  colors: {
    'primary': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
    'blue': ['#7434eb', '#7434eb', '#7434eb', '#7434eb', '#7434eb', '#7434eb', '#7434eb', '#7434eb'],
    'primary1': ['#426CFF'],
    'primary2': ['#F0BBDD'],
    'secondary1': ['#F0BBDD'],
    'secondary2': ['#18101D'],
    'text1': ['#F8F8F8'],
    'text2': ['#F0BBDD'],
    'link1': ['#F0BBDD'],
    'link2': ['#F0BBDD'],
    'border1': ['#F0BBDD'],
    'border2': ['#F0BBDD'],
    'textGradient1': ['#F0BBDD'],
    'buttonGradient': ['#F0BBDD'],
  },
  primaryShade: 0,

  spacing: {
    lg: '',
  },

  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1420,
        },
      },
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          height: '2.625rem',
          padding: '0 1.875rem',
          backgroundColor:
            variant === ''
              ? theme.colors[params.color || theme.primaryColor][9]
              : undefined,
        },
      }),
    },
    Button: {
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          backgroundColor: theme.colors.primary1,
          color: theme.colors.text1,
          borderRadius: theme.radius.md,
          ':active': {
            transform: 'none',
          },
        },
      }),
      variants: {
        danger: (theme) => ({
          root: {
            backgroundColor: theme.colors.red[9],
            color: theme.colors.red[0],
            ...theme.fn.hover({ backgroundColor: theme.colors.red[8] }),
          },
        }),
        primary: (theme) => ({
          root: {
            backgroundColor: theme.colors.dark[9],
            color: theme.colors.red[0],
            ...theme.fn.hover({ backgroundColor: theme.colors.dark[9] }),
          },
        }),
        onlyBorder: (theme) => ({
          root: {
            backgroundColor: 'transparent',
            color: 'white',
            border: '1px solid white',
          },
        }),
      },
    },
    Text: {
      styles: (theme, params: ButtonStylesParams, { variant }) => ({
        root: {
          color: theme.colors.text1,
        },
      }),
    },
  },
}

export default themeObject

