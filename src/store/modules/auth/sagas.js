/* eslint-disable array-callback-return */
import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import { executeQuery, executeQueryInterno } from '~/services/dbUtil';
import { insertProfile, selectProfile } from '~/sql/profile';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/login', {
      email,
      password,
    });

    const { data, status } = response;

    if (status !== 200) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados.'
      );
    }

    yield put(signInSuccess(data.token));
    executeQuery(insertProfile(1, data.token));
  } catch (err) {
    const profile = yield executeQueryInterno(selectProfile());

    if (profile) {
      yield put(signInSuccess(profile[0].token));
    } else {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados.'
      );
      yield put(signFailure());
    }
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
