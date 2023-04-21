import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Deposits from './Deposits';


export default function Page1() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Deposits></Deposits>
    </React.Fragment>
  );
}
