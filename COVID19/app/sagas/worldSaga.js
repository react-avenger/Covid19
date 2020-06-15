
import { put, call, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import world from '../../app/api/methods/world';
import * as worldActions from '../../app/actions/worldActions';

export default function* worldAsync() {
  yield put(worldActions.enableLoader());
  const response = yield call(world);
  if (response.status == "success") {
    yield put(worldActions.onWorldResponse(response.data));
    yield put(worldActions.disableLoader({}));
  } else {
    yield put(worldActions.worldFailed());
    yield put(worldActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('Demo', response.Message);
    }, 200);
  }
}
