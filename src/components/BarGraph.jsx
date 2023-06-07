import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
  const data = [
    { name: 'Active', 2023 : 10 },
    { name: 'Resigned', 2023 : 20 },
    { name: 'Probationary', 2023 : 30 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="2023" fill="#8884d8" />
    </BarChart>
  );
};

export default BarGraph;
