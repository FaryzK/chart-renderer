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

export interface MixedChartSeriesConfig {
  label: string;
  dataKey: string;
  color: string;
  type: 'line' | 'bar';
  smooth?: boolean; // Only for line type
  showPoints?: boolean; // Only for line type
  yAxisId?: string; // Optional: for dual y-axis support
}

export interface MixedChartConfig {
  id: string;
  type: 'mixed_chart';
  categoryKey: string;
  series: MixedChartSeriesConfig[];
  showGrid: boolean;
  showTooltip: boolean;
  showLegend: boolean;
  x_axis: {
    show_axis: boolean;
    show_label: boolean;
    label: string;
  };
  y_axis: {
    show_axis: boolean;
    show_label: boolean;
    label: string;
  };
  secondary_y_axis?: {
    show_label: boolean;
    label: string;
  };
  responsive: true;
}

export interface ScorecardConfig {
  id: string;
  type: 'scorecard';
  title: string;
  period?: string;
  valueKey: string;
  previousValueKey?: string;
  format?: 'number' | 'currency' | 'percentage';
  showChange: boolean;
  colors: {
    positive: string;
    negative: string;
    neutral: string;
  };
}

export interface TableColumnConfig {
  key: string;
  header: string;
  width?: string;
  align?: 'left' | 'center' | 'right';
  format?: 'text' | 'number' | 'currency' | 'percentage' | 'date';
  sortable?: boolean;
}

export interface TableConfig {
  id: string;
  type: 'table';
  columns: TableColumnConfig[];
  showHeader: boolean;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
  sortable?: boolean;
  pagination?: {
    enabled: boolean;
    pageSize: number;
    showPageInfo: boolean;
  };
  styling: {
    headerBg: string;
    headerText: string;
    rowBg: string;
    rowAltBg: string;
    rowText: string;
    borderColor: string;
  };
} 