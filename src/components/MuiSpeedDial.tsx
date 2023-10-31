import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import CopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

function MuiSpeedDial() {
  return (
    <>
      {/* SpeedDial component */}
      <SpeedDial 
        ariaLabel='navigation-speed-dial' 
        sx={{position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
      </SpeedDial>

      {/* Using props */}
      <SpeedDial 
        ariaLabel='navigation-speed-dial' 
        sx={{position: 'absolute', bottom: 16, left: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />}/>}
      >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen />
      </SpeedDial>
    </>
  )
}

export default MuiSpeedDial;