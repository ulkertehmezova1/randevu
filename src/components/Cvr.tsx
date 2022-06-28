import React from 'react'
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import FormCVR from './FormCVR';
import { Link } from 'react-router-dom';


class Cvr extends React.Component{
    render(){
    // const navigate =useNavigate();
  return (
    <div className='margin' >
     
    <Grid container spacing={1} justifyContent="center"
  alignItems='center' direction="row" >
<Grid item >
<Link to='/FormCVR'>
  <Button style={{
        padding:'30px',
        backgroundColor:'#00ADEF'
    }} variant ="contained" >
       <Typography>COVID-19 vaksin randevu</Typography>
     </Button></Link>
</Grid>
<Grid item >
    <Button style={{
        padding:'30px',
        backgroundColor:'#00ADEF'
    }}variant ="contained" ><Typography>COVID-19 Certificate appointment</Typography></Button></Grid>
        </Grid>

    </div>
  )
}}  

export default Cvr