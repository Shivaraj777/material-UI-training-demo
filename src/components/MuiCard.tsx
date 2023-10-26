import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';
import React from 'react'

function MuiCard() {
  return (
    <Box width='300px'>
      {/* Card component */}
      <Card>
        <CardMedia 
          component='img' 
          height='140px' 
          image='https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png'
          alt='react-image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>React</Typography>
          <Typography variant='body2' color='text.secondary'>
            React is a JavaScript library for building user interfaces. React can be used as a base 
            in the development of single page and mobile Applications.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard;