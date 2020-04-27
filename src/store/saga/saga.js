import { put, call, takeLatest } from 'redux-saga/effects';

import * as type from '../types/types';
import { requestAllPostsSuccess, requestAllPostsError, requestUpdatePostSuccess, requestUpdatePostFailure } from '../action/action';
import { getList, updatePost } from '../../utils/posts';


function* watchFetchAllPosts() {
	try{
		const { data } = yield call(getList);
		yield put(requestAllPostsSuccess(data));
	}catch(e){
		yield put(requestAllPostsError(e));
	}
}

function* watchFetchUpdatePost(param) {
	try{
		const { data } = yield call(() => updatePost(param));
		yield put(requestUpdatePostSuccess(data));
	}catch(e){
		yield put(requestUpdatePostFailure(e))
	}
}

function* watcher() {
	yield takeLatest(type.FETCH_POST_REQUEST, watchFetchAllPosts);
	yield takeLatest(type.FETCH_POST_UPDATE_REQUEST, watchFetchUpdatePost);

}
export default watcher;
