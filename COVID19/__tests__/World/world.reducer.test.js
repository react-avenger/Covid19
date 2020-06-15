import * as types from '../../app/actions/types';
import { worldReducer } from '../../app/reducers/worldReducer';

describe('REDUCER', () => {
    const mockWorldResponse = { data: [{"total_cases": "7,363,503", "recovery_cases": "3,634,302", "death_cases": "414,588", "last_update": "Jun, 10 2020, 15:19, UTC", "currently_infected": "3,314,613", "cases_with_outcome": "4,048,890", "mild_condition_active_cases": "3,260,663", "critical_condition_active_cases": "53,950", "recovered_closed_cases": "3,634,302", "death_closed_cases": "414,588", "closed_cases_recovered_percentage": "90.0", "closed_cases_death_percentage": "10.0", "active_cases_mild_percentage": "98.0", "active_cases_critical_percentage": "2.0", "general_death_rate": "6.0"}] };

     it('should return the valid World', () => {
          expect(worldReducer({}, {type: types.WORLD_GENERAL_RESPONSE, response: mockWorldResponse.data})).toEqual({generalList: mockWorldResponse.data});
     });
 });