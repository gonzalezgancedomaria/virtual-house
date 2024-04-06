import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';
import { VirtualHouseService } from '../../services/virtual-house.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { MatInputModule } from '@angular/material/input';
import { VirtualHouse } from '../../../models/virtual-house';
import { MatTooltip } from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import * as fromVHReducer from './../../store/reducers/virtual-houses/virtual-houses.reducers';
import * as fromActions from './../../store/actions/virtual-houses/virtual-houses.actions';
import * as fromUserReducer from './../../store/reducers/users/users.reducers';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-houses-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatPaginatorModule, MatIconModule, MatChipsModule, MatTooltip, RouterLink],
  templateUrl: './houses-management.component.html',
  styleUrl: './houses-management.component.scss'
})
export class HousesManagementComponent implements OnInit{
  googleMapsLink: string = 'https://www.google.com/maps/search/?api=1&query=';
  casas$: Observable<VirtualHouse[]>;
  casas: VirtualHouse[];

  //Pagination
  pageSize: number = 3;
  pageIndex: number = 0;

  //Seach
  searchTerm: string = '';

  userRole$: Observable<string>;

  constructor(private dialog: MatDialog, private store: Store, private service: VirtualHouseService){
    this.store.dispatch(fromActions.listVirtualHousesAction())
    this.userRole$ = this.store.select(fromUserReducer.selectUserRole);
  }

  public ngOnInit(): void {
    this.service.getVirtualHouses().subscribe(casas => {
      console.log('casas', casas)
      this.casas = casas;
    });
  }

  public openConfirmationDialog() {
    this.dialog.open(DeleteComponent, {
      width: '30rem',
      height: '10rem'
    })
  }

  public getGoogleMapLink(location: string){
    return this.googleMapsLink + location;
  }

  public filterCasas(): any[] {
    return this.casas?.filter(casa =>
      casa.virtual_house_name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  public onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
  }
}
