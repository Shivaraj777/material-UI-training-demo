import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, [])

  return (
    // skeleton container
    <Box sx={{ width: '250px' }} m={4}>
      { 
        // if loading is true show image skeleton else show image
        loading ? (
          <Skeleton variant='rectangular' width={256} height={144} animation='wave' /> )
          : (
          <img 
            src='https://source.unsplash.com/random/256x144' 
            alt='skeleton' 
            width={256} 
            height={144} 
          /> )
      }

      {/* container for Avatar and text  */}
      <Stack direction='row' spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
        {
          // if loading is true show avatar skeleton else show avatar
          loading ? (
            <Skeleton variant='circular' width={40} height={40} animation='wave' /> )
            : (
            <Avatar>V</Avatar> )
        }

        {/* container for Typography or text */}
        <Stack sx={{ width: '80%' }}>
          {
            // if loading is true show typography skeleton else show typography
            loading ? (
              <>
                <Typography variant='body1'>
                  <Skeleton variant='text' width='100%' animation='wave' />
                </Typography>
                <Typography variant='body2'>
                  <Skeleton variant='text' width='100%' animation='wave' />
                </Typography>
              </> )
              : (
              <Typography variant='body1'>React MUI Tutorial</Typography> )
          }
        </Stack>
      </Stack>
    </Box>

    // <Stack spacing={1} width='250px' m={4}>
    //   {/* Default skeleton */}
    //   <Skeleton animation={false} />

    //   {/* Sleleton with variant text */}
    //   <Skeleton variant='text' animation='wave' />

    //   {/* Sleleton with variant circular */}
    //   <Skeleton variant='circular' width={40} height={40} />

    //   {/* Sleleton with variant rectangular */}
    //   <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
    // </Stack>
  )
}

export default MuiSkeleton;