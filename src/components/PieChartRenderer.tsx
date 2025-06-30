import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { PieChartConfig } from '../types/chartConfig';

interface PieChartRendererProps {
  config: PieChartConfig;
  data: any[];
}

export const PieChartRenderer = ({ config, data }: PieChartRendererProps) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, value, x, y, textAnchor } = props;
    const labelText = config.labelType === 'absolute' ? value : `${(percent * 100).toFixed(0)}%`;

    if (config.showLabelLines) {
      return (
        <text x={x} y={y} fill="white" textAnchor={textAnchor} dominantBaseline="central">
          {labelText}
        </text>
      );
    }
    
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const xPos = cx + radius * Math.cos(-midAngle * RADIAN);
    const yPos = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={xPos} y={yPos} fill="white" textAnchor="middle" dominantBaseline="central">
        {labelText}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey={config.dataKey}
          nameKey={config.categoryKey}
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={config.isDonut ? 75 : 0}
          fill="#8884d8"
          labelLine={config.showLabelLines}
          label={config.showLabels ? renderCustomizedLabel : false}
          startAngle={config.startAngle}
          endAngle={config.startAngle - 360}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={config.colors[index % config.colors.length]} />
          ))}
        </Pie>
        {config.showLegend && <Legend />}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}; 