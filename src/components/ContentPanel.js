import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


export default function Main() {
  const theme = useTheme();

  return (
    <React.Fragment>

      <div className="App">
        <div className="wrapper">
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => <Page1 {...props} />}
            />
            <Route
              exact
              path="/create-student"
              component={(props) => <Page2 {...props} />}
            />
            <Route
              exact
              path="/page3"
              component={(props) => <Page3 {...props} />}
            />
          </Switch>
        </div>

      </div>
    </React.Fragment>
  );
}
