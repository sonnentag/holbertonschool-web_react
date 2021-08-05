import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite';

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {

  const [checked, setCheck] = useState(false);
  const toggleCheck = () => setCheck(checked => !checked);

  return (
    <tr className={isHeader ? css(styles.headerRowStyle) : css(styles.rowStyle) }>
      { isHeader && textSecondCell && (
        <>
          <th className={ css(styles.headerTh) }>{textFirstCell}</th>
          <th className={ css(styles.headerTh) }>{textSecondCell}</th>
        </> 
      )}
      { isHeader && !textSecondCell && (
        <><th colSpan='2' className={ css(styles.singleTh) }>{textFirstCell}</th></> 
      )}
      { !isHeader && (
        <>
          <td className={ checked ? css(styles.rowChecked, styles.defaultTh) : css(styles.defaultTh) }>
            <input type="checkbox" onChange={toggleCheck}/>
            {textFirstCell}
          </td>
          <td className={ css(styles.defaultTh) }>
            {textSecondCell}
          </td>
        </> 
      )}
    </tr>
  );
};


const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab'
  },

  rowChecked: {
    backgroundColor: '#e6e4e4'
  },

  headerRowStyle: {
    backgroundColor: '#deb5b545'
  },

  headerTh: {
    borderBottom: '2px solid rgb(170, 170, 170)',
    textAlign: 'left'
  },

  defaultTh: {
    textAlign: 'left',
    fontSize: '18px',
    padding: '4px',
  },

  singleTh: {
    textAlign: 'center',
    borderBottom: '2px solid rgb(170, 170, 170)'
  },

  coursesTd: {
    textAlign: 'left'
  },
});


export default CourseListRow
