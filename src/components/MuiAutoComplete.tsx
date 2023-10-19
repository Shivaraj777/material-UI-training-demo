import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'];

// object to contain skills data
type Skill = {
  id: Number,
  label: String
}

// create an arry of skills object using map function
const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}));

function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  // console.log({value});
  console.log(skill);

  // handle change in input for Autocomplete text field
  const handleChange = (_event: any, newValue: string | null) => {
    setValue(newValue);
  }

  // handle change in input for Autocomplete text field with option as object
  const handleChangeObject = (_event: any, newSkill: Skill | null) => {
    setSkill(newSkill);
  }

  return (
    <Stack spacing={4}>
      {/* Creating a basic auto complete input element */}
      <Stack spacing={2} width='250px'>
          <Autocomplete 
            options={skills} 
            renderInput={(params) => <TextField {...params} label='Skills' />}
            value={value} 
            onChange={handleChange}
            freeSolo
          />
      </Stack>

      {/* Creating a autocomplete input component by passing object as options */}
      <Stack spacing={2} width='250px'>
          <Autocomplete 
            options={skillsOption} 
            renderInput={(params) => <TextField {...params} label='Skills' />}
            value={skill} 
            onChange={handleChangeObject}
          />
      </Stack>
    </Stack>
  )
}

export default MuiAutoComplete;