import { Badge, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function MuiBadge() {
  return (
    <Stack spacing={2} direction='row' padding={5}>
      {/* Badge component */}
      <Badge badgeContent={5} color='primary'>
        <MailIcon />
      </Badge>

      {/* Badge component with 0 badgeContent */}
      <Badge badgeContent={0} color='secondary'>
        <MailIcon />
      </Badge>

      {/* Badge component using showZero prop */}
      <Badge badgeContent={5} color='secondary' showZero>
        <MailIcon />
      </Badge>

      {/* Using max prop */}
      <Badge badgeContent={151} color='error' max={150}>
        <MailIcon />
      </Badge>

      {/* Using variant prop */}
      <Badge variant='dot' color='primary'>
        <MailIcon />
      </Badge>

      {/* Using invisible prop */}
      <Badge variant='dot' color='primary' invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  )
}

export default MuiBadge;