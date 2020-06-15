import * as worldActions from '../../app/actions/worldActions';
import * as types from '../../app/actions/types';

describe('ACTIONS', () => {
   it('should create an action with correct type', () => {
      const expectedAction = {
         type: types.WORLD_GENERAL_REQUEST
      };
      expect(worldActions.requesWorld()).toEqual(expectedAction);
   });
});