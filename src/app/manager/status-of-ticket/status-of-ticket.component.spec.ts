import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOfTicketComponent } from './status-of-ticket.component';

describe('StatusOfTicketComponent', () => {
  let component: StatusOfTicketComponent;
  let fixture: ComponentFixture<StatusOfTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusOfTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOfTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
