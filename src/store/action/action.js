import * as type from '../types/types';

export const requestAllPosts = () => {
	return {
		type: type.FETCH_POST_REQUEST
	}
}

export const requestAllPostsSuccess = (data) => {
	return {
		type: type.FETCH_POST_SUCCESS,
		payload: data
	}
  };

export  const requestAllPostsError = (error) => {
	return {
		type: type.FETCH_POST_FAILURE
	}
}

export const requestUpdatePostRequest = (data) => {
	return {
		type: type.FETCH_POST_UPDATE_REQUEST,
		payload: data
	}
}

export const requestUpdatePostSuccess = (data) => {
	return {
		type: type.FETCH_POST_UPDATE_SUCCESS,
		payload: data
	}
}

export const requestUpdatePostFailure = (error) => {
	return {
		type: type.FETCH_POST_UPDATE_FAILURE
	}
}
