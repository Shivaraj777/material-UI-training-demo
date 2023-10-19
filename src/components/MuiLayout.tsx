import { Box, Stack, Divider } from '@mui/material';

function MuiLayout() {
  return (
    <>
      {/* Stack component */}
      <Stack spacing={4} direction='row' sx={{ border: '1px solid' }} divider={<Divider orientation='vertical' flexItem/>}>
        <Stack spacing={2}>Hello</Stack>
        <Stack spacing={2}>Hello</Stack>
        <Stack spacing={2}>Hello</Stack>
      </Stack>


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