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

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	let ret;
  if (isHeader) {
	  if (textSecondCell) {
		  ret = (
			  <>
			    <th>{textFirstCell}</th>
			    <th>{textSecondCell}</th>
			  </>
			)
	} else {
		ret = <th colSpan='2'>{textFirstCell}</th>
	}
    } else {
		  ret = (
			  <>
			    <td>{textFirstCell}</td>
				  <td>{textSecondCell}</td>
			  </>
		  )
    }
	return <><tr>{ret}</tr></>
}

export default CourseListRow
