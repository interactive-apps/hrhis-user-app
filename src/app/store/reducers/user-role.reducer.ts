import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserRole } from '../models/user-role.model';
import { UserRoleActions, UserRoleActionTypes } from '../actions/user-role.actions';

export interface State extends EntityState<UserRole> {
  // additional entities state properties
  userRoles: any;
}

export const adapter: EntityAdapter<UserRole> = createEntityAdapter<UserRole>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  userRoles: []
});

export function reducer(
  state = initialState,
  action: UserRoleActions
): State {
  switch (action.type) {
    case UserRoleActionTypes.AddUserRole: {
      return adapter.addOne(action.payload.userRole, state);
    }

    case UserRoleActionTypes.UpsertUserRole: {
      return adapter.upsertOne(action.payload.userRole, state);
    }

    case UserRoleActionTypes.AddUserRoles: {
      return {...state, userRoles: action.payload };
    }

    case UserRoleActionTypes.UpsertUserRoles: {
      return adapter.upsertMany(action.payload.userRoles, state);
    }

    case UserRoleActionTypes.UpdateUserRole: {
      return adapter.updateOne(action.payload.userRole, state);
    }

    case UserRoleActionTypes.UpdateUserRoles: {
      return adapter.updateMany(action.payload.userRoles, state);
    }

    case UserRoleActionTypes.DeleteUserRole: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserRoleActionTypes.DeleteUserRoles: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserRoleActionTypes.LoadUserRoles: {
      return state;
    }

    case UserRoleActionTypes.ClearUserRoles: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getUserRolesState = (state: State) => state.userRoles;
