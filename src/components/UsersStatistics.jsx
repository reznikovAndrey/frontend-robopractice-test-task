import PropTypes from 'prop-types';
import { Table } from 'antd';
import { useState } from 'react';

import generateTableColumns from '../utils/generateTableColumns';
import ResizableTitle from './ResizableTitle';
import './UsersStatistics.css';

const UsersStatistics = ({ data }) => {
  const [columns, setColumns] = useState(generateTableColumns());

  const handleResize = (idx) => (e, { size }) => {
    const newColumns = [...columns];
    newColumns[idx] = {
      ...newColumns[idx],
      width: size.width,
    };
    setColumns(newColumns);
  };

  const mergedColumns = columns.map((col, idx) => ({
    ...col,
    onHeaderCell: ({ width }) => ({
      width,
      onResize: handleResize(idx),
    }),
  }));

  const components = {
    header: {
      cell: ResizableTitle,
    },
  };

  return (
    <Table
      bordered
      columns={mergedColumns}
      dataSource={data}
      scroll={{ x: 'max-content' }}
      components={components}
    />
  );
};

UsersStatistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.number.isRequired,
    fullname: PropTypes.string.isRequired,
    summary: PropTypes.exact({
      hours: PropTypes.number,
      minutes: PropTypes.number,
    }).isRequired,
  })).isRequired,
};

export default UsersStatistics;
