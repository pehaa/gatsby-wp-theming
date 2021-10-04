// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = {
  colors: {
    brand: {
      50: '#ffe7e7',
      100: 'hsl(5, 65.6%, 50%)',
      200: 'hsl(5, 65.6%, 35%)',
      300: 'hsl(5, 65.6%, 40%)',
      400: 'hsl(5, 65.6%, 45%)',
      500: 'hsl(5, 65.6%, 50%)',
      600: 'hsl(5, 65.6%, 55%)',
      700: 'hsl(5, 65.6%, 60%)',
      800: 'hsl(5, 65.6%, 65%)',
      900: 'hsl(5, 65.6%, 70%)',
    },
  },
  fonts: {
    body: 'Karma, sans-serif',
    heading: 'Poppins, sans-serif',
  },
  sizes: {
    defaultContent: '50rem',
    fullContent: '100%',
    wideContent: 'min(60rem, calc(100% - 4rem))',
  },
  components: {
    Container: {
      baseStyle: {
        maxWidth: 'defaultContent',
        px: [4, 4, 0],
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'heading',
        fontWeight: 'normal',
        borderRadius: '3xl',
        fontSize: 'sm',
      },
      sizes: {
        xs: {
          fontSize: 'xs',
          px: 4,
        },
        md: {
          fontSize: 'sm',
          px: 8,
        },
      },
      defaultProps: {
        colorScheme: 'brand',
      },
    },
  },
  styles: {
    global: {
      body: {
        color: 'gray.700',
        fontSize: 'xl',
      },
      a: {
        transition: 'color .3s',
      },
      'a:not(.chakra-button):hover': {
        textDecoration: 'underline',
        color: 'brand.500',
      },
      p: {
        mb: 4,
      },
    },
  },
}

export default extendTheme(theme)
