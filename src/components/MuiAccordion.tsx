import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiAccordion() {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  // handle expansion state change of Accordian groups
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <div>
      {/* Creating an Accordian component */}
      <Accordion expanded={expanded === 'panel-1'} onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel-1')}>
        <AccordionSummary 
          id='panel1-header' 
          aria-controls='panel1-content' 
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique unde 
            molestiae necessitatibus quam neque adipisci provident, numquam harum nam excepturi. 
            Eaque est libero illo neque recusandae. Dolor fugit nulla perspiciatis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel-2'} onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel-2')}>
        <AccordionSummary 
          id='panel2-header' 
          aria-controls='panel2-content' 
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique unde 
            molestiae necessitatibus quam neque adipisci provident, numquam harum nam excepturi. 
            Eaque est libero illo neque recusandae. Dolor fugit nulla perspiciatis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel-3'} onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel-3')}>
        <AccordionSummary 
          id='panel3-header' 
          aria-controls='panel3-content' 
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accordian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique unde 
            molestiae necessitatibus quam neque adipisci provident, numquam harum nam excepturi. 
            Eaque est libero illo neque recusandae. Dolor fugit nulla perspiciatis?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MuiAccordion;