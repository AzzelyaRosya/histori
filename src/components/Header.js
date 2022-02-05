import * as React from 'react';
import { Typography, Grid } from '@mui/material';

export default function Header() {
  return (
    <>
      <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>
          <b>Sakit</b>
        </Typography>
        <Typography> 15</Typography>
      </Grid>
      <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>
          <b>Izin</b>
        </Typography>
        <Typography> 12</Typography>
      </Grid>
      <Grid item xs={2} style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography>
          <b>Alpa</b>
        </Typography>
        <Typography> 22</Typography>
      </Grid>
    </>
  );
}
