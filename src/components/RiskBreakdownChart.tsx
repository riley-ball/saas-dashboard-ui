import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Safe', value: 1247, color: '#42d392' },
  { name: 'Medium Risk', value: 312, color: '#f5a623' },
  { name: 'High Risk', value: 89, color: '#e74c3c' },
];

export function RiskBreakdownChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-300 shadow-sm p-4">
      <div className="mb-4">
        <h3 className="text-slate-900">Risk Breakdown</h3>
        <p className="text-sm text-slate-500 mt-1">Last 30 days</p>
      </div>
      
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-300">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div className="text-xl text-slate-900 mb-1">{item.value}</div>
            <div className="text-xs text-slate-500">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}