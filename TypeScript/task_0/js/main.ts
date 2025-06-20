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
const tbody = document.createElement("tbody");

// Create header row
const headerRow = document.createElement("tr");
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");

firstNameHeader.textContent = "First Name";
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
tbody.appendChild(headerRow);

// Create a row for each student
studentsList.forEach((student) => {
    const row = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
