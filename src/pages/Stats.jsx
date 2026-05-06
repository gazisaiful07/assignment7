import React from 'react';
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timeline")) || [];

    const all = [
      ...saved,
      { type: "Call" },
      { type: "Call" },
      { type: "Text" },
      { type: "Text" },
      { type: "Video" }
    ];

    setData([
      { name: "Call", value: all.filter((i) => i.type === "Call").length },
      { name: "Text", value: all.filter((i) => i.type === "Text").length },
      { name: "Video", value: all.filter((i) => i.type === "Video").length }
    ]);
  }, []);

  const colors = ["#2563EB", "#7C3AED", "#22C55E"];

  return (
    <section className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="text-5xl font-bold mb-8">Friendship Analytics</h1>

      <div className="bg-white shadow-sm rounded-xl p-8">
        <h2 className="text-xl font-bold text-green-700 mb-6">By Interaction Type</h2>

        <div className="h-80">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={80}
                outerRadius={120}
                dataKey="value"
                paddingAngle={6}
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Stats;