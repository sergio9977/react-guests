import { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import SignInSection from '../register'

import './styles.css';

export default function SwipeableTemporaryDrawer({ createUser }) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SignInSection createUser={createUser} />
    </Box>
  );

  return (
    <div className='menu'>
      <Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon/>
        </Button>
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
}
