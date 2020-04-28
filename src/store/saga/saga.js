import { put, call, takeLatest, select } from 'redux-saga/effects';

import * as type from '../types/types';
import { requestAllPostsSuccess, requestAllPostsError, requestUpdatePostSuccess, requestUpdatePostFailure } from '../action/action';
import { getList, updatePost } from '../../utils/posts';
import { selectPosts } from '../selectors/selectors';


function* watchFetchAllPosts() {
	try{
		const { data } = yield call(getList);
		yield put(requestAllPostsSuccess(data));
	}catch(e){
		yield put(requestAllPostsError(e));
	}
}

function* watchFetchUpdatePost({payload}) {
	console.log(selectPosts);
	try{
		const { data } = yield call(updatePost, payload);
		const {posts} = yield select(state => state);
		let index =  posts.findIndex(post => post.id === data.id);
		posts[index] = data;
		yield put(requestUpdatePostSuccess(posts));
	}catch(e){
		yield put(requestUpdatePostFailure(e))
	}
}

function* watcher() {
	yield takeLatest(type.FETCH_POST_REQUEST, watchFetchAllPosts);
	yield takeLatest(type.FETCH_POST_UPDATE_REQUEST, watchFetchUpdatePost);

}
export default watcher;
