import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { VirtualHouse } from '../../../../models/virtual-house';
import * as virtualHousesActions from '../../actions/virtual-houses/virtual-houses.actions';

export interface VirtualHousesState extends EntityState<VirtualHouse> {
  virtualHouseId: number,
  error: string | null;
}

export const adapter = createEntityAdapter<VirtualHouse>({
  selectId: (v) => v.virtual_house_id
});

export const initialState: VirtualHousesState = adapter.getInitialState({
  error: null,
  virtualHouseId: null,
});

export const selectVirtualHousesState = createFeatureSelector<VirtualHousesState>('virtualHouses');

export const virtualHousesReducer = createReducer(
  initialState,
  on(virtualHousesActions.listVirtualHousesAction, state => ({
    ...state,
    error: null
  })),
  on(virtualHousesActions.listVirtualHousesActionSuccess, (state, { virtualHouses }) => (
    adapter.setAll(virtualHouses, { ...state, error: null })
  )),
  on(virtualHousesActions.listVirtualHousesActionFailure, (state, { error }) => ({
    ...state,
    error
  })),
  // on(virtualHousesActions.addVirtualHouseAction, (state, { virtualHouse }): VirtualHousesState => ({
  //   ...adapter.addOne(virtualHouse, state),
  //   virtualHouseId: virtualHouse.virtual_house_id,
  // })),
  // on(virtualHousesActions.addVirtualHouseActionFailure, (state, { error }): VirtualHousesState => ({
  //     ...state,
  //     error
  // })),
);

export const {
  selectAll: selectAllVirtualHouses,
  selectIds: selectvirtualHouseIds,
  selectEntities: selectvirtualHouseEntities,
  selectTotal: selectTotalVirtualHouses
} = adapter.getSelectors();

export const getError = (state: VirtualHousesState) => state.error;

export const selectVirtualHouseId = createSelector(
  selectVirtualHousesState,
  (state: VirtualHousesState) => state?.virtualHouseId
);