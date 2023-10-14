import {Box, TextField, MenuItem} from '@mui/material';
import {useState} from 'react';

function MuiSelect() {
  const [country, setCountry] = useState(''); //state to store select component value
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);

  // handle change in country value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  }

  // handle selecting multiple values
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    setCountries(typeof value === 'string' ? value.split(',') : value);
  }

  return (
    <>
      {/* Select component with the help of TextField */}
      <Box width='250px'>
        <TextField label='Select country' select value={country} onChange={handleChange} fullWidth>
          <MenuItem value='IND'>India</MenuItem>
          <MenuItem value='AUS'>Australia</MenuItem>
          <MenuItem value='NWZ'>New Zealand</MenuItem>
          <MenuItem value='PAK'>Pakistan</MenuItem>
        </TextField>
      </Box>

      {/* Select component to select multiple options */}
      <Box width='250px' marginTop='30px'>
        <TextField 
          label='Select countries' 
          select 
          value={countries} 
          onChange={handleChangeMultiple} 
          fullWidth
          SelectProps={{
            multiple: true
          }}
        >
          <MenuItem value='IND'>India</MenuItem>
          <MenuItem value='AUS'>Australia</MenuItem>
          <MenuItem value='NWZ'>New Zealand</MenuItem>
          <MenuItem value='PAK'>Pakistan</MenuItem>
        </TextField>
      </Box>
    </>
  )
}

export default MuiSelect;