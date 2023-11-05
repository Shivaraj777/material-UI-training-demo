import { Button, Snackbar, Alert, AlertProps } from '@mui/material';
import { useState, forwardRef } from 'react';

function MuiSnackbar() {
  const [open, setOpen] = useState(false);

  // customized snackbar component using forwardRef hook
  const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref){
      return <Alert elevation={6} ref={ref} {...props} />
    }
  )

  // handle closing of Snackbar
  const handleClose = (_event: React.SyntheticEvent | Event, reason: string) => {
    if(reason === 'clickaway'){
      return;
    }

    setOpen(false);
  }

  return (
    <>
      {/* Snackbar component */}
      {/* <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar 
        message='Form submitted successfully' 
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      /> */}

      {/* Customized Snackbar using Alert component */}
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarAlert severity='success'>
          Form submitted successfully!!
        </SnackbarAlert>
      </Snackbar>
    </>
  )
}

export default MuiSnackbar;