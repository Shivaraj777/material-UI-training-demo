import { Box, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from "@mui/material";
import { useState } from "react";

function MuiRadioButton() {
  const [experience, setExperience] = useState('');

  console.log(experience);

  // change the exeperience on selecting a radio button
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  }

  return (

    // Creating radio button using Form Control
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
        <RadioGroup 
          name='job-experience-group' 
          aria-labelledby='job-experience-group-label' 
          value={experience} 
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton;