import { Box } from '@mui/material';
import { styled } from '@mui/material';

// creating a styled box component with the help of styled function
const StyledBox = styled(Box)(({theme}) => ({
  height: '250px',
  width: '250px',
  margin: '25px',
  backgroundColor: theme.palette.neutral?.dark
}));

function MuiResponsiveness() {
  return (
    <>
       {/* to add responsive values for a css shorthand property we can use break point syntax as shown below */}
      <Box
        m={4}
        sx={{
          height: '300px',
          width: {
            xs: '100px',
            sm: '200px',
            md: '300px',
            lg: '400px',
            xl: '500px'
          },
          backgroundColor: 'secondary.main'
        }}
      >
      </Box>

      {/* styled Box component */}
      <StyledBox />
    </>
  )
}

export default MuiResponsiveness;