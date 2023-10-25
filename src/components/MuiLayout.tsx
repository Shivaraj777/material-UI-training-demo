import { Box, Stack, Divider, Grid, Paper } from '@mui/material';

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

      {/* Grid component */}
      <Grid container marginTop='25px' spacing={2}>
        <Grid item>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>

      {/* Assign width of 6 colums to grid items */}
      <Grid container marginTop='25px' rowSpacing={2} columnSpacing={3}>
        <Grid item xs={6} sm={4}>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>

      {/* Assign auto width */}
      <Grid container marginTop='25px' marginBottom='25px'>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>Item 1</Box>
        </Grid>
        <Grid item xs='auto'>
          <Box bgcolor='primary.light' p={2}>Item 2</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>Item 3</Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor='primary.light' p={2}>Item 4</Box>
        </Grid>
      </Grid>

      {/* Paper component */}
      <Paper>
        <Grid container>
          <Grid item sm={6}>
            <Box bgcolor='primary' p={2}>Card 1</Box>
          </Grid>
          <Grid item sm={6}>
            <Box bgcolor='primary' p={2}>Card 1</Box>
          </Grid>
          <Grid item sm={6}>
            <Box bgcolor='primary' p={2}>Card 1</Box>
          </Grid>
          <Grid item sm={6}>
            <Box bgcolor='primary' p={2}>Card 1</Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default MuiLayout;