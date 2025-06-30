import { LineChartRenderer } from './components/LineChartRenderer';
import { PieChartRenderer } from './components/PieChartRenderer';
import type { LineChartConfig, PieChartConfig } from './types/chartConfig';
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
    </div>
  );
}

export default App;
