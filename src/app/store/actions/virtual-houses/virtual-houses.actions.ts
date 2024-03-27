import { createAction, props } from "@ngrx/store";
import { VirtualHouse } from "../../../../models/virtual-house";

enum VirtualHousesActionTypes {
    ListVirtualHouses = '[Virtual Houses] List virtual houses',
    ListVirtualHousesSuccess = '[Virtual Houses] List virtual houses success',
    ListVirtualHousesFailure = '[Virtual Houses] List virtual houses failure',
    CreateVirtualHouse = '[Virtual Houses] Create virtual house',
    CreateVirtualHouseSuccess = '[Virtual Houses] Create virtual house success',
    CreateVirtualHouseFailure = '[Virtual Houses] Create virtual house failure ',
    UpdateVirtualHouse = '[Virtual Houses] Update virtual house',
    UpdateVirtualHouseSuccess = '[Virtual Houses] Update virtual house success',
    UpdateVirtualHouseFailure = '[Virtual Houses] Update virtual house failure ',
    DeleteVirtualHouse = '[Virtual Houses] Delete virtual house',
    DeleteVirtualHouseSuccess = '[Virtual Houses] Delete virtual house success',
    DeleteVirtualHouseFailure = '[Virtual Houses] Delete virtual house failure '
}

export const listVirtualHousesAction = createAction(
    VirtualHousesActionTypes.ListVirtualHouses,
);

export const listVirtualHousesActionSuccess = createAction(
    VirtualHousesActionTypes.ListVirtualHousesSuccess,
    props<{virtualHouses: VirtualHouse[]}>(),
);

export const listVirtualHousesActionFailure = createAction(
    VirtualHousesActionTypes.ListVirtualHousesFailure,
    props<{error: string}>(),
);

export const addVirtualHouseAction = createAction(
    VirtualHousesActionTypes.ListVirtualHouses,
    props<{virtualHouse: VirtualHouse}>(),
);

export const addVirtualHouseActionSuccess = createAction(
    VirtualHousesActionTypes.ListVirtualHousesSuccess,
);

export const addVirtualHouseActionFailure = createAction(
    VirtualHousesActionTypes.ListVirtualHousesFailure,
    props<{error: string}>(),
);
