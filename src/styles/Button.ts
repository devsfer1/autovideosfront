import { MantineThemeOverride, MantineProvider, ButtonStylesParams, createStyles } from '@mantine/core'

//Example of theme creation
export const useButtonStyles = createStyles((theme) => ({
  root: {
    backgroundColor: 'black',
  },
  black: {
    backgroundColor: 'black',
  },
  blue: {
    backgroundColor: 'blue',
  },
}))

// export default useButtonStyles
