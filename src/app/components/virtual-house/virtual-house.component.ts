import { Component, OnInit, ViewChild } from '@angular/core';
import { VirtualPanoramaViewComponent } from './virtual-panorama-view/virtual-panorama-view.component';
import { PannellumService } from '../../services/pannellum.service';
import { MatIconModule } from '@angular/material/icon';
import { CanvasComponent } from './virtual-panorama-view/canvas/canvas.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-virtual-house',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, VirtualPanoramaViewComponent, CanvasComponent],
  templateUrl: './virtual-house.component.html',
  styleUrl: './virtual-house.component.scss'
})
export class VirtualHouseComponent implements OnInit {
  selectedView: string;
  selectedPin = 0;
  tour: { pins: { x: number; y: number }[]; views: string[] } = {
    pins: [],
    views: [],
  };

  @ViewChild('virtualView') virtualView: VirtualPanoramaViewComponent;

  constructor(public pannellumService: PannellumService) {}

  ngOnInit(): void {
    const pins = [];
    pins.push({ x: 83.5, y: 66.5 });
    pins.push({ x: 70.5, y: 42.5 });
    pins.push({ x: 37, y: 28.5 });
    pins.push({ x: 17.5, y: 28.5 });
    pins.push({ x: 64, y: 65.5 });
    pins.push({ x: 20, y: 68.5 });
    this.tour.pins = pins;
    const views = [];
    views.push('vestibulo');
    views.push('salon');
    views.push('cocina');
    views.push('patio');
    views.push('escaleras');
    views.push('habitacion-1');
    this.tour.views = views;
    this.selectedView = this.tour.views[0];
  }

  onPinClick = (viewPosition: number): void => {
    this.selectedPin = viewPosition;
    this.selectedView = this.tour.views[viewPosition];

    this.pannellumService.setScene(this.selectedView);
  };

  /**
   * hideMinimap
   * Esconde el minimapa del recorrido virtual
   */
  public hideMinimap() {
    document.getElementById('minimap').style.paddingLeft = '1000px';
    document.getElementById('button-show-minimap').style.display = 'block';
    document.getElementById('button-hide-minimap').style.display = 'none';
  }

  /**
   * showMinimap
   * Muestra el minimapa del recorrido virtual
   */
  public showMinimap() {
    document.getElementById('minimap').style.paddingLeft = '0px';
    document.getElementById('button-show-minimap').style.display = 'none';
    document.getElementById('button-hide-minimap').style.display = 'block';
  }

  /**
   * closeSceneCarousel()
   * Esconde el carrusel de escenas del recorrido
   */
  public closeSceneCarousel() {
    document.getElementById('carousel').style.height = '0vh';
    document.getElementById('open-carousel').style.display = 'block';
    document.getElementById('close-carousel').style.display = 'none';
  }

  /**
   * openSceneCarousel()
   * Muestra el carrusel de escenas del recorrido
   */
  public openSceneCarousel() {
    document.getElementById('carousel').style.height = '20vh';
    document.getElementById('open-carousel').style.display = 'none';
    document.getElementById('close-carousel').style.display = 'block';
  }

  /**
   * ---Carrusel de escenas---
   */

  index = 0;

  /**
   * moveCarouselRight
   * Mueve el carrusel hacia la derecha
   */
  public moveCarouselRight() {
    this.index++;

    const carouselWidth =
      document.getElementById('carousel-container').offsetWidth;
    const cardsPerCarousel = 5;
    const cardWidth = carouselWidth / cardsPerCarousel;

    let translation: number = this.index * cardWidth;
    document.getElementById('prev').style.display = 'block'; // Muestra el botón izquierdo
    document.getElementById('track').style.transform =
      'translateX(-' + translation + 'px)'; // Mueve el carrusel

    // Cuando el carrusel llega al final se quita el botón de la derecha
    if (
      document.getElementById('track').offsetWidth - this.index * cardWidth <=
      cardWidth * cardsPerCarousel
    ) {
      document.getElementById('next').style.display = 'none';
    }
  }

  /**
   * moveCarouselLeft
   * Mueve el carrusel hacia la izquierda
   */
  public moveCarouselLeft() {
    this.index--;

    const carouselWidth =
      document.getElementById('carousel-container').offsetWidth;
    const cardsPerCarousel = 5;
    const cardWidth = carouselWidth / cardsPerCarousel;

    let translation: number = this.index * cardWidth;
    document.getElementById('next').style.display = 'block'; // Muestra el botón derecho
    document.getElementById('track').style.transform =
      'translateX(-' + translation + 'px)'; // Mueve el carrusel

    // Cuando el carrusel llega al principio se quita el botón de la izquierda
    if (this.index == 0) {
      document.getElementById('prev').style.display = 'none';
    }
  }
}
