import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function countries(page) {
  return Api(
    ApiConstants.COUNTRIES + '?limit=10&page=' + page ,
    null,
    'get',
    null,
  );
}
