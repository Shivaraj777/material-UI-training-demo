import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function MuiList() {
  return (
    <Box sx={{ width: '400px', backgroundColor: '#efefef'}}>
      {/* Basic list component */}
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary='List item 1' secondary='Secondary text' />
        </ListItem>

        {/* Divider component is used to create a seperation between components */}
        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary='List item 2' secondary='Secondary text' />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary='List item 3' secondary='Secondary text' />
        </ListItem>

        <Divider />

        {/* Using ListItemButton component to convert item to button */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary='List item 1' secondary='Secondary text' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default MuiList;