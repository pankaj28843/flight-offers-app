import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerInputComponent } from './traveller-input.component';

describe('TravellerInputComponent', () => {
  let component: TravellerInputComponent;
  let fixture: ComponentFixture<TravellerInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravellerInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravellerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
