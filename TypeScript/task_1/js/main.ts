interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional properties
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

const student = new StudentClass({
  firstName: 'John',
  lastName: 'Doe',
});

/*  const staffList: (Teacher | Directors)[] = [teacher3, director1];
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  // Create header row
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");
  const fullTimeEmployeeHeader = document.createElement("th");
  const lastNameHeader = document.createElement("th");
  const contractHeader = document.createElement("th");
  const reportsHeader = document.createElement("th");
  
  contractHeader.textContent = "Contract";
  lastNameHeader.textContent = "Last Name";
  fullTimeEmployeeHeader.textContent = "Full Time Employee";
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  reportsHeader.textContent = "Number of Reports";
  headerRow.appendChild(contractHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(fullTimeEmployeeHeader);
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  headerRow.appendChild(reportsHeader);
  tbody.appendChild(headerRow);

  // Create a row for each staff member
  staffList.forEach((staff) => {
    const row = document.createElement("tr");
    
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = staff.firstName;
    
    const locationCell = document.createElement("td");
    locationCell.textContent = staff.location;

    const fullTimeEmployeeCell = document.createElement("td");
    fullTimeEmployeeCell.textContent = staff.fullTimeEmployee ? "true" : "false";

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = staff.lastName;

    const contractCell = document.createElement("td");
    contractCell.textContent = staff.contract ? "true" : "false";
    
    const reportsCell = document.createElement("td");
    // Check if the staff member is a director (has numberOfReports property)
    reportsCell.textContent = 'numberOfReports' in staff ? staff.numberOfReports.toString() : "N/A";

    row.appendChild(contractCell);
    row.appendChild(lastNameCell);
    row.appendChild(fullTimeEmployeeCell);
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    row.appendChild(reportsCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table); */

  console.log(teacher3);
  console.log(director1);
  console.log(printTeacher("John", "Doe"));
  console.log(student.workOnHomework()); 
  console.log(student.displayName()); 