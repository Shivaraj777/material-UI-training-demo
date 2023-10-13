import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react'

function MuiTextfield() {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4} direction='column'>
        {/* Text field variants */}
        <Stack spacing={2} direction='row'>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        {/* Adding properties to TextField */}
        <Stack spacing={2} direction='row'>
            <TextField label='Small secondary' variant='outlined' color='secondary' size='small'/>
            <TextField label='Small primary' variant='filled' color='primary' size='small'/>
            <TextField label='Small success' variant='standard' color='success' size='small'/>
        </Stack>

        {/* using required props */}
        <Stack spacing={2} direction='row'>
            <TextField label='Small secondary' required variant='standard' color='secondary' size='small'/>
        </Stack>

        {/* using helperText props */}
        <Stack spacing={2} direction='row'>
            <TextField label='Small secondary' variant='outlined' helperText='Hey there, font size will be small'/>
        </Stack>

        {/* using type props */}
        <Stack spacing={2} direction='row'>
            <TextField type='password' label='Password' variant='outlined'/>
        </Stack>

        {/* using disabled props */}
        <Stack spacing={2} direction='row'>
            <TextField type='password' label='Password' variant='outlined' disabled/>
        </Stack>

        {/* set Text Field to read only - using input props */}
        <Stack spacing={2} direction='row'>
            <TextField label='Small secondary' variant='outlined' InputProps={{readOnly: true}}/>
        </Stack>

        {/* add prefixes and suffixes to a Text Field by using Adornment */}
        <Stack spacing={2} direction='row'>
            <TextField 
                label='Amount' 
                variant='outlined'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
                />
            <TextField 
                label='Weight' 
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>kg</InputAdornment>
                }}
            />
        </Stack>

        {/* using error prop and helperText prop to display validation errors to user */}
        <Stack spacing={2} direction='row'>
            <TextField 
                type='password' 
                label='Password' 
                variant='outlined'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Password required' : 'Please do not share your password'}
            />
        </Stack>
    </Stack>
  )
}

export default MuiTextfield;