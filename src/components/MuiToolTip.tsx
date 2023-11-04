import { Delete } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';

function MuiToolTip() {
  return (
    <Box p={10}>
      <Tooltip 
        title='Delete' 
        placement='right' 
        arrow
        enterDelay={500}
        leaveDelay={500}
      >
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default MuiToolTip;