import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sensor } from '../../models/sensor';
import { environment } from '../../environments/environments.prod';
import { Observable } from 'rxjs';
import { Measure_Unit } from '../../models/measure_unit';

@Injectable({
  providedIn: 'root'
})
export class SensorServiceService {

  public measureUnits: Measure_Unit[] = [
    {
      id: 1,
      name: 'Celsius',
      abbreviation: 'ºC'
    },
    {
      id: 2,
      name: 'Metro',
      abbreviation: 'm'
    },
    {
      id: 3,
      name: 'Pascal',
      abbreviation: 'Pa'
    },
    {
      id: 4,
      name: 'Newton',
      abbreviation: 'N'
    }
  ]

  constructor(private http: HttpClient) { }

  createSensor(sensorData: any): Observable<Sensor> {
    return this.http.post<Sensor>(`${environment.apiUrl}/sensors`, sensorData);
  }

  deleteSensor(sensorId: number): Observable<Sensor> {
    return this.http.delete<Sensor>(`${environment.apiUrl}/sensors/${sensorId}`);
  }
}
