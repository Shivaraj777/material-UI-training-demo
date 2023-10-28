import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material';
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
// import catchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MuiNavbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // handle displaying menu bar on click of resources button
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }

  // handle closing the menu
  const handleClose = (_event: any) => {
    setAnchorEl(null);
  }

  return (
    // Navbar component using AppBar and Toobar
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow:1 }}>POKEMONAPP</Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button 
            color='inherit' 
            id='resources-button' 
            onClick={handleClick}
            // props ti control open and close of menu
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu 
          id='resources-menu' 
          open={open} 
          anchorEl={anchorEl} 
          MenuListProps={{
            'aria-labelledby': 'resources-button'
          }}
          onClose={handleClose}
          // props to set position of menu
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar;