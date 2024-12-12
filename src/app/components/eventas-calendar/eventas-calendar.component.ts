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
    { date: '2023-12-10', title: 'Evento 1' },
    { date: '2023-11-15', title: 'Evento 2' },
    { date: '2022-12-25', title: 'Evento 3' },
    { date: '2022-1-10', title: 'Evento 4' },
    { date: '2022-2-15', title: 'Evento 5' },

  ];


  calendarOptions = {
    plugins: [dayGridPlugin],

    events: this.events.map(event => ({
      title: event.title,
      date: event.date,

    }))
  };
  constructor() { }

  ngOnInit(): void {
  }
}
