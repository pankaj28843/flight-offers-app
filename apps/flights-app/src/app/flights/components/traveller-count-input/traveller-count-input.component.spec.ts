import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerCountInputComponent } from './traveller-count-input.component';

describe('TravellerCountInputComponent', () => {
  let component: TravellerCountInputComponent;
  let fixture: ComponentFixture<TravellerCountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravellerCountInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravellerCountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
