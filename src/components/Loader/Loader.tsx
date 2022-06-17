import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderProps } from './types';

const Loader: React.FC<LoaderProps> = ({ className = '', size = 60 }) => (
  <div className={className}>
    <Stack sx={{ color: 'black' }} spacing={2} direction="row">
      <CircularProgress size={size} color="inherit" />
    </Stack>
  </div>
);

export default Loader;
