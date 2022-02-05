import React from 'react';
import { Box, IconButton, Typography, AppBar } from '@mui/material';
// icon
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export default function Appbar() {
  return (
    <Box sx={{ border: '1 ', maxWidth: 200 }}>
      <AppBar elevation="none" position="fixed" sx={{ xs: 5, bgcolor: '#249EA0', width: '100%', p: 1 }}>
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <IconButton sx={{ color: '#fff' }}>
            <KeyboardArrowLeftIcon />
            <Typography style={{ fontSize: 20 }}>
              <b>Histori</b>
            </Typography>
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
}
