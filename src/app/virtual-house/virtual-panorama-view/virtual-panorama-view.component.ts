import { Component, Input } from '@angular/core';
import { PannellumService } from '../../services/pannellum.service';
import { config } from './config';

@Component({
  selector: 'app-virtual-panorama-view',
  standalone: true,
  imports: [],
  templateUrl: './virtual-panorama-view.component.html',
  styleUrl: './virtual-panorama-view.component.scss'
})
export class VirtualPanoramaViewComponent {
  @Input() viewId: string;

  // Element ID for pano
  panoramaHTML = 'panorama';

  // Pannellum Viewer
  pannellumViewer: any;

  constructor(public pannellumService: PannellumService) {}

  ngAfterViewInit(): void {
    //  Funciones del pannellum service para crear las escenas y el tour
    let escenas = this.pannellumService.constructScenes(config);

    // Obtener la escene inicial, por defecto el indice 0, es decir la primera escena
    let initialView: string = this.pannellumService.getInitialScene(0);

    // Iniciar pannellum con las escenas obtenidas
    this.pannellumService.initPannellum(
      this.panoramaHTML,
      initialView,
      escenas
    );
  }
}
