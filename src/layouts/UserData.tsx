import { Container, Grid } from '@mui/material'
import BasicTable from '../components/Table/Table'
import { UserDataInput } from './UserDataInput'

export const UserData = () => {
  return (
    <Container className='custom-margin-top' maxWidth="lg">
        <Grid container spacing={12}>
            <Grid item xs={6}>
                {/* To display data in the table */}
                <BasicTable />
            </Grid>
            {/* To get user data input */}
            <UserDataInput />
        </Grid>
    </Container>  
  )
}
