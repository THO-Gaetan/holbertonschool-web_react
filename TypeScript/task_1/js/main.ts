import { createPool } from "fork-ts-checker-webpack-plugin/lib/utils/async/pool";

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional properties
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  const studentsList: Teacher[] = [teacher3];
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  // Create header row
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");
  const fullTimeEmployeeHeader = document.createElement("th");
  const lastNameHeader = document.createElement("th");
  const contractHeader = document.createElement("th");
  
  contractHeader.textContent = "Contract";
  lastNameHeader.textContent = "Last Name";
  fullTimeEmployeeHeader.textContent = "Full Time Employee";
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  headerRow.appendChild(contractHeader);
  headerRow.appendChild(lastNameHeader);
  headerRow.appendChild(fullTimeEmployeeHeader);
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

      const fullTimeEmployeeCell = document.createElement("td");
      fullTimeEmployeeCell.textContent = student.fullTimeEmployee ? "Yes" : "No";
      
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = student.lastName;

      const contractCell = document.createElement("td");
      contractCell.textContent = student.contract ? "Yes" : "No";

      row.appendChild(contractCell);
      row.appendChild(firstNameCell);
      row.appendChild(fullTimeEmployeeCell);
      row.appendChild(lastNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);
