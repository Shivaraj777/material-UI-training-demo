import { PaletteColor, PaletteColorOptions, ThemeOptions } from "@mui/material";

// this module is updated to add status property in custom theme
declare module '@mui/material/styles' {
  interface Theme{
    status: {
      danger: string
    }
  }

  interface ThemeOptions{
    status: {
      danger: React.CSSProperties['color']
    }
  }

  interface Palette {
    neutral?: PaletteColor
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions
  }

  interface SimplePaletteColorOptions {
    dark?: string
  }

  interface PaletteColor {
    dark?: string
  }
}