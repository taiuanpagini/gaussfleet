/* eslint-disable array-callback-return */
import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
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
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados.'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      email,
      phone,
      start_hour,
      end_hour,
      start_lunch,
      end_lunch,
      password,
    } = payload;

    yield call(api.post, '/users', {
      name,
      email,
      phone,
      start_hour,
      end_hour,
      start_lunch,
      end_lunch,
      password,
    });

    const responseSession = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = responseSession.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      'Houve um erro no cadastro, verifique seus dados!'
    );

    yield put(signFailure());
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
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
