import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events-calendar',
  templateUrl: './eventas-calendar.component.html',
  imports: [CommonModule, FullCalendarModule,],
  standalone: true,
  styleUrls: ['./eventas-calendar.component.css']
})
export class EventsCalendarComponent {
  events = [
    { date: '2024-12-10', title: 'Meeting with Alice' },
    { date: '2024-12-15', title: 'Project Deadline' }
  ];
  calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth', // Vista inicial de calendario (mes)
    events: this.events.map(event => ({
      title: event.title,
      date: event.date
    }))
  };

  constructor() { }

  ngOnInit(): void {
  }
}
