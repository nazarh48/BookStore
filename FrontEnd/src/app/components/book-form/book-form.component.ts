import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookForm!: FormGroup; // Form group for handling book data
  isEdit = false; // Flag to check if the form is in edit mode
  bookId: number | null = null; // Holds the ID of the book when editing

  constructor(
    private fb: FormBuilder, // FormBuilder for creating reactive forms
    private bookService: BookService, // Service for API interactions
    private route: ActivatedRoute, // ActivatedRoute for getting route parameters
    private router: Router, // Router for navigation
    private snackBar: MatSnackBar // Snackbar for displaying notifications
  ) {}

  ngOnInit(): void {
    // Initialize the form with default values and validators
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      year: [
        '',
        [
          Validators.required,
          Validators.min(1900), // Minimum year validation
          Validators.max(new Date().getFullYear()) // Maximum year validation (current year)
        ]
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
    this.bookService.getBook(id).subscribe(book => {
      this.bookForm.patchValue(book); // Populate form fields with existing book data
    });
  }

  // Handle form submission for adding or updating a book
  onSubmit() {
    if (this.bookForm.invalid) {
      this.showSnackbar('Please fill in all required fields.', 'error');
      return;
    }

    if (this.isEdit) {
      // Update existing book
      this.bookService.updateBook(this.bookId!, this.bookForm.value).subscribe(() => {
        this.showSnackbar('Book updated successfully', 'success');
        this.router.navigate(['/books']); // Navigate back to book list
      }, error => {
        this.showSnackbar('Error updating book: ' + error.message, 'error');
      });
    } else {
      // Add new book
      this.bookService.addBook(this.bookForm.value).subscribe(() => {
        this.showSnackbar('Book added successfully', 'success');
        this.router.navigate(['/books']); // Navigate back to book list
      }, error => {
        this.showSnackbar('Error adding book: ' + error.message, 'error');
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
