export interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export class Director implements DirectorInterface {
	workFromHome() { return 'Working from home'; }
	getCoffeeBreak() { return 'Getting a coffee break'; }
	workDirectorTasks() { return 'Getting to director tasks'; }
}

export class Teacher implements TeacherInterface {
	workFromHome() { return 'Cannot work from home'; }
	getCoffeeBreak() { return 'Cannot have a break'; }
	workTeacherTasks() { return 'Getting to work'; }
}

export function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) return new Teacher;
	return new Director;
}

function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
  return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  return employee.workTeacherTasks();
}
