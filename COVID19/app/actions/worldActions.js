/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requesWorld() {
  return {
    type: types.WORLD_GENERAL_REQUEST,
  };
}

export function worldFailed() {
  return {
    type: types.WORLD_GENERAL_FAILED,
  };
}

export function onWorldResponse(response) {
  return {
    type: types.WORLD_GENERAL_RESPONSE,
    response,
  };
}


export function requesCountries(page) {
  return {
    type: types.COUNTRIES_REQUEST,
    page:page
  };
}

export function countriesFailed() {
  return {
    type: types.COUNTRIES_FAILED,
  };
}

export function onCountriesResponse(response) {
  return {
    type: types.COUNTRIES_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.WORLD_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.WORLD_DISABLE_LOADER,
  };
}
