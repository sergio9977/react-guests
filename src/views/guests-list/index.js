import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SwipeableTemporaryDrawer from '../../components/menu';
import BasicTable from '../../components/table';
import SignInSection from '../../components/register';
import { useUsers } from '../../service';

import './styles.css';

const theme = createTheme();

function SignInSide() {
  // const [users, setUsers] = useState([]);
  const [users, createUser ]= useUsers();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="menu-drawer">
            <SwipeableTemporaryDrawer createUser={createUser} />
          </div>
          <BasicTable items={users}/>
        </Grid>
        <Grid
          className="assist-section"
          item
          sm={4}
          md={4}
          component={Paper}
          elevation={6}
        >
          <SignInSection createUser={createUser} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
