import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function world() {
  return Api(
    ApiConstants.WORLD ,
    null,
    'get',
    null,
  );
}
