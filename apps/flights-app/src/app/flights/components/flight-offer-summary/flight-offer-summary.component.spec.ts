import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightOfferSummaryComponent } from './flight-offer-summary.component';

describe('FlightOfferSummaryComponent', () => {
  let component: FlightOfferSummaryComponent;
  let fixture: ComponentFixture<FlightOfferSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightOfferSummaryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightOfferSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
