import { useMemo } from 'react';
import type { ScorecardConfig } from '../types/chartConfig';

interface ScorecardRendererProps {
  config: ScorecardConfig;
  data: Record<string, any>;
}

export const ScorecardRenderer = ({ config, data }: ScorecardRendererProps) => {
  const { formattedValue, changePercent, changeColor } = useMemo(() => {
    const currentValue = data[config.valueKey];
    const previousValue = config.previousValueKey ? data[config.previousValueKey] : null;
    
    // Format the main value
    const formatValue = (value: number) => {
      if (config.format === 'currency') {
        return new Intl.NumberFormat('en-US', { 
          style: 'currency', 
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(value);
      } else if (config.format === 'percentage') {
        return `${value.toFixed(1)}%`;
      } else {
        return new Intl.NumberFormat('en-US').format(value);
      }
    };

    const formattedValue = formatValue(currentValue);
    
    // Calculate percentage change
    let changePercent = null;
    let changeColor = config.colors.neutral;
    
    if (previousValue !== null && config.showChange) {
      const change = currentValue - previousValue;
      changePercent = ((currentValue - previousValue) / Math.abs(previousValue)) * 100;
      
      if (change > 0) {
        changeColor = config.colors.positive;
      } else if (change < 0) {
        changeColor = config.colors.negative;
      }
    }
    
    return {
      formattedValue,
      changePercent,
      changeColor
    };
  }, [data, config]);

  const cardStyle = {
    backgroundColor: '#2D3748',
    border: '1px solid #4A5568',
    borderRadius: '20px',
    padding: '20px',
    width: '180px',
    height: '120px',
    color: '#FFFFFF',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'space-between',
  };

  const titleStyle = {
    fontSize: '14px',
    color: '#A0AEC0',
    fontWeight: '400',
    textAlign: 'center' as const,
  };

  const valueStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center' as const,
  };

  const bottomRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const periodStyle = {
    fontSize: '14px',
    color: '#A0AEC0',
    fontWeight: '400',
  };

  const changeStyle = {
    fontSize: '14px',
    fontWeight: '600',
    padding: '4px 8px',
    borderRadius: '6px',
    backgroundColor: `${changeColor}20`,
    color: changeColor,
    minWidth: '40px',
    textAlign: 'center' as const,
  };

  return (
    <div style={cardStyle}>
      {/* Metric Name at Top */}
      <div style={titleStyle}>
        {config.title}
        {config.format === 'currency' && ' ($)'}
        {config.format === 'percentage' && ' (%)'}
      </div>
      
      {/* Large Metric Value in Center */}
      <div style={valueStyle}>
        {formattedValue}
      </div>
      
      {/* Bottom Row: Period (left) and % Change (right) */}
      <div style={bottomRowStyle}>
        <div style={periodStyle}>
          {config.period || ''}
        </div>
        
        {config.showChange && changePercent !== null && (
          <div style={changeStyle}>
            {changePercent > 0 ? '+' : ''}{changePercent.toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}; 