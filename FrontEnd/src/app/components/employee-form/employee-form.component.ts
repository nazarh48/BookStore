import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup; // Form group for handling book data
    isEdit = false; // Flag to check if the form is in edit mode
    bookId: number | null = null; // Holds the ID of the book when editing

    constructor(
      private fb: FormBuilder, // FormBuilder for creating reactive forms
      private employeeService: EmployeeService, // Service for API interactions
      private route: ActivatedRoute, // ActivatedRoute for getting route parameters
      private router: Router, // Router for navigation
      private snackBar: MatSnackBar // Snackbar for displaying notifications
    ) {}

    ngOnInit(): void {
      // Initialize the form with default values and validators
      this.employeeForm = this.fb.group({
        employeeName: ['', [Validators.required, Validators.minLength(3)]],
        qualification: ['', [Validators.required, Validators.minLength(3)]],
        age: ['',[Validators.required,],],
        city: ['',[Validators.required,],

        ]
      });

      // Check if the route has an 'id' parameter (for editing a book)
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        if (id) {
          this.isEdit = true; // Set edit mode to true
          this.bookId = +id; // Convert the ID from string to number
          this.loadBook(this.bookId); // Load book details for editing
        }
      });
    }

    // Load book data into the form for editing
    loadBook(id: number) {
      this.employeeService.getEmployee(id).subscribe(book => {
        this.employeeForm.patchValue(book); // Populate form fields with existing book data
      });
    }

    // Handle form submission for adding or updating a book
    onSubmit() {
      if (this.employeeForm.invalid) {
        this.showSnackbar('Please fill in all required fields.', 'error');
        return;
      }

      if (this.isEdit) {
        // Update existing book
        this.employeeService.updateEmployee(this.bookId!, this.employeeForm.value).subscribe(() => {
          this.showSnackbar('Employee updated successfully', 'success');
          this.router.navigate(['/Employee']); // Navigate back to book list
        }, error => {
          this.showSnackbar('Error updating book: ' + error.message, 'error');
        });
      } else {
        // Add new book
        this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
          this.showSnackbar('Employee added successfully', 'success');
          this.router.navigate(['/Employee']); // Navigate back to book list
        }, error => {
          this.showSnackbar('Error adding Employee: ' + error.message, 'error');
        });
      }
    }

    // Display a snackbar message for notifications
    private showSnackbar(message: string, type: 'success' | 'error') {
      this.snackBar.open(message, 'Close', {
        duration: 3000,
        panelClass: type === 'success' ? 'snackbar-success' : 'snackbar-error',
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
}
