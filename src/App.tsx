import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import './App.css';

const MaCarte = ({ dayOfWeek, dayOfMonth }: { dayOfWeek: string, dayOfMonth: string }) => {
  return (<Card sx={{
    height: '209px',
    width: '156px',
    transition: 'all 0.1s ease',
    '&:hover': {
      backgroundColor: 'rgb(229, 238, 253)',
      border: '3px solid #005eff',
    }
  }}>
    <CardContent>
      <Stack spacing={1}>
        <Typography>{dayOfWeek}</Typography>
        <Typography variant="h5" color='#005eff' sx={{ fontWeight: 'bold' }}>{dayOfMonth}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={'images/interval.svg'}
            alt="interval"
          />
        </Box>
        <Typography sx={{ fontSize: '0.75rem' }}>0 mm</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <Typography sx={{ color: 'orange' }}>30°</Typography>
          <Typography sx={{ color: 'grey' }}>/ 19°</Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
  )
}

function App() {
  return (
    <div className="App">
      <Stack direction={'row'} spacing={2}>
        <MaCarte
          dayOfWeek='Lundi'
          dayOfMonth='08 janv.'
        />
        <MaCarte
          dayOfWeek='Mardi'
          dayOfMonth='09 janv.'
        />
      </Stack>
    </div>
  );
}

export default App;
