import React from 'react'
import PropTypes from 'prop-types'

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
}

const headerRowStyle = {
  backgroundColor: '#deb5b545',
}

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      { isHeader && textSecondCell && <><th>{textFirstCell}</th><th>{textSecondCell}</th></> }
      { isHeader && !textSecondCell && <><th colSpan='2'>{textFirstCell}</th></> }
      { !isHeader && <><td>{textFirstCell}</td><td>{textSecondCell}</td></> }
    </tr>
  );
};

export default CourseListRow
