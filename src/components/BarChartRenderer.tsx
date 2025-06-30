import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { BarChartConfig } from '../types/chartConfig';

interface BarChartRendererProps {
  config: BarChartConfig;
  data: any[];
}

export const BarChartRenderer = ({ config, data }: BarChartRendererProps) => {
  const rechartsLayout = config.layout === 'horizontal' ? 'vertical' : 'horizontal';
  const stackOffset = config.stackType === 'percent' ? 'expand' : 'none';

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        layout={rechartsLayout}
        stackOffset={stackOffset}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {config.showGrid && <CartesianGrid strokeDasharray="3 3" />}
        {config.layout === 'vertical' ? (
          <XAxis dataKey={config.categoryKey} />
        ) : (
          <XAxis type="number" />
        )}
        {config.layout === 'vertical' ? (
          <YAxis tickFormatter={config.stackType === 'percent' ? (value) => `${value * 100}%` : undefined} />
        ) : (
          <YAxis dataKey={config.categoryKey} type="category" width={100} />
        )}
        {config.showTooltip && (
          <Tooltip
            formatter={
              config.stackType === 'percent'
                ? (value: number) => `${(value * 100).toFixed(2)}%`
                : undefined
            }
          />
        )}
        {config.showLegend && <Legend />}
        {config.series.map((series) => (
          <Bar
            key={series.dataKey}
            dataKey={series.dataKey}
            stackId={config.isStacked ? 'a' : series.dataKey}
            fill={series.color}
            name={series.label}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}; 