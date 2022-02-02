import * as React from 'react';
import { Box, Container, IconButton, Typography, Card, CardHeader, CardContent, Avatar, Item, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
// iconnya
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// message
const message = `Christian Gunter `;
const message2 = `Sabuk Putih `;

export default function Histori() {
  return (
    <Container>
      <Box>
        <Grid>
          <Box sx={{ border: '1 ', maxWidth: 200 }}>
            <Grid item xs={12} style={{ marginRight: '-40' }}>
              <IconButton>
                <KeyboardArrowLeftIcon />
                <Typography>Histori</Typography>
              </IconButton>
            </Grid>
          </Box>

          <Box sx={{ border: 2, maxWidth: 400, my: 1, p: 1 }}>
            <Grid container wrap="nowrap" spacing={1}>
              <Grid item>
                <Typography>
                  <b>01 Januari 2022</b>
                </Typography>
              </Grid>
              <Grid item xs={5} zeroMinWidth sx={{ mr: 10 }} style={{ margin: 'auto', display: 'flex', flexDirection: 'column' }}>
                <Typography>
                  <b>Sakit Ijin Alpa</b>
                </Typography>
                <Typography>15 12 22</Typography>
              </Grid>
              <Grid item style={{ marginTop: '-11 ' }}>
                <IconButton>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Paper sx={{ maxWidth: 370, my: 1, p: 2 }}>
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
            </Paper>
            <Paper sx={{ maxWidth: 370, my: 1, p: 2 }}>
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
            </Paper>
            <Paper sx={{ maxWidth: 370, my: 1, p: 2 }}>
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
            </Paper>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}
