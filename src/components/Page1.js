import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Deposits from './Deposits';


export default function Page1() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Deposits></Deposits>
    </React.Fragment>
  );
}
