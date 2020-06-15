
import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import countries from '../../app/api/methods/countries';
import * as worldActions from '../../app/actions/worldActions';


export default function* countriesAsync(action) {
  yield put(worldActions.enableLoader());
  const response = yield call(countries, action.page);
  if (response.status == "success") {
    yield put(worldActions.onCountriesResponse(response));
    yield put(worldActions.disableLoader({}));
  } else {
    yield put(worldActions.countriesFailed());
    yield put(worldActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('Demo', response.Message);
    }, 200);
  }
}
