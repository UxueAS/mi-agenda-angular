import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCalendarComponent } from './eventas-calendar.component';

describe('EventasCalendarComponent', () => {
  let component: EventsCalendarComponent;
  let fixture: ComponentFixture<EventsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsCalendarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EventsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
