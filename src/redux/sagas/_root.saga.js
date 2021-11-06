import {all} from 'redux-saga/effects';
//sagas
import loginSaga from './login.saga';
import productsSaga from './products.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';

export default function* rootSaga(){
    yield all([
        loginSaga(),
        productsSaga(),
        registrationSaga(),
        userSaga(),
    ])
};
