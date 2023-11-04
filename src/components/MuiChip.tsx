import { Face } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material';
import { useState } from 'react'

function MuiChip() {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3']);

  const handleDelete = (chipToDelete: string) => {
    setChips(chips.filter((chip) => 
      chip !== chipToDelete
    ));
  }

  return (
    <Stack direction='row' spacing={1} padding={3}>
      <Chip label='chip' color='primary' size='small' />

      {/* Chip with variant outlined */}
      <Chip label='chip outlined' color='secondary' size='small' variant='outlined' />

      {/* Chip with Avatar */}
      <Chip 
        label='chip avatar' 
        color='secondary' 
        size='small' 
        variant='outlined'
        avatar={<Avatar>AV</Avatar>}
      />

      {/* Using icon on Chip */}
      <Chip 
        label='chip face' 
        color='secondary' 
        size='small' 
        icon={<Face />}
      />

      {/* Handling click event on chip */}
      <Chip 
        label='chip click' 
        color='secondary' 
        size='small' 
        onClick={() => alert('Clicked')}
      />

      {/* Adding delete handler to chip */}
      <Chip 
        label='chip delete handler' 
        color='error' 
        size='small' 
        // onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete handler called')}
      />

      {/* Using onDelete handle in a more realistic sense */}
      {
        chips.map((chip) => <Chip label={chip} color='default' size='small' onDelete={() => handleDelete(chip)}/>)
      }
    </Stack>
  )
}

export default MuiChip;