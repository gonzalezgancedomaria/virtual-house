import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { environment } from '../../environments/environments';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200', 
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, X-API-KEY, X-Requested-With, Authorization, Origin, Accept, Access-Control-Request-Method', // Cabeceras permitidas
    'Access-Control-Allow-Credentials': 'true', 
    'Allow': 'GET, POST, OPTIONS, PUT, DELETE',
    'mode': 'no-cors' // Opción no-cors
});

  public users: User[] = [
    {
      user_id: 1,
    name:'Admin',
    surname: 'Alvarez',
    role_id: 'admin',
    email: 'admin@admin.com',
    phone: '698532147',
    password: 'admin'
    },
    {
      user_id: 2,
    name:'Maria',
    surname: 'Gonzalez',
    role_id: 'user',
    email: 'mariag@example.com',
    phone: '0147896325',
    password: 'mariposa66'
    }
  ]

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {    
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  
  updateUser(id: number, user: any): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users/${id}`, user);
  }
  
  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/users/${id}`);
  }

  /**
   * Register a user
   * @param user 
   * @returns 
   */

  register(user: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/signup`, user);
  }

  /**
   * Login a user
   * @param username 
   * @param password 
   * @returns 
   */
  login(email: string, password: string): Observable<User> {
    
    // const options = { headers: this.headers };
    // console.log(options)
    // return this.http.post<User>(`${environment.apiUrl}/login`, { email, password }, options);
    // this.store.select(fromReducer.selectAllUsers).pipe(
    //   map(users => {
    //     return of(users?.find(user => user.email === email && user.password === password));
    //   })
    // )
    return of(this.users.find(user => user.email === email && user.password === password));
  }


  /**
   * Log out a user
   * @returns 
   */
  logout(): Observable<any> {
    return of();
  }
}
