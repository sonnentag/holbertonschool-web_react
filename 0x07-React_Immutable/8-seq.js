import { Seq } from 'immutable';

const printBestStudents = (object) => {
  console.log(Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName: student.firstName[0].toUpperCase() + student.firstName.substring(1),
      lastName: student.lastName[0].toUpperCase() + student.lastName.substring(1),
    }))
    .toJs()
  );
};

export default printBestStudents;
