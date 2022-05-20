// import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ title, data, dataKey, grid }) => {
  console.log(data);
  return (
    <div className="m-4 p-8">
      <h3 className="text-lg font-bold ">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 40,
            left: 30,
            bottom: 5,
          }}
        >
          <XAxis datakey="name" stroke="#e29578" />
          <Line type="monotone" dataKey={dataKey} stroke="#e29578" />

          <Tooltip />
          {grid && <CartesianGrid stroke="#ffddd2" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
