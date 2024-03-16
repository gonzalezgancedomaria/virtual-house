import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualPanoramaViewComponent } from './virtual-panorama-view.component';

describe('VirtualPanoramaViewComponent', () => {
  let component: VirtualPanoramaViewComponent;
  let fixture: ComponentFixture<VirtualPanoramaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualPanoramaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirtualPanoramaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
