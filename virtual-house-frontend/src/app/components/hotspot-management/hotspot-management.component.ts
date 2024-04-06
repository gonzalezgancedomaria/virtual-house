import { Component } from '@angular/core';
import { VirtualPanoramaViewComponent } from '../virtual-house/virtual-panorama-view/virtual-panorama-view.component';
import { AddHotspotComponent } from '../add-hotspot/add-hotspot.component';

@Component({
  selector: 'app-hotspot-management',
  standalone: true,
  imports: [VirtualPanoramaViewComponent, AddHotspotComponent],
  templateUrl: './hotspot-management.component.html',
  styleUrl: './hotspot-management.component.scss'
})
export class HotspotManagementComponent {

}
