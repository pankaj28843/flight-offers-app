import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSearchResultsComponent } from './flights-search-results.component';

describe('FlightsSearchResultComponent', () => {
  let component: FlightsSearchResultsComponent;
  let fixture: ComponentFixture<FlightsSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsSearchResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
