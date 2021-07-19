import React from 'react'
import PropTypes from 'prop-types'

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
	  PropTypes.string,
	  PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
	  if (textSecondCell) {
		  const ret = (
			  <>
			    <th>{textFirstCell}</th>
			    <th>{textSecondCell}</th>
			  </>
			)
    } else {
		  const ret = (
			  <>
			    <td>{textFirstCell}</td>
				  <td>{textSecondCell}</td>
			  </>
		  )
    }
	} else {
		const ret = <th colSpan='2'>{textFirstCell}</th>
	}

	return <tr>{ret}</tr>
}

export default CourseListRow
