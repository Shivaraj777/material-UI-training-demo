import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4'>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>

        {/* Two more variations of h6 typography */}
        <Typography variant='subtitle1'>Sub Title 1</Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>

        {/* variants related to body text */}
        <Typography variant='body1'>jasbd sajbasjdbas sadbansb sadbnmamsdbqf hdha dbadb ahsdb hs a sdjbd asdhba ashbdbab adbnasdb dhbad sabjkb aba</Typography>
        <Typography variant='body2'>jasbd sajbasjdbas sadbansb sadbnmamsdbqf hdha dbadb ahsdb hs a sdjbd asdhba ashbdbab adbnasdb dhbad sabjkb aba</Typography>

        {/* changing the symantic(tag name) by using component props */}
        <Typography variant='h4' component='h1' gutterBottom>h6 Heading</Typography>
    </div>
  )
}

export default MuiTypography;