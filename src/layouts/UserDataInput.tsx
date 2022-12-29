import { Grid, Stack, Typography, TextField, Button } from '@mui/material'
import React from 'react'

export const UserDataInput = () => {
  return (
    <Grid item xs={4}>
        <Stack direction="column">
            <Typography className="custom-text-align" variant="overline" display="block" gutterBottom>
                ID
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Typography className="custom-text-align" variant="overline" display="block" gutterBottom>
                Name
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Typography className="custom-text-align" variant="overline" display="block" gutterBottom>
                Phone Number
            </Typography>
            <TextField className='custom-margin-bottom' id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Submit</Button>
        </Stack> 
    </Grid>
  )
}
