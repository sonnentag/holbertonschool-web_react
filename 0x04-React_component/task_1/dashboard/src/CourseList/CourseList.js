import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

function CourseList({ listCourses }) {
  return (
	  <>
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true}></CourseListRow>
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}></CourseListRow>
      </thead>
      <tbody>
              { listCourses
               ? listCourses.map((item) => {
                     <CourseListRow
                       key={item.id}
                       textFirstCell={item.name}
                       textSecondCell={item.credit}
                     />
                 })
               : <CourseListRow textFirstCell="No course available yet" />
              }

      </tbody>
    </table>
	  </>
  );
}

CourseList.prototype = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

export default CourseList
