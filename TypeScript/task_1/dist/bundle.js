/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
var studentsList = [teacher3];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
// Create header row
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
var locationHeader = document.createElement("th");
var fullTimeEmployeeHeader = document.createElement("th");
var lastNameHeader = document.createElement("th");
var contractHeader = document.createElement("th");
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
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    var fullTimeEmployeeCell = document.createElement("td");
    fullTimeEmployeeCell.textContent = student.fullTimeEmployee ? "Yes" : "No";
    var lastNameCell = document.createElement("td");
    lastNameCell.textContent = student.lastName;
    var contractCell = document.createElement("td");
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ0tBLElBQU0sUUFBUSxHQUFZO0lBQ3RCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsSUFBTSxZQUFZLEdBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFOUMsb0JBQW9CO0FBQ3BCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0MsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELElBQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1RCxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFcEQsY0FBYyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDeEMsY0FBYyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDekMsc0JBQXNCLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FBQzFELGVBQWUsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO0FBQzNDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0FBQ3hDLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxTQUFTLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDOUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN2QyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFN0IsZ0NBQWdDO0FBQ2hDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO0lBQ3pCLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFekMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxhQUFhLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFFOUMsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFNUMsSUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELG9CQUFvQixDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRTNFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRTVDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUUzRCxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVQb29sIH0gZnJvbSBcImZvcmstdHMtY2hlY2tlci13ZWJwYWNrLXBsdWdpbi9saWIvdXRpbHMvYXN5bmMvcG9vbFwiO1xuXG5pbnRlcmZhY2UgVGVhY2hlciB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBmdWxsVGltZUVtcGxveWVlOiBib29sZWFuO1xuICAgIHllYXJzT2ZFeHBlcmllbmNlPzogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgW2tleTogc3RyaW5nXTogYW55OyAvLyBBbGxvdyBhZGRpdGlvbmFsIHByb3BlcnRpZXNcbn1cblxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gICAgZmlyc3ROYW1lOiAnSm9obicsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogZmFsc2UsXG4gICAgbGFzdE5hbWU6ICdEb2UnLFxuICAgIGxvY2F0aW9uOiAnTG9uZG9uJyxcbiAgICBjb250cmFjdDogZmFsc2UsXG4gIH07XG5cbiAgY29uc3Qgc3R1ZGVudHNMaXN0OiBUZWFjaGVyW10gPSBbdGVhY2hlcjNdO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XG4gIFxuICAvLyBDcmVhdGUgaGVhZGVyIHJvd1xuICBjb25zdCBoZWFkZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IGZpcnN0TmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgbG9jYXRpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGZ1bGxUaW1lRW1wbG95ZWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGxhc3ROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICBjb25zdCBjb250cmFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgXG4gIGNvbnRyYWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJDb250cmFjdFwiO1xuICBsYXN0TmFtZUhlYWRlci50ZXh0Q29udGVudCA9IFwiTGFzdCBOYW1lXCI7XG4gIGZ1bGxUaW1lRW1wbG95ZWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZ1bGwgVGltZSBFbXBsb3llZVwiO1xuICBmaXJzdE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZpcnN0IE5hbWVcIjtcbiAgbG9jYXRpb25IZWFkZXIudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGhlYWRlclJvdy5hcHBlbmRDaGlsZChjb250cmFjdEhlYWRlcik7XG4gIGhlYWRlclJvdy5hcHBlbmRDaGlsZChsYXN0TmFtZUhlYWRlcik7XG4gIGhlYWRlclJvdy5hcHBlbmRDaGlsZChmdWxsVGltZUVtcGxveWVlSGVhZGVyKTtcbiAgaGVhZGVyUm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUhlYWRlcik7XG4gIGhlYWRlclJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWRlcik7XG4gIHRib2R5LmFwcGVuZENoaWxkKGhlYWRlclJvdyk7XG4gIFxuICAvLyBDcmVhdGUgYSByb3cgZm9yIGVhY2ggc3R1ZGVudFxuICBzdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgXG4gICAgICBjb25zdCBmaXJzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgZmlyc3ROYW1lQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQuZmlyc3ROYW1lO1xuICAgICAgXG4gICAgICBjb25zdCBsb2NhdGlvbkNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBsb2NhdGlvbkNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmxvY2F0aW9uO1xuXG4gICAgICBjb25zdCBmdWxsVGltZUVtcGxveWVlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgIGZ1bGxUaW1lRW1wbG95ZWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5mdWxsVGltZUVtcGxveWVlID8gXCJZZXNcIiA6IFwiTm9cIjtcbiAgICAgIFxuICAgICAgY29uc3QgbGFzdE5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgbGFzdE5hbWVDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5sYXN0TmFtZTtcblxuICAgICAgY29uc3QgY29udHJhY3RDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgY29udHJhY3RDZWxsLnRleHRDb250ZW50ID0gc3R1ZGVudC5jb250cmFjdCA/IFwiWWVzXCIgOiBcIk5vXCI7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjb250cmFjdENlbGwpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGZpcnN0TmFtZUNlbGwpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGZ1bGxUaW1lRW1wbG95ZWVDZWxsKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChsYXN0TmFtZUNlbGwpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGxvY2F0aW9uQ2VsbCk7XG4gICAgICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xuICB9KTtcbiAgXG4gIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=