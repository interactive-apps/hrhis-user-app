import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/user.model';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State extends EntityState<User> {
  // additional entities state properties
  userInfoOnList: any;
  loadingStatus: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loadingStatus: true,
  userInfoOnList: {},
});

export function reducer(
  state = initialState,
  action: UserActions
): State {
  switch (action.type) {
    case UserActionTypes.AddUser: {
      return {...state, loadingStatus: true};
      // return adapter.addOne(action.payload, state);
    }

    case UserActionTypes.UpsertUser: {
      return {...state, userInfoOnList: action.payload};
    }

    case UserActionTypes.AddUsers: {
      return adapter.addMany(action.payload, {...state, loadingStatus: false });
    }

    case UserActionTypes.UpsertUsers: {
      return adapter.upsertMany(action.payload.users, state);
    }

    case UserActionTypes.UpdateUser: {
      return {...state, loadingStatus: true};
      // return adapter.updateOne(action.payload.user, state);
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
      return {...state, loadingStatus: true};
    }

    case UserActionTypes.ClearUsers: {
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

export const getUseronListInfoState = (state: State) => state.userInfoOnList;
export const getUserLoaderState = (state: State) => state.loadingStatus;
