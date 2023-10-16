import { Box, FormControlLabel, FormControl, FormLabel, FormGroup, Checkbox } from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookMarkIcon from "@mui/icons-material/Bookmark";

function MuiCheckbox() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string []>([]);

  // console.log(acceptTnC);
  console.log(skills);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  }

  // function to add or remove skills from checkbox
  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skillIndex = skills.indexOf(event.target.value);

    if(skillIndex === -1){
      setSkills([...skills, event.target.value]);
    }else{
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  }

  return (
    <Box>
      {/* Checkbox to accept user terms and conditions */}
      <Box>
        <FormControlLabel 
          label='I accept the terms and conditions' 
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>

      {/* Creating checkbox using icons */}
      <Box marginTop='25px'>
        <Checkbox 
          icon={<BookmarkBorderIcon />} 
          checkedIcon={<BookMarkIcon />} 
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>

      {/* Working with checkBox groups */}
      <Box marginTop='25px'>
        <FormControl>
          <FormLabel id='skills-group-label'>Skills</FormLabel>
          <FormGroup araia-aria-labelledby='skills-group-label'>
            <FormControlLabel 
              label='HTML' 
              control={<Checkbox value='HTML' checked={skills.includes('HTML')} onChange={handleSkillsChange} />}
            />
            <FormControlLabel 
              label='CSS' 
              control={<Checkbox value='CSS' checked={skills.includes('CSS')} onChange={handleSkillsChange} />}
            />
            <FormControlLabel 
              label='JavaScript' 
              control={<Checkbox value='JavaScript' checked={skills.includes('JavaScript')} onChange={handleSkillsChange} />}
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}

export default MuiCheckbox;