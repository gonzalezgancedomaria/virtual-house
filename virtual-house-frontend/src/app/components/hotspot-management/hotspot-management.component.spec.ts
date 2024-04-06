import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotManagementComponent } from './hotspot-management.component';

describe('HotspotManagementComponent', () => {
  let component: HotspotManagementComponent;
  let fixture: ComponentFixture<HotspotManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotspotManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotspotManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
