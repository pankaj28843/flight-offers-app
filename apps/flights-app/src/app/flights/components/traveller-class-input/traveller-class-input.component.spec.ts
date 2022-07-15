import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerClassInputComponent } from './traveller-class-input.component';

describe('TravellerClassInputComponent', () => {
  let component: TravellerClassInputComponent;
  let fixture: ComponentFixture<TravellerClassInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravellerClassInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravellerClassInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
