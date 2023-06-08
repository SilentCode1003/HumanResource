import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraph = () => {
  const filler = [
    { name: 'Pogging', 2023 : 53 },
    { name: 'Moomin', 2023 : 20 },
    { name: 'Bussin', 2023 : 30 },
  ];

  return (
    
      <BarChart width={350} height={225} data={filler}>
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
