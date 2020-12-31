import React from 'react';
import { Table } from 'react-bootstrap';

interface ITable {
  columns: Array<any>;
  items: Array<any>;
  className?: string;
}

const TableComponent = ({
  className,
  columns = [],
  items = []
}: ITable): React.ReactElement => {
  return (
    <Table bordered responsive className={className} striped>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            {columns.map((column, indexC) => {
              const value = item[column.key];
              return (
                <td key={indexC}>
                  {column.render
                    ? column.render(value, { ...item, index })
                    : value || '-'}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
