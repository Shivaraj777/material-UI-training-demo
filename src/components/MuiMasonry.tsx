import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";

const heights = [150, 30, 98, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80]

function MuiMasonry() {
  return (
    <>
      {/* Masonry component to arrange data */}
      <Box sx={{ width: '500px', minHeight: '400px' }} m={4}>
        <Masonry columns={4} spacing={1}>
          {
            heights.map((height, index) => (
              <Paper 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height, border: '1px solid' 
                }}
              >
                {index + 1}
              </Paper>
            ))
          }
        </Masonry>
      </Box>

      {/* Masonry component to arrange items */}
      <Box sx={{ width: 500, minHeight: 400 }} m={4}>
        <Masonry columns={4} spacing={1}>
          {
            heights.map((height, index) => (
              <Paper 
                key={index} 
                sx={{ border: '1px solid' }}
              >
                <Accordion sx={{ minHeight: height }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>Accordion {index + 1}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>content</AccordionDetails>
                </Accordion>
              </Paper>
            ))
          }
        </Masonry>
      </Box>
    </>
  )
}

export default MuiMasonry;