import React from "react";
import { PieChart } from "reaviz";

export const data = [
  {
    key: "第一題",
    data: 20
  },
  {
    key: "第二題",
    data: 14
  },
  {
    key: "第三題",
    data: 5
  },
  {
    key: "第四題",
    data: 0
  },
  {
    key: "第五題",
    data: 3
  },
  {
    key: "第六題",
    data: 22
  },
  {
    key: "第七題",
    data: 40
  },
  {
    key: "第八題",
    data: 23
  },
  {
    key: "第九題",
    data: 4
  },
  {
    key: "第十題",
    data: 30
  },
];

export default function Pie() {

    return(
  <div style={{textAlign: "center" }}>
    <PieChart width={300} height={300} data={data} />
  </div>
    )
}
