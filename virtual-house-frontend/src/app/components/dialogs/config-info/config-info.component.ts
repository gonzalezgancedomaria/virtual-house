import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-config-info',
  standalone: true,
  imports: [MatDialogClose, MatButtonModule],
  templateUrl: './config-info.component.html',
  styleUrl: './config-info.component.scss'
})
export class ConfigInfoComponent {

  public jSONexample:string = `config = {
    scenes: [
      {
        id: 'id-scene',
        title: 'title-scene',
        panorama: '/assets/../scene.jpg',
        hotSpots: [
          {
            type: 'scene',
            pitch: 1,
            yaw: 70,
            text: 'hotspot-text',
            sceneId: 'id-scene',
            id: 'hotspot-title-scene-hotspot-text',
          },
        ],
      }
    ]
  }`;

  constructor(
    public dialogRef: MatDialogRef<ConfigInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }


}
