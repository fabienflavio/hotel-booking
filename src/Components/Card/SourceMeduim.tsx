
import { BsArrowUpRight } from 'react-icons/bs'
import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Direct', value: 400 },
  { name: 'Organic', value: 300 },
  { name: 'Referral', value: 200 },
  { name: 'Social', value: 100 },
]

const COLORS = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'] // Google-style colors

export default function SourceMediumChart() {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 w-full max-w-sm">
      <h2 className="text-sm font-semibold text-blue-600">Source / Medium</h2>

      <div className="flex flex-col items-center justify-center mt-4">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map(( index : any) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="text-center -mt-4">
          <div className="text-2xl font-bold flex items-center justify-center gap-1">
            890
            <span className="text-green-600">
              <BsArrowUpRight className="w-5 h-5" />
            </span>
          </div>
          <p className="text-sm text-gray-500">7% higher than last week</p>
        </div>
      </div>
    </div>
  )
}
