import { Box, Grid } from '@mui/material'
import ResponsiveAppBar from '../components/AppBar/AppBar'

import { UserData } from '../layouts/UserData'
import './HomePage.min.css'

export const HomePage = () => {
  return (
    <>
        {/* For the app bar */}
        <ResponsiveAppBar />
        {/* For the carousel section */}
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
            </Grid>
        </Grid>
        {/* To get and show user data */}
        <UserData />
    </>
  )
}
