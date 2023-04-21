import * as React from 'react';
import Link from '@mui/material/Link';
import Title from './Title';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>

<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4, md: 4 }}>
  <Grid item xs={2}>
    <Card  sx={{ } }>
      <CardContent>
      <Box component="span" sx={{ p: 20, border: '1px  black' }}>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        Card
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Box>
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  </Grid>
  <Grid item xs={2}>
   <Card sx={{ }}>
      <CardContent>
      <Box component="span" sx={{ p: 20, border: '1px  black' }}>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        Card
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Box>
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={2}>
  <Card sx={{ }}>
      <CardContent>
      <Box component="span" sx={{ p: 20, border: '1px  black' }}>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        Card
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Box>
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
  <Grid item xs={2}>
  <Card sx={{ }}>
      <CardContent>
      <Box component="span" sx={{ p: 20, border: '1px  black' }}>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        Card
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
      </Box>
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </Grid>
</Grid>
        
   
    </React.Fragment>
  );
}
