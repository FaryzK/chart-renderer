import { LineChartRenderer } from './components/LineChartRenderer';
import { PieChartRenderer } from './components/PieChartRenderer';
import { BarChartRenderer } from './components/BarChartRenderer';
import { MixedChartRenderer } from './components/MixedChartRenderer';
import { ScorecardRenderer } from './components/ScorecardRenderer';
import type { LineChartConfig, PieChartConfig, BarChartConfig, MixedChartConfig, ScorecardConfig } from './types/chartConfig';
import './App.css';

function App() {
  const example1Config: LineChartConfig = {
    id: 'example_1',
    type: 'line_chart',
    x_field: 'month',
    series: [
      {
        label: 'Revenue',
        dataKey: 'revenue',
        color: '#0077cc',
        smooth: true,
        showPoints: true,
        pointRadius: 4,
        pointFilled: true,
        fillUnderLine: true,
      },
    ],
    x_axis: { show_grid: false, show_axis: true, show_label: true, label: 'Month' },
    y_axis: { show_grid: false, show_axis: true, show_label: true, label: 'Amount' },
    show_legend: true,
    responsive: true,
  };

  const example1Data = [
    { month: 'Jan', revenue: 186 }, { month: 'Feb', revenue: 205 },
    { month: 'Mar', revenue: 167 }, { month: 'Apr', revenue: 153 },
    { month: 'May', revenue: 198 }, { month: 'Jun', revenue: 220 },
  ];

  const example2Config: LineChartConfig = {
    id: 'example_2',
    type: 'line_chart',
    x_field: 'month',
    series: [
      { label: 'Target', dataKey: 'target', color: '#999999', smooth: false, showPoints: false, pointRadius: 4, pointFilled: false, fillUnderLine: false },
      { label: 'Actual', dataKey: 'actual', color: '#00cc88', smooth: false, showPoints: false, pointRadius: 4, pointFilled: false, fillUnderLine: false },
    ],
    x_axis: { show_grid: true, show_axis: true, show_label: true, label: 'Month' },
    y_axis: { show_grid: true, show_axis: true, show_label: false, label: '' },
    show_legend: true,
    responsive: true,
  };

  const example2Data = [
    { month: 'Jan', target: 100, actual: 95 }, { month: 'Feb', target: 110, actual: 115 },
    { month: 'Mar', target: 105, actual: 120 }, { month: 'Apr', target: 120, actual: 110 },
    { month: 'May', target: 130, actual: 125 }, { month: 'Jun', target: 125, actual: 135 },
  ];

  const example3Config: LineChartConfig = {
    id: 'example_3',
    type: 'line_chart',
    x_field: 'x',
    series: [
      { label: 'Random Data', dataKey: 'value', color: '#e74c3c', smooth: true, showPoints: true, pointRadius: 6, pointFilled: false, fillUnderLine: false },
    ],
    x_axis: { show_grid: true, show_axis: true, show_label: true, label: 'X Value' },
    y_axis: { show_grid: true, show_axis: true, show_label: true, label: 'Random Value' },
    show_legend: false,
    responsive: true,
  };

  const example3Data = Array.from({ length: 10 }, (_, i) => ({
    x: i,
    value: Math.floor(Math.random() * (2500 - 1500 + 1) + 1500),
  }));

  const pieChartData = [
    { name: 'Laptops', value: 400 },
    { name: 'Desktops', value: 300 },
    { name: 'Tablets', value: 300 },
    { name: 'Mobiles', value: 200 },
  ];

  const barChartData = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
  ];

  const multiSeriesData = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const barChartConfig1: BarChartConfig = {
    id: 'bar_1',
    type: 'bar_chart',
    layout: 'vertical',
    series: [{ label: 'Value', dataKey: 'value', color: '#8884d8' }],
    categoryKey: 'name',
    isStacked: false,
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  };

  const barChartConfig2: BarChartConfig = {
    id: 'bar_2',
    type: 'bar_chart',
    layout: 'horizontal',
    series: [{ label: 'Value', dataKey: 'value', color: '#82ca9d' }],
    categoryKey: 'name',
    isStacked: false,
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  };

  const barChartConfig3: BarChartConfig = {
    id: 'bar_3',
    type: 'bar_chart',
    layout: 'vertical',
    series: [{ label: 'Value', dataKey: 'value', color: '#ffc658' }],
    categoryKey: 'name',
    isStacked: false,
    showGrid: false,
    showTooltip: false,
    showLegend: false,
  };

  const groupedBarConfig: BarChartConfig = {
    id: 'bar_4',
    type: 'bar_chart',
    layout: 'vertical',
    series: [
      { label: 'Page Views', dataKey: 'pv', color: '#8884d8' },
      { label: 'Unique Visitors', dataKey: 'uv', color: '#82ca9d' },
    ],
    categoryKey: 'name',
    isStacked: false,
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  };

  const stackedBarConfig: BarChartConfig = {
    id: 'bar_5',
    type: 'bar_chart',
    layout: 'vertical',
    series: [
      { label: 'Page Views', dataKey: 'pv', color: '#8884d8' },
      { label: 'Unique Visitors', dataKey: 'uv', color: '#82ca9d' },
    ],
    categoryKey: 'name',
    isStacked: true,
    stackType: 'absolute',
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  };

  const percentStackedBarConfig: BarChartConfig = {
    id: 'bar_6',
    type: 'bar_chart',
    layout: 'vertical',
    series: [
      { label: 'Page Views', dataKey: 'pv', color: '#8884d8' },
      { label: 'Unique Visitors', dataKey: 'uv', color: '#82ca9d' },
    ],
    categoryKey: 'name',
    isStacked: true,
    stackType: 'percent',
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  };

  const pieChartConfig1: PieChartConfig = {
    id: 'pie_1',
    type: 'pie_chart',
    dataKey: 'value',
    categoryKey: 'name',
    isDonut: false,
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    startAngle: 90,
    showLabels: true,
    labelType: 'percent',
    showLabelLines: false,
    showLegend: true,
    responsive: true,
  };

  const pieChartConfig2: PieChartConfig = {
    id: 'pie_2',
    type: 'pie_chart',
    dataKey: 'value',
    categoryKey: 'name',
    isDonut: true,
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    startAngle: 90,
    showLabels: true,
    labelType: 'percent',
    showLabelLines: false,
    showLegend: true,
    responsive: true,
  };

  const pieChartConfig3: PieChartConfig = {
    id: 'pie_3',
    type: 'pie_chart',
    dataKey: 'value',
    categoryKey: 'name',
    isDonut: false,
    colors: ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f'],
    startAngle: 90,
    showLabels: true,
    labelType: 'percent',
    showLabelLines: false,
    showLegend: true,
    responsive: true,
  };

  const pieChartConfig4: PieChartConfig = {
    id: 'pie_4',
    type: 'pie_chart',
    dataKey: 'value',
    categoryKey: 'name',
    isDonut: false,
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    startAngle: 180,
    showLabels: true,
    labelType: 'percent',
    showLabelLines: false,
    showLegend: true,
    responsive: true,
  };

  const pieChartConfig5: PieChartConfig = {
    id: 'pie_5',
    type: 'pie_chart',
    dataKey: 'value',
    categoryKey: 'name',
    isDonut: false,
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
    startAngle: 90,
    showLabels: true,
    labelType: 'absolute',
    showLabelLines: true,
    showLegend: true,
    responsive: true,
  };

  // Mixed Chart Data and Configs
  const cashflowData = [
    { month: 'Jan', revenue: 50000, costs: 35000, profit: 15000 },
    { month: 'Feb', revenue: 52000, costs: 38000, profit: 14000 },
    { month: 'Mar', revenue: 48000, costs: 42000, profit: 6000 },
    { month: 'Apr', revenue: 45000, costs: 48000, profit: -3000 },
    { month: 'May', revenue: 58000, costs: 45000, profit: 13000 },
    { month: 'Jun', revenue: 62000, costs: 47000, profit: 15000 },
    { month: 'Jul', revenue: 55000, costs: 43000, profit: 12000 },
    { month: 'Aug', revenue: 59000, costs: 46000, profit: 13000 },
  ];

  const cashflowConfig: MixedChartConfig = {
    id: 'mixed_1',
    type: 'mixed_chart',
    categoryKey: 'month',
    series: [
      {
        label: 'Revenue',
        dataKey: 'revenue',
        color: '#2ecc71',
        type: 'line',
        smooth: true,
        showPoints: true,
      },
      {
        label: 'Costs',
        dataKey: 'costs',
        color: '#e74c3c',
        type: 'line',
        smooth: true,
        showPoints: true,
      },
      {
        label: 'Profit',
        dataKey: 'profit',
        color: '#3498db',
        type: 'bar',
      },
    ],
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    x_axis: {
      show_axis: true,
      show_label: true,
      label: 'Month',
    },
    y_axis: {
      show_axis: true,
      show_label: true,
      label: 'Amount ($)',
    },
    responsive: true,
  };

  const salesData = [
    { quarter: 'Q1', target: 100, actual: 95, growth: 8 },
    { quarter: 'Q2', target: 120, actual: 115, growth: 12 },
    { quarter: 'Q3', target: 110, actual: 125, growth: 15 },
    { quarter: 'Q4', target: 140, actual: 135, growth: 18 },
  ];

  const salesConfig: MixedChartConfig = {
    id: 'mixed_2',
    type: 'mixed_chart',
    categoryKey: 'quarter',
    series: [
      {
        label: 'Target',
        dataKey: 'target',
        color: '#95a5a6',
        type: 'line',
        smooth: false,
        showPoints: false,
      },
      {
        label: 'Actual',
        dataKey: 'actual',
        color: '#2ecc71',
        type: 'line',
        smooth: false,
        showPoints: true,
      },
      {
        label: 'Growth %',
        dataKey: 'growth',
        color: '#f39c12',
        type: 'bar',
      },
    ],
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    x_axis: {
      show_axis: true,
      show_label: true,
      label: 'Quarter',
    },
    y_axis: {
      show_axis: true,
      show_label: true,
      label: 'Sales / Growth',
    },
    responsive: true,
  };

  const performanceData = [
    { month: 'Jan', efficiency: 85, errors: 12 },
    { month: 'Feb', efficiency: 88, errors: 8 },
    { month: 'Mar', efficiency: 82, errors: 15 },
    { month: 'Apr', efficiency: 90, errors: 6 },
    { month: 'May', efficiency: 87, errors: 9 },
    { month: 'Jun', efficiency: 92, errors: 4 },
  ];

  const performanceConfig: MixedChartConfig = {
    id: 'mixed_3',
    type: 'mixed_chart',
    categoryKey: 'month',
    series: [
      {
        label: 'Efficiency %',
        dataKey: 'efficiency',
        color: '#27ae60',
        type: 'line',
        smooth: true,
        showPoints: true,
        yAxisId: 'right', // Use right axis for percentage
      },
      {
        label: 'Error Count',
        dataKey: 'errors',
        color: '#e67e22',
        type: 'bar',
        yAxisId: 'left', // Use left axis for count
      },
    ],
    showGrid: false,
    showTooltip: true,
    showLegend: true,
    x_axis: {
      show_axis: true,
      show_label: false,
      label: '',
    },
    y_axis: {
      show_axis: true,
      show_label: true,
      label: 'Error Count',
    },
    secondary_y_axis: {
      show_label: true,
      label: 'Efficiency %',
    },
    responsive: true,
  };

  // Dual Y-Axis Example - Revenue vs Conversion Rate
  const dualAxisData = [
    { month: 'Jan', revenue: 50000, conversionRate: 2.5 },
    { month: 'Feb', revenue: 52000, conversionRate: 2.8 },
    { month: 'Mar', revenue: 48000, conversionRate: 2.3 },
    { month: 'Apr', revenue: 58000, conversionRate: 3.1 },
    { month: 'May', revenue: 62000, conversionRate: 3.4 },
    { month: 'Jun', revenue: 55000, conversionRate: 2.9 },
  ];

  const dualAxisConfig: MixedChartConfig = {
    id: 'mixed_4',
    type: 'mixed_chart',
    categoryKey: 'month',
    series: [
      {
        label: 'Revenue',
        dataKey: 'revenue',
        color: '#3498db',
        type: 'bar',
        yAxisId: 'left', // Revenue uses left axis (thousands)
      },
      {
        label: 'Conversion Rate',
        dataKey: 'conversionRate',
        color: '#e74c3c',
        type: 'line',
        smooth: true,
        showPoints: true,
        yAxisId: 'right', // Conversion rate uses right axis (percentage)
      },
    ],
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    x_axis: {
      show_axis: true,
      show_label: true,
      label: 'Month',
    },
    y_axis: {
      show_axis: true,
      show_label: true,
      label: 'Revenue ($)',
    },
    secondary_y_axis: {
      show_label: true,
      label: 'Conversion Rate (%)',
    },
    responsive: true,
  };

  // Scorecard Data and Configs
  const revenueData = { 
    current: 24165, 
    previous: 22800,
    period: '24 Hours'
  };

  const conversionData = {
    current: 3.8,
    previous: 3.2,
    period: 'This Month'
  };

  const customersData = {
    current: 1247,
    previous: 1180,
    period: 'Active Users'
  };

  const profitData = {
    current: 45000,
    previous: 52000,
    period: 'Monthly'
  };

  const revenueScorecard: ScorecardConfig = {
    id: 'scorecard_1',
    type: 'scorecard',
    title: 'Total Revenue',
    period: '24 Hours',
    valueKey: 'current',
    previousValueKey: 'previous',
    format: 'currency',
    showChange: true,
    colors: {
      positive: '#10B981',
      negative: '#EF4444',
      neutral: '#6B7280',
    },
  };

  const conversionScorecard: ScorecardConfig = {
    id: 'scorecard_2',
    type: 'scorecard',
    title: 'Conversion Rate',
    period: 'This Month',
    valueKey: 'current',
    previousValueKey: 'previous',
    format: 'percentage',
    showChange: true,
    colors: {
      positive: '#10B981',
      negative: '#EF4444',
      neutral: '#6B7280',
    },
  };

  const customersScorecard: ScorecardConfig = {
    id: 'scorecard_3',
    type: 'scorecard',
    title: 'Active Customers',
    period: 'This Month',
    valueKey: 'current',
    previousValueKey: 'previous',
    format: 'number',
    showChange: true,
    colors: {
      positive: '#10B981',
      negative: '#EF4444',
      neutral: '#6B7280',
    },
  };

  const profitScorecard: ScorecardConfig = {
    id: 'scorecard_4',
    type: 'scorecard',
    title: 'Net Profit',
    period: 'This Month',
    valueKey: 'current',
    previousValueKey: 'previous',
    format: 'currency',
    showChange: true,
    colors: {
      positive: '#10B981',
      negative: '#EF4444',
      neutral: '#6B7280',
    },
  };

  const simpleMetricData = {
    current: 89.5,
    period: 'Current'
  };

  const simpleScorecard: ScorecardConfig = {
    id: 'scorecard_5',
    type: 'scorecard',
    title: 'System Health',
    period: 'Current Status',
    valueKey: 'current',
    format: 'percentage',
    showChange: false,
    colors: {
      positive: '#10B981',
      negative: '#EF4444',
      neutral: '#6B7280',
    },
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Line Chart Examples</h1>

      <h2>Example 1: One smooth line, filled, no grid</h2>
      <LineChartRenderer config={example1Config} data={example1Data} />

      <h2>Example 2: Two straight lines, no fill, hidden points</h2>
      <LineChartRenderer config={example2Config} data={example2Data} />

      <h2>Example 3: One line, numerical X-axis, with grid, no fill</h2>
      <LineChartRenderer config={example3Config} data={example3Data} />

      <h1>Pie Chart Examples</h1>

      <h2>Example 1: Standard Pie Chart</h2>
      <PieChartRenderer config={pieChartConfig1} data={pieChartData} />

      <h2>Example 2: Donut Chart</h2>
      <PieChartRenderer config={pieChartConfig2} data={pieChartData} />

      <h2>Example 3: Different Colors</h2>
      <PieChartRenderer config={pieChartConfig3} data={pieChartData} />

      <h2>Example 4: Rotation</h2>
      <PieChartRenderer config={pieChartConfig4} data={pieChartData} />

      <h2>Example 5: Labels with lines and absolute values</h2>
      <PieChartRenderer config={pieChartConfig5} data={pieChartData} />

      <h1>Bar Chart Examples</h1>

      <h2>Example 1: Vertical Bar Chart with Individual Colors</h2>
      <BarChartRenderer config={barChartConfig1} data={barChartData} />

      <h2>Example 2: Horizontal Bar Chart with Individual Colors</h2>
      <BarChartRenderer config={barChartConfig2} data={barChartData} />

      <h2>Example 3: Bar Chart without Gridlines, Tooltip, or Legend</h2>
      <BarChartRenderer config={barChartConfig3} data={barChartData} />

      <h2>Example 4: Grouped Bar Chart</h2>
      <BarChartRenderer config={groupedBarConfig} data={multiSeriesData} />

      <h2>Example 5: Stacked Bar Chart (Absolute)</h2>
      <BarChartRenderer config={stackedBarConfig} data={multiSeriesData} />

      <h2>Example 6: Stacked Bar Chart (Percentage)</h2>
      <BarChartRenderer config={percentStackedBarConfig} data={multiSeriesData} />

      <h1>Mixed Chart Examples</h1>

      <h2>Example 1: Cashflow Analysis - Revenue & Costs (Lines) + Profit (Bars)</h2>
      <MixedChartRenderer config={cashflowConfig} data={cashflowData} />

      <h2>Example 2: Sales Performance - Target & Actual (Lines) + Growth (Bars)</h2>
      <MixedChartRenderer config={salesConfig} data={salesData} />

      <h2>Example 3: System Performance - Efficiency (Line) + Errors (Bars) with Dual Y-Axis</h2>
      <MixedChartRenderer config={performanceConfig} data={performanceData} />

      <h2>Example 4: Revenue vs Conversion Rate - Dual Y-Axis Different Scales</h2>
      <MixedChartRenderer config={dualAxisConfig} data={dualAxisData} />

      <h1>Scorecard Examples</h1>

      <h2>Example 1: Financial Metrics</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <ScorecardRenderer config={revenueScorecard} data={revenueData} />
        <ScorecardRenderer config={profitScorecard} data={profitData} />
      </div>

      <h2>Example 2: Different Sizes and Formats</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <ScorecardRenderer config={conversionScorecard} data={conversionData} />
        <ScorecardRenderer config={customersScorecard} data={customersData} />
        <ScorecardRenderer config={simpleScorecard} data={simpleMetricData} />
      </div>
    </div>
  );
}

export default App;
