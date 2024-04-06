import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPinOnMapComponent } from './add-pin-on-map.component';

describe('AddPinOnMapComponent', () => {
  let component: AddPinOnMapComponent;
  let fixture: ComponentFixture<AddPinOnMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPinOnMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPinOnMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
