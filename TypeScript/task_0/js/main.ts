interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
const student2: Student = {
    firstName: "Ita",
    lastName: "Odun",
    age: 27,
    location: "Toronto"
};

const studentsList: Student[] = [student1, student2];
const table = document.createElement("table");