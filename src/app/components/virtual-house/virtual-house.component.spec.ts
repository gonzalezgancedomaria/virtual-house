import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualHouseComponent } from './virtual-house.component';

describe('VirtualHouseComponent', () => {
  let component: VirtualHouseComponent;
  let fixture: ComponentFixture<VirtualHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualHouseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
