import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      id: 1,
      name: "Assignment 1",
      avarage: 60,
    },
    {
      id: 2,
      name: "Assignment 2",
      avarage: 56,
    },
    {
      id: 3,
      name: "Assignment 3",
      avarage: 57,
    },
    {
      id: 4,
      name: "Page 4",
      avarage: 56,
    },
    {
      id: 5,
      name: "Assignment 5",
      avarage: 56,
    },
    {
      id: 6,
      name: "Assignment 6",
      avarage: 58,
    },
    {
      id: 7,
      name: "Assignment 7",
      avarage: 60,
    },
    {
      id: 8,
      name: "Assignment 8",
      avarage: 58,
    },
  ];
  return (
    <div>
      <AreaChart
        className="recha-wrapper"
        width={1300}
        height={500}
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <YAxis dataKey="avarage" />
        <Area dataKey="avarage" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Statistics;
