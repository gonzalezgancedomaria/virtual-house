import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environments.prod';
import { VirtualHouse } from '../../models/virtual-house';

@Injectable({
  providedIn: 'root'
})
export class VirtualHouseService {

  public virtualHouses: VirtualHouse[] = [
    {
      id: 1,
      name: 'Benbulbin',
      features: '4 dormitorios, 2 baños',
      location:	'11 Benbulbin Road, Dublin',
      creation_date:	'2023-09-01',
      configuration: ''
    },
    {
      id: 2,
      name: 'Portobello',
      features: '6 dormitorios, 4 baños',
      location:	'14 Raymond Road, Dublin',
      creation_date:	'2023-09-01',
      configuration: ''
    },
    {
      id: 3,
      name: 'Casa carlota',
      features: '3 dormitorios, 1 baños',
      location:	'70 John McCormack Ave, Dublin',
      creation_date:	'2023-09-01',
      configuration: ''
    },
    {
      id: 4,
      name: 'Benbulbin',
      features: '4 dormitorios, 2 baños',
      location:	'11 Benbulbin Road, Dublin',
      creation_date:	'2023-09-01',
      configuration: ''
    }
  ];

  constructor(private http: HttpClient) { }

  getVirtualHousesMocked(): VirtualHouse[] {
    return this.virtualHouses;
  }

  getVirtualHouses(): Observable<VirtualHouse[]> {
    return of(this.virtualHouses);
    // return this.http.get<VirtualHouse[]>(`${environment.apiUrl}/virtual-houses`);
  }

  getVirtualHouse(id: number): Observable<VirtualHouse> {
    return this.http.get<VirtualHouse>(`${environment.apiUrl}/virtual-houses/${id}`);
  }

  createVirtualHouse(virtualHouse: VirtualHouse): Observable<VirtualHouse> {
    this.virtualHouses.push(virtualHouse);
    return of();
    // return this. http.post<VirtualHouse>(`${environment.apiUrl}/virtual-houses`, virtualHouse);
  }

  updateVirtualHouse(id: number, virtualHouse: VirtualHouse): Observable<VirtualHouse> {
    return this.http.put<VirtualHouse>(`${environment.apiUrl}/virtual-houses/${id}`, virtualHouse);
  }

  deleteVirtualHouse(id: number): Observable<VirtualHouse> {
    return this.http.delete<VirtualHouse>(`${environment.apiUrl}/virtual-houses/${id}`);
  }
}
