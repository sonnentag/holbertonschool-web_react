import { Seq } from 'immutable';

const printBestStudents = (object) => {
  console.log(Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      const { firstName, lastName } = student;
      score: student.score,
      firstName: firstName[0].toUpperCase() + firstName.substring(1),
      lastName: lastName[0].toUpperCase() + lastName.substring(1),
    }))
    .toJs()
  );
};

export default printBestStudents;
