import { Component, ElementRef, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PannellumService } from '../../../services/pannellum.service';

@Component({
  selector: 'app-add-pin-on-map',
  standalone: true,
  imports: [FormsModule, MatDialogClose, MatButtonModule, MatIconModule, MatSelectModule],
  templateUrl: './add-pin-on-map.component.html',
  styleUrl: './add-pin-on-map.component.scss'
})
export class AddPinOnMapComponent implements OnInit{
  selected: string = "vestibulo";
  selectedPin: number = 0;
  scenesAvailable: string[] = [];
  tour = { pins: [], views: [] };
  place: boolean = true;
  @Output() onClick = new EventEmitter<number>();
  count = false;

  constructor(
    public dialogRef: MatDialogRef<AddPinOnMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: PannellumService
  ) { }

  public ngOnInit(){
    this.scenesAvailable = this.service.getScenes();
    this.tour = this.data.tour;
    document.getElementById('map').style.backgroundImage = `url('../../../../assets/scenes/${this.selected}.jpg')`;
  }

  onMouseClick(e: MouseEvent) {
    console
    if(this.count && this.place){
      this.tour.pins.pop();
    }
    if(this.place){
      this.tour.pins.push({ x: ((e.offsetX * 100)/360), y: ((e.offsetY * 100)/280) });
      this.count = true;
    }
  }

  onSelectChange(){
    let map = document.getElementById('map');
    map.style.backgroundImage = `url('../../../../assets/scenes/${this.selected}.jpg')`;
  }

  save() {
    this.dialogRef.close({scene: this.selected, tour: this.tour});
  }
}
