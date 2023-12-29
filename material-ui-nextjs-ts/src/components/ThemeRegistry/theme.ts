import { createTheme } from '@mui/material/styles'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: { mode: 'dark' },
  typography: { fontFamily: rajdhani.style.fontFamily },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
})

export default theme
