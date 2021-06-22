interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Robert",
    lastName: "Johnson",
    age: 27,
    location: "Dallas",
};

const student2: Student = {
    firstName: "Bo",
    lastName: "Diddley",
    age: 32,
    location: "Memphis",
};

const studentsList: Student[] = [student1, student2]

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
    const tr: HTMLTableRowElement = table.insertRow();
    const td1: HTMLTableCellElement = tr.insertCell();
    const td2: HTMLTableCellElement = tr.insertCell();
    td1.innerHTML = student.firstName
    td2.innerHTML = student.location
});
