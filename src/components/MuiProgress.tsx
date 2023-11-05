import { CircularProgress, LinearProgress, Stack } from '@mui/material';

function MuiProgress() {
  return (
    <Stack spacing={2} p={4}>
      {/* indeterminate Circular progress */}
      <CircularProgress />
      <CircularProgress color='secondary'/>

      {/* determinate circular progress */}
      <CircularProgress variant='determinate' value={60} color='secondary'/>

      {/* Linear progress */}
      <LinearProgress />
      <LinearProgress color='secondary' />

      {/* determinate linear progress */}
      <LinearProgress variant='determinate' value={60} color='secondary' />
    </Stack>
  )
}

export default MuiProgress;