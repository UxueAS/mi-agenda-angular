import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com' },
    { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com' },
    { id: 6, name: 'Diana Evans', email: 'diana.evans@example.com' },
    { id: 7, name: 'Evan Harris', email: 'evan.harris@example.com' },
    { id: 8, name: 'Fiona Green', email: 'fiona.green@example.com' },
    { id: 9, name: 'George King', email: 'george.king@example.com' },
  ];
}
