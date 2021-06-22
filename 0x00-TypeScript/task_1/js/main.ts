// task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function ( 
  firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
};

// task 4
interface StudentConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

export const StudentClass: StudentConstructor = class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
		constructor(firstName: string, lastName: string) {
		  this.firstName = firstName;
      this.lastName = lastName;
  	}
	  workOnHomework() { return 'Currently working'; }
	  displayName() { return this.firstName; }
}
