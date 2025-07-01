import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import type { MixedChartConfig } from '../types/chartConfig';

interface MixedChartRendererProps {
  config: MixedChartConfig;
  data: any[];
}

export const MixedChartRenderer = ({ config, data }: MixedChartRendererProps) => {
  // Check if we have negative values to show a reference line at y=0
  const hasNegativeValues = data.some(item => 
    config.series.some(series => item[series.dataKey] < 0)
  );

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          bottom: 20,
          left: 20,
        }}
      >
        {config.showGrid && <CartesianGrid strokeDasharray="3 3" />}
        
        {config.x_axis.show_axis && (
          <XAxis 
            dataKey={config.categoryKey}
            axisLine={true}
            tickLine={true}
            label={config.x_axis.show_label ? { value: config.x_axis.label, position: 'insideBottom', offset: -10 } : undefined}
          />
        )}
        
        {config.y_axis.show_axis && (
          <YAxis
            yAxisId="left"
            axisLine={true}
            tickLine={true}
            label={config.y_axis.show_label ? { value: config.y_axis.label, angle: -90, position: 'insideLeft' } : undefined}
          />
        )}
        
        {/* Check if any series uses right y-axis */}
        {config.series.some(series => series.yAxisId === 'right') && (
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={true}
            tickLine={true}
            label={
              config.secondary_y_axis?.show_label 
                ? { value: config.secondary_y_axis.label, angle: 90, position: 'insideRight' } 
                : undefined
            }
          />
        )}
        
        {config.showTooltip && <Tooltip />}
        {config.showLegend && (
          <Legend 
            verticalAlign="top" 
            height={36}
            iconType="line"
          />
        )}
        
        {/* Reference line at y=0 for negative values */}
        {hasNegativeValues && <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />}
        
        {config.series.map((series) => {
          if (series.type === 'line') {
            return (
              <Line
                key={series.dataKey}
                type={series.smooth ? 'monotone' : 'linear'}
                dataKey={series.dataKey}
                stroke={series.color}
                strokeWidth={2}
                dot={series.showPoints ? { fill: series.color, strokeWidth: 2, r: 4 } : false}
                name={series.label}
                yAxisId={series.yAxisId || 'left'}
              />
            );
          } else {
            return (
              <Bar
                key={series.dataKey}
                dataKey={series.dataKey}
                fill={series.color}
                name={series.label}
                yAxisId={series.yAxisId || 'left'}
              />
            );
          }
        })}
      </ComposedChart>
    </ResponsiveContainer>
  );
}; 