import { Favorite } from '@mui/icons-material';
import { TabContext, TabPanel, TabList } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import { useState } from 'react';

function MuiTab() {
  const [value, setvalue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setvalue(newValue);
  }

  return (
    <Box>
      {/* Tab component */}
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px'}}>
          <TabList 
            aria-label='tabs-example' 
            onChange={handleChange} 
            textColor='secondary' 
            indicatorColor='secondary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label='Tab-One' value='1' icon={<Favorite />} iconPosition='start' />
            <Tab label='Tab-Two' value='2' />
            <Tab label='Tab-Three' value='3' disabled />
            <Tab label='Tab-Four' value='4' />
            <Tab label='Tab-Five' value='5' />
            <Tab label='Tab-Six' value='6' />
          </TabList>
        </Box>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
        <TabPanel value='4'>Panel Four</TabPanel>
        <TabPanel value='5'>Panel Five</TabPanel>
        <TabPanel value='6'>Panel Six</TabPanel>
      </TabContext>
    </Box>
  )
}

export default MuiTab;