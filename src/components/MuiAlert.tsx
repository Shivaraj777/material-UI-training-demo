import { Check } from '@mui/icons-material';
import { Alert, AlertTitle, Button, Stack } from '@mui/material';

function MuiAlert() {
  return (
    <Stack spacing={4} p={4}>
      {/* Typees of alerts */}
      <Stack  spacing={2}>
        <Alert severity='error'>This is an error alert!!</Alert>
        <Alert severity='warning'>This is an warning alert!!</Alert>
        <Alert severity='info'>This is an info alert!!</Alert>
        <Alert severity='success'>This is an success alert!!</Alert>
      </Stack>

      {/* With variant outlined */}
      <Stack  spacing={2}>
        <Alert variant='outlined' severity='error'>This is an error alert!!</Alert>
        <Alert variant='outlined' severity='warning'>This is an warning alert!!</Alert>
        <Alert variant='outlined' severity='info'>This is an info alert!!</Alert>
        <Alert variant='outlined' severity='success'>This is an success alert!!</Alert>
      </Stack>

      {/* With variant filled */}
      <Stack  spacing={2}>
        <Alert variant='filled' severity='error'>This is an error alert!!</Alert>
        <Alert variant='filled' severity='warning'>This is an warning alert!!</Alert>
        <Alert variant='filled' severity='info'>This is an info alert!!</Alert>
        <Alert variant='filled' severity='success'>This is an success alert!!</Alert>
      </Stack>

      {/* showing alert with Alert title */}
      <Stack  spacing={2}>
        <Alert variant='filled' severity='error' onClose={() => alert('Closed!!')}>
          <AlertTitle>Error</AlertTitle>
          This is an error alert!!
        </Alert>
        <Alert 
          variant='filled' 
          severity='warning' 
          action={<Button color='inherit' size='small'>UNDO</Button>}
        >
          <AlertTitle>Warning</AlertTitle>
          This is an warning alert!!
        </Alert>
        <Alert variant='filled' severity='info'>
          <AlertTitle>Info</AlertTitle>
          This is an info alert!!
        </Alert>
        <Alert variant='filled' severity='success' icon={<Check fontSize='inherit' />}>
          <AlertTitle>Success</AlertTitle>
          This is an success alert!!
        </Alert>
      </Stack>
    </Stack>
  )
}

export default MuiAlert;