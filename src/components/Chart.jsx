import React from "react";
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip, Treemap } from "recharts";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";




const renderLineChart = props => {
  const data = props.data;
  const portfolio = props.portfolio;

  return (
    <React.Fragment>
      <Grid container alignItems="flex-start">
        <Grid item>
          <Paper>
            <LineChart width={500} height={500} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <XAxis dataKey="date" domain={["dataMin","dataMax+1"]} />
              <YAxis type="number" domain={["dataMin-5", "dataMax+5"]} />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default renderLineChart;
