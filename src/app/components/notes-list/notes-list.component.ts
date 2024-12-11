import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  notes = [
    { id: 1, content: 'Nota 1' },
    { id: 2, content: 'Nota 2' },
    { id: 3, content: 'Nota 3' },
    { id: 3, content: 'Nota 4' }
  ];
}
