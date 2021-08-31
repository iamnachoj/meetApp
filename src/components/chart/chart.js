import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
  getData = () => {
    const {locations, events} = this.props;

    const data = locations.map((location)=>{ //this can be read as: 'for every single location...'
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
  };

  render() {
    return (
      <ResponsiveContainer height={400} className="recharts-responsive-container" >
        <ScatterChart
          margin={{
            top: 20,
            right: 60,
            bottom: 20
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city" />
          <YAxis type="number" dataKey="number" name="Number of events" allowDecimals={false} />
          <Scatter name="A school" data={this.getData()} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}