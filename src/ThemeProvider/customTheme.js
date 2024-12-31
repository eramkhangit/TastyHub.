import { createTheme } from "@mui/material/styles";  // Correct import from MUI

// Custom Material-UI Theme
const customTheme = createTheme({
  palette: {
    common: {
      linen: '#FAF0E6',
      gold:'#FFD700',
      wind:'#4B0F24',
      darkGreen: '#004225',
      richRed:'#B22222',
      darkBrown:'#341C02',
      softBrown:'#8B4513',
      charcoalGray:'#2C2C2C'
       // Custom color (linen)
    }
  },
});

export default customTheme;  // Correct export
