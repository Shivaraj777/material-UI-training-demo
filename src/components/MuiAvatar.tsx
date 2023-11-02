import { Avatar, AvatarGroup, Stack } from '@mui/material';

function MuiAvatar() {
  return (
    <Stack spacing={4} p={4}>
      {/* Avatar component */}
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
      </Stack>

      {/* Adding image ti Avatar component */}
      <Stack direction='row' spacing={1}>
        <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
        <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe'>CK</Avatar>
        <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe'>CK</Avatar>
      </Stack>

      {/* Using AvatarGroup component */}
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe'>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe'>CK</Avatar>
        </AvatarGroup>
      </Stack>

      {/* Using variants for avatar */}
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar variant='square' sx={{ bgcolor: 'primary.light' }}>BW</Avatar>
          <Avatar variant='rounded' sx={{ bgcolor: 'success.light' }}>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe'>CK</Avatar>
          <Avatar src='https://randomuser.me/api/portraits/men/51.jpg' alt='John Doe'>CK</Avatar>
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar;