import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/Reusable/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = []; // Array to hold the list of books

  constructor(private bookService: BookService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBooks(); // Load books when the component initializes
  }

  // Fetches the list of books from the API
  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  // Opens a confirmation dialog before deleting a book
  deleteBook(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete this book?' },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.bookService.deleteBook(id).subscribe(() => this.loadBooks()); // If confirmed, delete the book and reload the list
      }
    });
  }

  // Navigates to the edit page for a specific book
  editBook(bookId: number) {
    this.router.navigate(['/books/edit', bookId]); 
  }

  // Navigates to the add new book form
  addNewBook() {
    this.router.navigate(['/books/add']);
  }
}
