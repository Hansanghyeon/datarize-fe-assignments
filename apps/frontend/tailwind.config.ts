import { type Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import animation from 'tailwindcss-animate'

const datarizeTypography = plugin(({ addUtilities }) => {
  addUtilities({
    '.typo-caption': {
      fontSize: 'calc((12px)* var(--fontScale, 1))',
      lineHeight: 'calc((18px)* var(--fontScale, 1))',
    },
    '.typo-overline': {
      fontSize: 'calc((10px)* var(--fontScale, 1))',
      lineHeight: 'calc((16px)* var(--fontScale, 1))',
    },
    '.typo-h1-sub': {
      fontSize: 'calc((20px)* var(--fontScale, 1))',
      lineHeight: 'calc((34px)* var(--fontScale, 1))',
    },
    '.typo-h2-sub': {
      fontSize: 'calc((18px)* var(--fontScale, 1))',
      lineHeight: 'calc((32px)* var(--fontScale, 1))',
    },
    '.typo-h3-sub': {
      fontSize: 'calc((16px)* var(--fontScale, 1))',
      lineHeight: 'calc((28px)* var(--fontScale, 1))',
    },
    '.typo-h4-sub': {
      fontSize: 'calc((15px)* var(--fontScale, 1))',
      lineHeight: 'calc((24px)* var(--fontScale, 1))',
    },
    '.typo-h5-sub': {
      fontSize: 'calc((14px)* var(--fontScale, 1))',
      lineHeight: 'calc((24px)* var(--fontScale, 1))',
    },
    '.typo-h6-sub': {
      fontSize: 'calc((13px)* var(--fontScale, 1))',
      lineHeight: 'calc((22px)* var(--fontScale, 1))',
    },
    '.typo-h1': {
      fontSize: 'calc((68px)* var(--fontScale, 1))',
      lineHeight: 'calc((102px)* var(--fontScale, 1))',
    },
    '.typo-h2': {
      fontSize: 'calc((56px)* var(--fontScale, 1))',
      lineHeight: 'calc((88px)* var(--fontScale, 1))',
    },
    '.typo-h3': {
      fontSize: 'calc((48px)* var(--fontScale, 1))',
      lineHeight: 'calc((72px)* var(--fontScale, 1))',
    },
    '.typo-h4': {
      fontSize: 'calc((42px)* var(--fontScale, 1))',
      lineHeight: 'calc((62px)* var(--fontScale, 1))',
    },
    '.typo-h5': {
      fontSize: 'calc((32px)* var(--fontScale, 1))',
      lineHeight: 'calc((48px)* var(--fontScale, 1))',
    },
    '.typo-h6': {
      fontSize: 'calc((24px)* var(--fontScale, 1))',
      lineHeight: 'calc((36px)* var(--fontScale, 1))',
    },
  })
})

export default {
  darkMode: ['selector', 'class'],
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2.5rem',
        xl: '2.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Pretendard"',
          '"Inter"',
          '"ui-sans-serif"',
          '"system-ui"',
          '"sans-serif"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        brand: {
          100: '#FCFFDB',
          200: '#FBFFC2',
          300: '#F9FFA8',
          400: '#F9FFA8',
          500: '#F7FF91',
          600: '#F7FF05',
          700: '#FAFA00',
          800: '#FFF23D',
          900: '#FFE924',
          1000: '#FFDE0A',
          1100: '#FAD400',
          1200: '#F5CC00',
        },
      },
    },
  },
  plugins: [animation, datarizeTypography],
} satisfies Config
