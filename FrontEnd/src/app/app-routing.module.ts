import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BookListComponent } from './components/book-list/book-list.component';
// import { BookFormComponent } from './components/book-form/book-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

const routes: Routes = [
  // { path: '', redirectTo: 'books', pathMatch: 'full' },
  // { path: 'books', component: BookListComponent },
  // { path: 'add-book', component: BookFormComponent },
  // { path: 'books/edit/:id', component: BookFormComponent },
  { path: '', redirectTo: 'Employee', pathMatch: 'full' },
  { path: 'Employee', component: EmployeeListComponent },
  { path: 'add-employee', component: EmployeeFormComponent },
  { path: 'employee/edit/:id', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
