import { Box } from '@mui/material';

function MuiLayout() {
  return (
    <>
      {/* Box component */}
      <Box>
        <Box marginTop='25px'>Code Evolution</Box>

        {/* using component prop to denote the type of Box component */}
        <Box component='span'>Code Evolution</Box>

        {/* using sx prop to define custom inline style */}
        <Box marginTop='25px' sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'primary.light'
          }
        }}>
          Code Evolution
        </Box>
      </Box>
    </>
  )
}

export default MuiLayout;