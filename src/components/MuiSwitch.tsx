import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  return (

    // Toggle switch to dark mode
    <Box>
        <FormControlLabel 
          label='Dark Mode' 
          control={<Switch checked={checked} onChange={handleChange} />}
        />
    </Box>
  )
}

export default MuiSwitch;