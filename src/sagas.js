import { takeLatest } from 'redux-saga';
import { call,put } from 'redux-saga/effects'
import { getBoard, getAllBoards } from './services';

function* getBoardList(action) {
    const boards = yield call(getAllBoards);
    yield put('SET_BOARD_LIST', { payload: boards });
}

function* getCurrentBoard(action) {
    const board = yield call(getBoard, action.boardId);
    yield put('SET_CURRENT_BOARD', { payload: board});
}

export default function* sagas() {
    yield takeLatest('GET_BOARDS_LIST', getBoardList);
    yield takeLatest('GET_CURRENT_BOARD', getCurrentBoard)
}