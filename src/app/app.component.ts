import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from "./components/app-header/app-header.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";
import { EventsCalendarComponent } from "./components/eventas-calendar/eventas-calendar.component";
import { NotesListComponent } from "./components/notes-list/notes-list.component"
import { TodoListComponent } from "./components/todo-list/todo-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,

    ContactListComponent,
    EventsCalendarComponent,
    NotesListComponent,

    TodoListComponent,
    AppHeaderComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi agenda angular';
}

