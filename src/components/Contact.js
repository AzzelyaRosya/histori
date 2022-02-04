import * as React from 'react';
import { Box, IconButton, Typography, Card, Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import DataContact from './DataContact';

// iconnya
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

// message
const message = `Christian Gunter `;
const message2 = `Sabuk Putih `;

export default function Contact() {
  return (
    <>
      <Card sx={{ border: 2, borderColor: '#cccccc', maxWidth: 5000, my: 1, p: 2 }} style={{ backgroundColor: '#d9d9d9' }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>
              <IconButton>
                <PersonSharpIcon />
              </IconButton>
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              <b>{message}</b>
              <br />
              {message2}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
