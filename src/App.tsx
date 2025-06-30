import { LineChartRenderer } from './components/LineChartRenderer';
import { PieChartRenderer } from './components/PieChartRenderer';
import { BarChartRenderer } from './components/BarChartRenderer';
import type { LineChartConfig, PieChartConfig, BarChartConfig } from './types/chartConfig';
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
    </div>
  );
}

export default App;
