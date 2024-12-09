
import { Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EventsCalendarComponent } from './components/eventas-calendar/eventas-calendar.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'calendar', component: EventsCalendarComponent },
  { path: 'notes', component: NotesListComponent },
  { path: 'todos', component: TodoListComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];




