import { Link, Stack, Typography } from '@mui/material';

function MuiLink() {
  return (
    <Stack spacing={2} direction='row' m={4}>
      <Link href='#'>Link</Link>
      <Link href='#' color='secondary'>Secondary</Link>
      <Link href='#' color='error' underline='hover'>Underline effect on hover</Link>
      <Link href='#' color='error' underline='none'>No underline effect</Link>
      <Typography variant='h5'>
        <Link href='#' color='secondary'>With Typography</Link>
      </Typography>
      <Link href='#' variant='h6'>Without Typography</Link>
    </Stack>
  )
}

export default MuiLink;