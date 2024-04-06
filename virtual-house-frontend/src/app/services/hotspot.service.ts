import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotspot } from '../../models/sensor';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { Measure_Unit } from '../../models/measure_unit';

@Injectable({
  providedIn: 'root'
})
export class HotspotService {

  public measureUnits: Measure_Unit[] = [
    // {
    //   id: 1,
    //   name: 'Celsius',
    //   abbreviation: 'ºC'
    // },
    // {
    //   id: 2,
    //   name: 'Metro',
    //   abbreviation: 'm'
    // },
    // {
    //   id: 3,
    //   name: 'Pascal',
    //   abbreviation: 'Pa'
    // },
    // {
    //   id: 4,
    //   name: 'Newton',
    //   abbreviation: 'N'
    // }
  ]

  constructor(private http: HttpClient) { }

  getHotspots(): Observable<Hotspot[]> {
    return this.http.get<Hotspot[]>(`${environment.apiUrl}/hotspots`);
  }

  getHotspotById(id: number): Observable<Hotspot> {
    return this.http.get<Hotspot>(`${environment.apiUrl}/hotspots/${id}`);
  }

  createSensor(hotspotData: any): Observable<Hotspot> {
    return this.http.post<Hotspot>(`${environment.apiUrl}/hotspots`, hotspotData);
  }

  deleteSensor(id: number): Observable<Hotspot> {
    return this.http.delete<Hotspot>(`${environment.apiUrl}/hotspots/${id}`);
  }

  getMeasureUnits(): Observable<Measure_Unit[]> {
    return this.http.get<Measure_Unit[]>(`${environment.apiUrl}/measure-units`);
  }
}
