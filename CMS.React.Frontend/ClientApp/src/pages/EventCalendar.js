import React from 'react';
import { Layout as DashboardLayout } from '../layouts/dashboard/layout';
import { Box, Typography, Grid, Paper, Button, Calendar } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';



const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">EVENT CALENDAR</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button variant="contained">SYNC CALENDAR</Button>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Calendar
            selectedDate={selectedDate}
            onChange={handleDateChange}
            views={['day', 'month']}
          />
        </LocalizationProvider>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5">Sunday</Typography>
            <Typography variant="body1">5th July, 2023</Typography>
            <ul>
              <li>Event 1</li>
              <li>Event 2</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5">Monday</Typography>
            <Typography variant="body1">6th July, 2023</Typography>
            <ul>
              <li>Event 3</li>
              <li>Event 4</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5">Tuesday</Typography>
            <Typography variant="body1">7th July, 2023</Typography>
            <ul>
              <li>Event 5</li>
              <li>Event 6</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h5">Wednesday</Typography>
            <Typography variant="body1">8th July, 2023</Typography>
            <ul>
              <li>Event 7</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

EventCalendar.getLayout = (EventCalendar) => (
  <DashboardLayout>
    {EventCalendar}
  </DashboardLayout>
);

export default EventCalendar;
