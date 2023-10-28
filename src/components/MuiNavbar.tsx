import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { CatchingPokemon } from '@mui/icons-material';
// import catchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MuiNavbar() {
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
          <Button color='inherit'>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar;