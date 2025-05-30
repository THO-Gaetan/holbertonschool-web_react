import { RowID, RowElement } from './interface';

/**
 * Inserts a row into the database
 */
export function insertRow(row: RowElement): RowID;

/**
 * Deletes a row from the database
 */
export function deleteRow(rowId: RowID): void;

/**
 * Updates a row in the database
 * @returns The updated row ID
 */
export function updateRow(rowId: RowID, row: RowElement): RowID;