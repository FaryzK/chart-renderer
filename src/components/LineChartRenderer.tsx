import { LineChart } from '@mui/x-charts';
import { alpha } from '@mui/material/styles';
import type { LineChartConfig } from '../types/chartConfig';
import type { CurveType } from '@mui/x-charts';

export function LineChartRenderer({
  config,
  data,
}: {
  config: LineChartConfig;
  data: Record<string, any>[];
}) {
  const isNumericX = data.length > 0 && typeof data[0][config.x_field] === 'number';
  const scaleType = isNumericX ? 'linear' : 'point';

  const xAxis = [
    {
      scaleType: scaleType as 'linear' | 'point',
      dataKey: config.x_field,
      label: config.x_axis.show_label ? config.x_axis.label : undefined,
      hide: !config.x_axis.show_axis,
    },
  ];

  const series = config.series.map((s) => ({
    id: s.label, // Use label as series ID for styling
    dataKey: s.dataKey,
    label: s.label,
    color: s.color,
    curve: (s.smooth ? 'monotoneX' : 'linear') as CurveType,
    showMark: s.showPoints,
    area: s.fillUnderLine,
    markerSize: Number(s.pointRadius),
    markerStyle: {
      fill: s.pointFilled ? s.color : '#ffffff',
      stroke: s.color,
    },
  }));

  const yAxis = [
    {
      label: config.y_axis.show_label ? config.y_axis.label : undefined,
      hide: !config.y_axis.show_axis,
    },
  ];

  const sx = config.series.reduce((acc, s) => {
    if (s.fillUnderLine) {
      acc[`& .MuiAreaElement-series-${s.label}`] = {
        fill: `url(#gradient-${s.label})`,
      };
    }
    return acc;
  }, {} as any);

  return (
    <LineChart
      dataset={data}
      xAxis={xAxis}
      series={series}
      yAxis={yAxis}
      grid={{ horizontal: config.y_axis.show_grid, vertical: config.x_axis.show_grid }}
      sx={sx}
      slots={{
        legend: config.show_legend ? undefined : () => null,
      }}
      height={300}
      width={500}
    >
      {config.series.map((s) =>
        s.fillUnderLine ? (
          <defs key={s.label}>
            <linearGradient id={`gradient-${s.label}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={alpha(s.color, 0.4)} />
              <stop offset="95%" stopColor={alpha(s.color, 0)} />
            </linearGradient>
          </defs>
        ) : null
      )}
    </LineChart>
  );
} 