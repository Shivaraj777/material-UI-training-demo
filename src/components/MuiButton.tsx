import { Button, IconButton, ButtonGroup} from '@mui/material';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import { Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react';

function MuiButton() {
  const [formats, setFormats] = useState<string[]>([]); //state to hold the text format values like bold, italic..
  const [formatExclusive, setFormatExclusive] = useState<string | null>(null);
  console.log(formats);
  console.log(formatExclusive);

  // function to handle format chnages
  const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
    // console.log(formats);
  }

  // function to handle format chnage for exclusive scenario - select only one button
  const handleFormatChangeExclusive = (_event: React.MouseEvent<HTMLElement>, updatedFormat: string) => {
    setFormatExclusive(updatedFormat);
    // console.log(formatExclusive);
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        {/* Button component has 3 variants which we can use */}
        <Button variant='text' href='https://www.google.com'>Text variant</Button>
        <Button variant='contained'>Contained variant</Button>
        <Button variant='outlined'>Outlined Variant</Button>
      </Stack>

      {/* color for contained buttons */}
      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>Secondary</Button>
        <Button variant='contained' color='error'>Error</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
      </Stack>

      {/* color for text buttons */}
      <Stack spacing={2} direction='row'>
        <Button variant='text' color='primary'>Primary</Button>
        <Button variant='text' color='secondary'>Secondary</Button>
        <Button variant='text' color='error'>Error</Button>
        <Button variant='text' color='warning'>Warning</Button>
        <Button variant='text' color='info'>Info</Button>
        <Button variant='text' color='success'>Success</Button>
      </Stack>

      {/* color for outlined buttons */}
      <Stack spacing={2} direction='row'>
        {/* Button component has 3 variants which we can use */}
        <Button variant='outlined' color='primary'>Primary</Button>
        <Button variant='outlined' color='secondary'>Secondary</Button>
        <Button variant='outlined' color='error'>Error</Button>
        <Button variant='outlined' color='warning'>Warning</Button>
        <Button variant='outlined' color='info'>Info</Button>
        <Button variant='outlined' color='success'>Success</Button>
      </Stack>

      {/* change the size of buttons */}
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>Success</Button>
        <Button variant='contained' size='medium'>Medium</Button>
        <Button variant='contained' size='large'>Large</Button>
      </Stack>

      {/* Ading built-in icons from Material UI */}
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon />}>Send</Button> {/* add icon at start */}
        <Button variant='contained' endIcon={<SendIcon />} disableElevation disableRipple>Send</Button> {/* add icon at the end */}
        
        {/* to add buttons with only icon */}
        <IconButton aria-label='send' size='large' color='success'>
          <SendIcon />
        </IconButton>

        {/* handle click events */}
        <Button variant='contained' onClick={() => {alert('Heya!!')}}>Send</Button>
      </Stack>

      {/* Grouping buttons */}
      <Stack direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' color='secondary' aria-label='alignment button group'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle button groups */}
      <Stack direction='row'>
        <ToggleButtonGroup 
          aria-label='text formatting' 
          value={formats} 
          onChange={handleFormatChange}
          color='success'
          size='medium'
          orientation='vertical'
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      {/* Toggle button groups - Select exclusive */}
      <Stack direction='row'>
        <ToggleButtonGroup 
          aria-label='text formatting exclusive' 
          value={formatExclusive} 
          onChange={handleFormatChangeExclusive}
          color='success'
          size='medium'
          orientation='vertical'
          exclusive
        >
          <ToggleButton value='bold' aria-label='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic' aria-label='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined' aria-label='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton;