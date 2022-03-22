import * as React from 'react';
import { Typography, Card, Avatar, Grid } from '@mui/material';

export default function Contact(props) {
  return (
    <>
      <Card sx={{ border: 2, borderColor: '#fff', maxWidth: 5000, my: 1, p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar src={props.img}></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              <b>{props.nama}</b>
              <br />
              {props.info}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
