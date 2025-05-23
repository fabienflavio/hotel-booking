// RevenueChart.tsx
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
  } from 'recharts';
  
  const data = [
    { month: 'Jan', sales: 400, revenue: 200 },
    { month: 'Feb', sales: 700, revenue: 300 },
    { month: 'Mar', sales: 300, revenue: 500 },
    { month: 'Apr', sales: 700, revenue: 250 },
    { month: 'May', sales: 400, revenue: 400 },
    { month: 'Jun', sales: 600, revenue: 400 },
    { month: 'Jul', sales: 300, revenue: 800 },
    { month: 'Aug', sales: 200, revenue: 600 },
    { month: 'Sep', sales: 500, revenue: 700 },
    { month: 'Oct', sales: 800, revenue: 300 },
    { month: 'Nov', sales: 900, revenue: 500 },
    { month: 'Dec', sales: 400, revenue: 900 },
  ];


export default function CardState() {
  return (
    <div className="w-full h-[400px] p-4 bg-white rounded-xl shadow mt-8">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Revenue</h2>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#003f8f" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#003f8f" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1e90ff" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#1e90ff" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#003f8f"
            fillOpacity={1}
            fill="url(#colorSales)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#1e90ff"
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}