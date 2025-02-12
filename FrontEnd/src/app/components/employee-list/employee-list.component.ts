import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/Reusable/confirm-dialog.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = []; // Array to hold the list of Employees
 
   constructor(private employeeService: EmployeeService, private router: Router, private dialog: MatDialog) {}
 
   ngOnInit(): void {
     this.loadEmployees(); // Load Employees when the component initializes
   }
 
   // Fetches the list of Employees from the API
   loadEmployees() {
     this.employeeService.getEmployees().subscribe((data) => {
       this.employees = data;
     });
   }
 
   // Opens a confirmation dialog before deleting a book
   deleteEmployee(id: number) {
     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
       width: '350px',
       data: { message: 'Are you sure you want to delete this book?' },
     });
   
     dialogRef.afterClosed().subscribe((result) => {
       if (result) {
         this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees()); // If confirmed, delete the book and reload the list
       }
     });
   }
 
   // Navigates to the edit page for a specific book
   editBook(bookId: number) {
     this.router.navigate(['/Employees/edit', bookId]); 
   }
 
   // Navigates to the add new book form
   addNewBook() {
     this.router.navigate(['/Employees/add']);
   }
}
