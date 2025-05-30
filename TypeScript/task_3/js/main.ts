/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get a new row ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${JSON.stringify(row)}`);

// Create an updated row with age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Update the row
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);