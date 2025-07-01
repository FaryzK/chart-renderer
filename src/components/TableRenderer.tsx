import { useState, useMemo } from 'react';
import type { TableConfig } from '../types/chartConfig';

interface TableRendererProps {
  config: TableConfig;
  data: Record<string, any>[];
}

export const TableRenderer = ({ config, data }: TableRendererProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);

  // Format cell value based on column configuration
  const formatCellValue = (value: any, format: string = 'text') => {
    if (value === null || value === undefined) return '';
    
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(Number(value));
      
      case 'percentage':
        return `${Number(value).toFixed(1)}%`;
      
      case 'number':
        return new Intl.NumberFormat('en-US').format(Number(value));
      
      case 'date':
        return new Date(value).toLocaleDateString();
      
      default:
        return String(value);
    }
  };

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      
      let comparison = 0;
      if (aVal < bVal) comparison = -1;
      if (aVal > bVal) comparison = 1;
      
      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [data, sortColumn, sortDirection]);

  // Handle pagination
  const paginatedData = useMemo(() => {
    if (!config.pagination?.enabled) return sortedData;
    
    const startIndex = (currentPage - 1) * config.pagination.pageSize;
    return sortedData.slice(startIndex, startIndex + config.pagination.pageSize);
  }, [sortedData, currentPage, config.pagination]);

  const totalPages = config.pagination?.enabled 
    ? Math.ceil(data.length / config.pagination.pageSize) 
    : 1;

  // Handle column sorting
  const handleSort = (columnKey: string) => {
    if (!config.sortable) return;
    
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    border: config.bordered ? `1px solid ${config.styling.borderColor}` : 'none',
  };

  const headerStyle = {
    backgroundColor: config.styling.headerBg,
    color: config.styling.headerText,
    fontWeight: '600',
    fontSize: '14px',
    padding: config.compact ? '8px 12px' : '12px 16px',
  };

  const cellStyle = (rowIndex: number) => ({
    padding: config.compact ? '8px 12px' : '12px 16px',
    fontSize: '14px',
    color: config.styling.rowText,
    backgroundColor: config.striped && rowIndex % 2 === 1 
      ? config.styling.rowAltBg 
      : config.styling.rowBg,
    borderBottom: config.bordered ? `1px solid ${config.styling.borderColor}` : 'none',
  });

  const paginationStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
    fontSize: '14px',
    color: config.styling.rowText,
  };

  const buttonStyle = {
    padding: '8px 12px',
    backgroundColor: config.styling.headerBg,
    color: config.styling.headerText,
    border: `1px solid ${config.styling.borderColor}`,
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <div>
      <table style={tableStyle}>
        {config.showHeader && (
          <thead>
            <tr>
              {config.columns.map((column) => (
                <th
                  key={column.key}
                  style={{
                    ...headerStyle,
                    width: column.width,
                    textAlign: column.align || 'left',
                    cursor: config.sortable && column.sortable !== false ? 'pointer' : 'default',
                    borderBottom: config.bordered ? `1px solid ${config.styling.borderColor}` : 'none',
                    borderRight: config.bordered ? `1px solid ${config.styling.borderColor}` : 'none',
                  }}
                  onClick={() => config.sortable && column.sortable !== false && handleSort(column.key)}
                >
                  {column.header}
                  {config.sortable && sortColumn === column.key && (
                    <span style={{ marginLeft: '4px' }}>
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {config.columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    ...cellStyle(rowIndex),
                    textAlign: column.align || 'left',
                    borderRight: config.bordered ? `1px solid ${config.styling.borderColor}` : 'none',
                  }}
                >
                  {formatCellValue(row[column.key], column.format)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {config.pagination?.enabled && (
        <div style={paginationStyle}>
          <div>
            {config.pagination.showPageInfo && 
              `Showing ${((currentPage - 1) * config.pagination.pageSize) + 1}-${Math.min(currentPage * config.pagination.pageSize, data.length)} of ${data.length} items`
            }
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              style={buttonStyle}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              style={buttonStyle}
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}; 