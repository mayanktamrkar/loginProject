'use client'
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen:boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* Icon for the first item */}
            </ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* Icon for the second item */}
            </ListItemIcon>
            <ListItemText primary="Item 2" />
          </ListItem>
          {/* Add more items as needed */}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
