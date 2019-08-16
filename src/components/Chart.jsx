import React from "react";
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip, Bar, BarChart, Treemap } from "recharts";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const renderLineChart = props => {
  const data = props.data;
  const portfolio = props.portfolio;
  const sector = props.sector;

  return (
    <React.Fragment>
      <Grid container alignContent="flex-start">
        <Grid item>
          <Paper style={{ paddingRight: 15 }}>
            <LineChart width={500} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
              <XAxis dataKey="date" domain={["dataMin", "dataMax+1"]} />
              <YAxis type="number" domain={["dataMin-5", "dataMax+5"]} />
              <Tooltip />
            </LineChart>
          </Paper>
        </Grid>
        <Grid item>
            <Paper style={{ marginLeft: 10 }}>
              <BarChart width={500} height={400} data={portfolio}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="stock" />
                <YAxis type="number" domain={["dataMin - 2", "dataMax+2"]} />
                <Bar dataKey="unrealizedpercent" fill="#8884d8" />
              </BarChart>
            </Paper>
          </Grid>
        </Grid>
    </React.Fragment>
  );
};

export default renderLineChart;

{/* <BarChart width={500} height={200} data={sector}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis type="number" domain={["dataMin - 2","dataMax+2"]}/>
<Bar dataKey="performance" fill="#1384d8" />
</BarChart> */}