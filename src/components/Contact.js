import * as React from 'react';
import { Typography, Card, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import lotsOfData from './DataContact';

const Data = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
        <Card key={index} sx={{ border: 2, borderColor: '#d9d9d9', maxWidth: 5000, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={data.img}></Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <b>{data.nama}</b>
                <br />
                {data.info}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default Data;
