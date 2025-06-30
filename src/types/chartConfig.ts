export interface LineChartSeriesConfig {
  label: string;
  dataKey: string;
  color: string;
  smooth: boolean;
  showPoints: boolean;
  pointRadius: number;
  pointFilled: boolean;
  fillUnderLine: boolean;
}

export interface LineChartConfig {
  id: string;
  type: 'line_chart';
  x_field: string;
  series: LineChartSeriesConfig[];
  x_axis: {
    show_grid: boolean;
    show_axis: boolean;
    show_label: boolean;
    label: string;
  };
  y_axis: {
    show_grid: boolean;
    show_axis: boolean;
    show_label: boolean;
    label: string;
  };
  show_legend: boolean;
  responsive: true;
}

export interface PieChartConfig {
  id: string;
  type: 'pie_chart';
  dataKey: string;
  categoryKey: string;
  isDonut: boolean;
  colors: string[];
  startAngle: number;
  showLabels: boolean;
  labelType: 'percent' | 'absolute';
  showLabelLines: boolean;
  showLegend: boolean;
  responsive: true;
}

export interface BarChartSeriesConfig {
  label: string;
  dataKey: string;
  color: string;
}

export interface BarChartConfig {
  id: string;
  type: 'bar_chart';
  layout: 'vertical' | 'horizontal';
  series: BarChartSeriesConfig[];
  categoryKey: string;
  isStacked: boolean;
  stackType?: 'absolute' | 'percent';
  showGrid: boolean;
  showTooltip: boolean;
  showLegend: boolean;
} 