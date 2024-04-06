import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent {
  @ViewChild('map') canvas: ElementRef;
  @Input() pins: any[];
  @Input() selectedPin: number;
  @Output() onClick = new EventEmitter<number>();

  constructor() {}
}
