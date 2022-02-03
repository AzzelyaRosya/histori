import * as React from 'react';
import { Box, Container, IconButton, Typography, Card, CardHeader, CardContent, Avatar, Item, Paper, AppBar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// iconnya
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';

// message
const message = `Christian Gunter `;
const message2 = `Sabuk Putih `;

export default function Histori() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Box>
        <Grid>
          {/* isi atas atau header */}
          <div style={{ marginTop: '70px' }}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ border: 2, bgcolor: '#F78104' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header" style={{ color: '#fff' }}>
                <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
                  <b>1 Januari 2022</b>
                </Typography>
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
              </AccordionSummary>
              {/* expand */}
              <AccordionDetails>
                <Typography>Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.</Typography>
              </AccordionDetails>
            </Accordion>

            {/* contact */}
            <Box sx={{ border: 2, my: 1, p: 2, mt: -2 }}>
              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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

              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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
              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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
          </div>

          {/* batas 1 */}

          <div>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ border: 2, bgcolor: '#F78104' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header" style={{ color: '#fff' }}>
                <Typography p={1} m={1} sx={{ width: '37%', flexShrink: 0 }}>
                  <b>2 Januari 2022</b>
                </Typography>

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
              </AccordionSummary>
              {/* expand */}
              <AccordionDetails>
                <Typography>Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.</Typography>
              </AccordionDetails>
            </Accordion>

            {/* contact */}
            <Box sx={{ border: 2, my: 1, p: 2, mt: -2 }}>
              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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

              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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
              <Paper sx={{ border: 2, maxWidth: 1200, my: 1, p: 2 }} style={{ backgroundColor: '#e6e6e6' }}>
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
          </div>
        </Grid>
      </Box>
    </Container>
  );
}
