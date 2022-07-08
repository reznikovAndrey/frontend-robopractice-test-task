/* eslint-disable react/jsx-props-no-spreading */
import { Resizable } from 'react-resizable';
import PropTypes from 'prop-types';

const ResizableTitle = ({ onResize, width, ...restProps }) => {
  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={(
        <span
          className="react-resizable-handle"
          onClick={(e) => e.stopPropagation()}
          aria-hidden="true"
        />
      )}
      onResize={onResize}
    >
      <th {...restProps} />
    </Resizable>
  );
};

ResizableTitle.propTypes = {
  onResize: PropTypes.func.isRequired,
  width: PropTypes.number,
};

ResizableTitle.defaultProps = {
  width: 0,
};

export default ResizableTitle;
