import React from "react";
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip, Bar, Legend, BarChart } from "recharts";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const renderLineChart = props => {
  const data = props.data;
  const portfolio = props.portfolio;
  const sector = props.secotr;

  return (
    <React.Fragment>
      {console.log(portfolio)}
      <Grid container alignItems="flex-start">
        <Grid item>
          <Paper>
            <LineChart width={500} height={500} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <XAxis dataKey="date" domain={["dataMin", "dataMax+1"]} />
              <YAxis type="number" domain={["dataMin-5", "dataMax+5"]} />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item>
          <BarChart width={730} height={250} data={portfolio}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stock" />
            <YAxis type="number" domain={["dataMin - 2","dataMax+2"]}/>
            <Tooltip />
            <Bar dataKey="unrealizedpercent" fill="#8884d8" />
          </BarChart>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default renderLineChart;
