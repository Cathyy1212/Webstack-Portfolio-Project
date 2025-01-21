import { Autocomplete, Box, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import ForecastDay from './ForecastDay';
import MyWeatherApi from './MyWeatherApi';

const MaCarte = ({ forecast }: { forecast: ForecastDay }) => {
  const d = new Date(forecast.date);
  const dayOfWeek = d.toLocaleDateString('fr-FR', { weekday: 'long' });
  const dayOfMonth = d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });

  return (<Card sx={{
    paddingBottom: 4,
    height: '209px',
    width: '156px',
    transition: 'all 0.1s ease',
    '&:hover': {
      backgroundColor: 'rgb(229, 238, 253)',
      border: '3px solid #005eff',
    }
  }}>
    <CardContent sx={{ paddingBottom: '50px' }}>
      <Stack spacing={1}>
        <Typography>{dayOfWeek}</Typography>
        <Typography variant="h5" color='#005eff' sx={{ fontWeight: 'bold' }}>{dayOfMonth}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={forecast.day.condition.icon}
            alt="temperature"
          />
        </Box>
        <Typography sx={{ fontSize: '0.75rem' }}>{forecast.day.totalprecip_mm} mm</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
          <Typography sx={{ color: 'orange' }}>{forecast.day.maxtemp_c}°</Typography>
          <Typography sx={{ color: 'grey' }}>/ {forecast.day.mintemp_c}°</Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
  )
}

const App = () => {

  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [selectedCity, setSelectedCity] = useState("Marrakech");

  // List of some well-known cities in the world
  const cities = [
    "Marrakech", "Rabat", "Casablanca", "Tanger",
    "Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City",
    "Cairo", "Mumbai", "Beijing", "Osaka", "Karachi",
    "Chongqing", "Istanbul", "Dhaka", "Lagos", "Buenos Aires",
    "Kinshasa", "Lima", "Shenzhen", "Tianjin", "Jakarta",
    "Guangzhou", "Chengdu", "Hong Kong", "Wuhan", "Hangzhou",
    "Bangalore", "Kolkata", "Ho Chi Minh City", "Rio de Janeiro",
    "Paris", "London", "New York", "Los Angeles", "Sydney",
    "Rome", "Berlin", "Moscow", "Singapore", "Toronto",
    "Dubai", "Miami"
  ];

  useEffect(() => {
    MyWeatherApi
      .getWeather(selectedCity)
      .then(data => setForecast(data));
  }, [selectedCity]);


  return (
    <div className="App">
      <Grid container spacing={2} columns={{ xs: 8, sm: 8, md: 12 }}>
        <Grid item xs={12}>
          <Card sx={{ marginTop: 4, width: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Search for a City</Typography>
              <Autocomplete
                freeSolo={false}
                options={cities}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search for a city"
                    variant="outlined"
                    fullWidth
                  />
                )}
                onChange={(event, newInputValue) => {
                  if (newInputValue) {
                    setSelectedCity(newInputValue)
                  }
                }}
                value={selectedCity}
                disableClearable
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} textAlign={'left'}>
          <Typography variant="h3">Temperature of {selectedCity}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction={'row'}
            alignItems={{ xs: 'center', sm: 'center', md: 'left' }}
            flexWrap={'wrap'}
            gap={2}
          >
            {
              forecast.map(forecast => <MaCarte forecast={forecast} />)
            }
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
