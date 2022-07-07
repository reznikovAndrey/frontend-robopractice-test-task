import { Input } from 'antd';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';

const SearchInput = ({ onChange }) => {
  const inputEl = useRef(null);

  useEffect(() => inputEl.current.focus(), []);

  return (
    <Input
      placeholder="Search"
      allowClear
      style={{ margin: '20px 0', width: '25%' }}
      onChange={onChange}
      ref={inputEl}
    />
  );
};

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
