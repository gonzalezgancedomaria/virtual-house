import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environments';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [
    {
      id: 1,
      name:'Admin',
      surname: 'Alvarez',
      role: 'admin',
      email: 'admin@admin.com',
      phone: '698532147',
      password: 'admin'
    },
    {
      id: 2,
      name:'Maria',
      surname: 'Gonzalez',
      role: 'user',
      email: 'mariag@example.com',
      phone: '0147896325',
      password: 'mariposa66'
    	
    }
  ]

  constructor(private http: HttpClient) { }

  getUsersMocked() {
    return this.users;
  }
  
  getUsers(): Observable<User[]> {    
    return of(this.users);
    // return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
  
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  
  createUser(user: any): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user);
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
    this.users.push(user);
    return of(user);
    // return this.http.post<any>(`${environment.apiUrl}/register`, userData);
  }

  /**
   * Login a user
   * @param username 
   * @param password 
   * @returns 
   */
  login(username: string, password: string): Observable<User> {
    return of(this.users.find(user => user.email === username && user.password === password));
    // return this.http.post<any>(`${environment.apiUrl}/login`, { username, password });
  }


  /**
   * Log out a user
   * @returns 
   */
  logout(): Observable<any> {
    return of();
    // return this.http.post<any>(`${environment.apiUrl}/logout`, {});
  }
}
