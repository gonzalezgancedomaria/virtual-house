import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHouseComponent } from './add-new-house.component';

describe('AddNewHouseComponent', () => {
  let component: AddNewHouseComponent;
  let fixture: ComponentFixture<AddNewHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewHouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddNewHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
