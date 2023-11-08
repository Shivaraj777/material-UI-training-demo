import { Box } from '@mui/material';

function MuiResponsiveness() {
  return (
    // to add responsive values for a css shorthand property we can use break point syntax as shown below
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
        backgroundColor: 'text.primary'
      }}
    >

    </Box>
  )
}

export default MuiResponsiveness;