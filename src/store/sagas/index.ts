import {
  call,
  put,
  SagaReturnType,
  takeLatest,
  all,
  fork,
} from "redux-saga/effects";
import {
  deleteUserById,
  fetchUser,
  fetchUsers,
  registerUser,
  updateUserInfo,
} from "../../api";
import {
  setLoading,
  setUsers,
  setUser,
  addUser,
  updateUser,
  deleteUser,
  setDone,
} from "../actions";

import {
  ActionConstant,
  AddUser,
  DeleteUser,
  GetUsers,
  UpdateUser,
} from "../actions/types";

function* handleGetUsers(action: GetUsers) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));

    const data: SagaReturnType<typeof fetchUsers> = yield call(fetchUsers);
    yield put(setUsers(data));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

function* handleGetUser(action: DeleteUser) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof fetchUser> = yield call(
      fetchUser,
      action.payload
    );
    yield put(setUser(data));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

function* handleSetUser(action: UpdateUser) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    yield put(setUser(action.payload));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

function* handleAddUser(action: AddUser) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof registerUser> = yield call(
      registerUser,
      action.payload
    );
    yield put(addUser(data));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

function* handleUpdateUser(action: UpdateUser) {
  try {
    yield put(setLoading(true));
    yield put(setDone(false));
    const data: SagaReturnType<typeof updateUserInfo> = yield call(
      updateUserInfo,
      action.payload
    );
    yield put(updateUser(data));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

function* handleDeleteUser(action: DeleteUser) {
  try {
    yield put(setDone(false));
    yield put(setLoading(true));
    yield call(deleteUserById, action.payload);
    yield put(deleteUser(action.payload));
  } catch (error) {
    // yield put(setError(error.message));
  }
}

export function* watchGetUsers() {
  yield takeLatest(ActionConstant.SAGA_GET_USERS, handleGetUsers);
}

export function* watchGetUser() {
  yield takeLatest(ActionConstant.SAGA_GET_USER, handleGetUser);
}

export function* watchSetUser() {
  yield takeLatest(ActionConstant.SAGA_SET_USER, handleSetUser);
}

export function* watchAddUser() {
  yield takeLatest(ActionConstant.SAGA_ADD_USER, handleAddUser);
  yield takeLatest(ActionConstant.SAGA_GET_USERS, handleGetUsers);
}

export function* watchUpdateUser() {
  yield takeLatest(ActionConstant.SAGA_UPDATE_USER, handleUpdateUser);
}

export function* watchDeleteUser() {
  yield takeLatest(ActionConstant.SAGA_DELETE_USER, handleDeleteUser);
  yield takeLatest(ActionConstant.SAGA_GET_USERS, handleGetUsers);
}

export function* mainSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetUser),
    fork(watchSetUser),
    fork(watchUpdateUser),
    fork(watchAddUser),
    fork(watchDeleteUser),
  ]);
}
