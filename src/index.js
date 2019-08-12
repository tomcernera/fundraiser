import React from "react";
import ReactDOM from "react-dom";
import { LineChart, Line } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 500, pv: 2400, amt: 240},
{name: 'Page C', uv: 600, pv: 2400, amt: 2700},
{name: 'Page D', uv: 200, pv: 2400, amt: 2200},
{name: 'Page E', uv: 100, pv: 2400, amt: 240}];


class App extends React.Component {
  render() {
    return (
      <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="amt" stroke="#8884d8" />
    </LineChart>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("app"));