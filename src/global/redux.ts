import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { AsyncAction } from './types';

export const asyncActionCreator = (actionName: string): AsyncAction => {
  const actions = ['REQUEST', 'SUCCESS', 'ERROR'];

  // @ts-ignore
  return actions.reduce((object, action) => {
    const actionType = `${actionName}_${action}`;

    return {
      ...object,
      [action.toLowerCase()]: createAction(actionType),
      [action]: actionType,
    };
  }, {});
};

export const asyncReducerHandler = (actionHandler: AsyncAction, nestedState?: string) => ({
  [actionHandler.REQUEST]: (state: object) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = true;
  },
  [actionHandler.SUCCESS]: (state: object, action: PayloadAction) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = false;
    propperState.data = action.payload;
    propperState.error = null;
  },
  [actionHandler.ERROR]: (state: object, action: PayloadAction) => {
    const propperState = nestedState ? get(state, nestedState) : state;

    propperState.loading = false;
    propperState.error = action.payload;
    propperState.data = null;
  },
});
