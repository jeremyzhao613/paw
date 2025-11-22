import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area
} from 'recharts';

const COLORS = ['#d67889', '#f4a4b2', '#e8c547', '#392f5a', '#a0a0a0'];

// --- Data Interfaces ---
interface PieData {
  name: string;
  value: number;
}

// --- Custom Tooltip ---
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-100 shadow-lg rounded text-xs z-50">
        <p className="font-bold text-brand-text mb-1">{label || payload[0].name}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.unit || '%'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// --- 1. Pet Perception Pie Chart ---
export const PerceptionPieChart: React.FC = () => {
  const data: PieData[] = [
    { name: 'Family', value: 58.3 },
    { name: 'Friend', value: 28.7 },
    { name: 'Just a Pet', value: 9.0 },
    { name: 'Roommate', value: 2.4 },
    { name: 'Partner', value: 1.6 },
  ];

  return (
    <div className="h-full w-full min-h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={55}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="middle" 
            align="right" 
            layout="vertical"
            iconSize={8}
            wrapperStyle={{fontSize: '10px', color: '#666'}}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

// --- 2. Motivation Horizontal Bar Chart ---
export const MotivationBarChart: React.FC = () => {
  const data = [
    { name: 'Guard Home', value: 14.0 },
    { name: 'Social Content', value: 16.5 },
    { name: 'Personality', value: 22.4 },
    { name: 'Adoption', value: 23.8 },
    { name: 'Kill Time', value: 41.2 },
    { name: 'Loneliness', value: 85.5 },
    { name: 'Love Animals', value: 85.8 },
  ];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#eee" />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={80} 
            tick={{fontSize: 10, fill: '#666'}} 
            interval={0}
          />
          <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
          <Bar dataKey="value" name="Pct" radius={[0, 4, 4, 0]} barSize={14}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index > 4 ? '#d67889' : '#e8c547'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// --- 3. Market Growth Area Chart ---
export const MarketGrowthChart: React.FC = () => {
  const data = [
    { name: '21', value: 2490 },
    { name: '22', value: 2706 },
    { name: '23', value: 2793 },
    { name: '24', value: 3002 },
    { name: '25E', value: 3311 },
    { name: '26E', value: 3656 },
    { name: '27E', value: 4042 },
  ];

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d67889" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#d67889" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 10}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 10}} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <Tooltip content={<CustomTooltip />} />
          <Area 
            type="monotone" 
            dataKey="value" 
            name="Market Size (Bn)"
            stroke="#d67889" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// --- 4. Willingness to Pay Donut ---
export const WillingnessChart: React.FC = () => {
    const data = [
        { name: 'Willing', value: 61.5 },
        { name: 'Depends', value: 31.8 },
        { name: 'Unwilling', value: 6.7 },
    ];
    const COLORS_PAY = ['#e8c547', '#f4a4b2', '#a0a0a0'];

    return (
        <div className="h-full w-full min-h-[80px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={25}
                        outerRadius={40}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                    >
                         {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS_PAY[index]} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                </PieChart>
             </ResponsiveContainer>
        </div>
    )
}