import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Alert, Button } from '@mui/material';
import DataTable from "./Table";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Page2() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title></Title>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <DataTable></DataTable>
    </React.Fragment>
  );
}
