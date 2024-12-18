import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from 'recharts';
  
  const data = [
    { month: 'Jan', users: 200, posts: 1000, reports: 10 },
    { month: 'Feb', users: 300, posts: 1100, reports: 20 },
    { month: 'Mar', users: 400, posts: 1200, reports: 15 },
    { month: 'Apr', users: 450, posts: 1300, reports: 18 },
  ];
  
  const DashboardGraph = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {/* 제목 */}
        <h3 className="text-2xl font-bold text-[#FF9A8B] mb-4">Monthly Activity</h3>
  
        {/* 그래프 */}
        <LineChart
          width={700}
          height={350}
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#FAD6B6" />
          <XAxis dataKey="month" tick={{ fill: '#FFB085', fontWeight: '500' }} />
          <YAxis tick={{ fill: '#FFB085', fontWeight: '500' }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#FFF7ED', borderRadius: '8px' }}
          />
          <Legend />
  
          {/* 선 그래프 라인 */}
          <Line
            type="monotone"
            dataKey="users"
            stroke="#FFB085"
            strokeWidth={3}
            dot={{ stroke: '#FFB085', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="posts"
            stroke="#F98472"
            strokeWidth={3}
            dot={{ stroke: '#F98472', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="reports"
            stroke="#FFC3A0"
            strokeWidth={3}
            dot={{ stroke: '#FFC3A0', strokeWidth: 2 }}
          />
        </LineChart>
      </div>
    );
  };
  
  export default DashboardGraph;
  