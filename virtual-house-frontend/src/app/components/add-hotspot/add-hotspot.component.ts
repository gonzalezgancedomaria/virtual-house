import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { HotspotService } from '../../services/hotspot.service';
import { Measure_Unit } from '../../../models/measure_unit';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddPinOnMapComponent } from '../dialogs/add-pin-on-map/add-pin-on-map.component';
import { PannellumService } from '../../services/pannellum.service';

@Component({
  selector: 'app-add-hotspot',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSnackBarModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule],
  templateUrl: './add-hotspot.component.html',
  styleUrl: './add-hotspot.component.scss'
})
export class AddHotspotComponent {
  form: FormGroup;
  public measureUnits: Measure_Unit[] = [];
  tour = { pins: [], views: [] };
  sceneId: string;
  scenes;
  
  minimapa;

  constructor(
    private sensorService: HotspotService, 
    private dialog: MatDialog, 
    private service: PannellumService,
    private snackBar: MatSnackBar){
    this.sensorService.getMeasureUnits().subscribe(measureUnits => {
      console.log('measureUnits', measureUnits)
      this.measureUnits = measureUnits;
    });;
    this.minimapa = <HTMLImageElement>document?.getElementById('minimapa');
    this.scenes = this.service.getScenes();

    this.initForm();
  }
  
  public initForm(){
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(30)])),
      measure: new FormControl('Celsius', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])),
      description: new FormControl('',),
    });
  }

   public addPin() {
      const dialogRef = this.dialog.open(AddPinOnMapComponent, {
        width: '40rem',
        height: '35rem',
        data: {scenes: this.scenes, minimapa: this.minimapa, tour: this.tour}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result)
        this.tour = result.tour;
        this.sceneId = result.scene;
      });
  }

  public saveHotspot() {
    let error: boolean=  this.form.invalid;
 
    const hostpotId = Math.random();
    let icon = {
      src: 'assets/svgs/hotspot.svg',
      alt: 'hotspot',
      width: '18px',
      height: '18px',
    }

    let hotspot = {
      text: this.getHotspotText(),
      type: 'info',
      sceneId: this.sceneId,
      id: hostpotId,
      createTooltipArgs: {
        title: this.form.get('name').value,
        id: hostpotId,
        customIcon: icon
    }
    };
 
    if(!error){       
      this.service.enableAddHotspot('info', hotspot);
      this.service.addHotspot([this.tour.pins[0].x - this.tour.pins[0].x, this.tour.pins[0].y * 1.8 ]);
      this.snackBar.open(this.getHotspotText() + ' se ha añadido con éxito.', 'Close', {
        duration: 3000, 
      });
      this.initForm();
    }
  }

  public getHotspotText(): string {
    return `${this.form.get('name').value} (${this.form.get('measure').value} - ${this.form.get('description').value})`;
  }
}
