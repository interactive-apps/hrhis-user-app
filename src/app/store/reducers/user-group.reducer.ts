import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserGroup } from '../models/user-group.model';
import { UserGroupActions, UserGroupActionTypes } from '../actions/user-group.actions';

export interface State extends EntityState<UserGroup> {
  // additional entities state properties
}

export const adapter: EntityAdapter<UserGroup> = createEntityAdapter<UserGroup>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: UserGroupActions
): State {
  switch (action.type) {
    case UserGroupActionTypes.AddUserGroup: {
      return adapter.addOne(action.payload.userGroup, state);
    }

    case UserGroupActionTypes.UpsertUserGroup: {
      return adapter.upsertOne(action.payload.userGroup, state);
    }

    case UserGroupActionTypes.AddUserGroups: {
      return adapter.addMany(action.payload.userGroups, state);
    }

    case UserGroupActionTypes.UpsertUserGroups: {
      return adapter.upsertMany(action.payload.userGroups, state);
    }

    case UserGroupActionTypes.UpdateUserGroup: {
      return adapter.updateOne(action.payload.userGroup, state);
    }

    case UserGroupActionTypes.UpdateUserGroups: {
      return adapter.updateMany(action.payload.userGroups, state);
    }

    case UserGroupActionTypes.DeleteUserGroup: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserGroupActionTypes.DeleteUserGroups: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserGroupActionTypes.LoadUserGroups: {
      return adapter.addAll(action.payload.userGroups, state);
    }

    case UserGroupActionTypes.ClearUserGroups: {
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
