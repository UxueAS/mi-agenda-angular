import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [CommonModule, FormsModule,],
  standalone: true,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  nuevaTarea: string = '';
  tareas = [
    { id: 1, title: 'Tarea 1', date: '2023-10-01', description: '', check: false },
    { id: 2, title: 'Tarea 2', date: '2023-10-02', description: '', check: true },
    { id: 3, title: 'Tarea 3', date: '2023-10-03', description: '', check: false },
    { id: 4, title: 'Tarea 4', date: '2023-10-04', description: '', check: true },
    { id: 5, title: 'Tarea 5', date: '2023-10-05', description: '', check: false },
    { id: 6, title: 'Tarea 6', date: '2023-10-06', description: '', check: true },
    { id: 7, title: 'Tarea 7', date: '2023-10-07', description: '', check: false },
    { id: 8, title: 'Tarea 8', date: '2023-10-08', description: '', check: true },
    { id: 9, title: 'Tarea 9', date: '2023-10-09', description: '', check: false },
    { id: 10, title: 'Tarea 10', date: '2023-10-10', description: '', check: true }
  ];

  get tareasPendientes() {
    return this.tareas.filter(tarea => !tarea.check);
  }


  get tareasCompletadas() {
    return this.tareas.filter(tarea => tarea.check);
  }


  agregarTarea() {
    this.tareas.push({
      id: this.tareas.length + 1,
      title: this.nuevaTarea,
      date: new Date().toISOString().substr(0, 10),
      description: '',
      check: false
    });
    this.nuevaTarea = '';
  }
}
