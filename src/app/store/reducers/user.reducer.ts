import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State extends EntityState<User> {
  // additional entities state properties
  users: any;
  userInfoOnList: any;
  notification: any;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  users: [],
  userInfoOnList: {},
  notification: {}
});

export function reducer(
  state = initialState,
  action: UserActions
): State {
  switch (action.type) {
    case UserActionTypes.AddUser: {
      return adapter.addOne(action.payload.user, state);
    }

    case UserActionTypes.UpsertUser: {
      return {...state, userInfoOnList: action.payload};
    }

    case UserActionTypes.AddUsers: {
      return {...state, users: action.payload };
    }

    case UserActionTypes.UpsertUsers: {
      return adapter.upsertMany(action.payload.users, state);
    }

    case UserActionTypes.UpdateUser: {
      return adapter.updateOne(action.payload.user, state);
    }

    case UserActionTypes.UpdateUsers: {
      return adapter.updateMany(action.payload.users, state);
    }

    case UserActionTypes.DeleteUser: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserActionTypes.DeleteUsers: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserActionTypes.LoadUsers: {
      return state;
    }

    case UserActionTypes.ClearUsers: {
      return adapter.removeAll(state);
    }

    case UserActionTypes.UpdateNotification: {
      return {...state, notification: action.payload };
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

export const getUsersListState = (state: State) => state.users;
export const getUseronListInfoState = (state: State) => state.userInfoOnList;
export const getUsersNotificationState = (state: State) => state.notification;
