import * as type from '../types/types';

const initialState = {
	Posts: [],
	isLoading: false,
	isLoadingPost: false
};

const reducer = (state=initialState, action) => {
	switch(action.type){
		case type.FETCH_POST_REQUEST:
		return {
			...state,
			isLoading: true
		}
		case type.FETCH_POST_SUCCESS:
			return {
				...state,
				Posts: action.payload,
				isLoading: false
			}
		case type.FETCH_POST_UPDATE_REQUEST:
			return {
				...state,
				isLoadingPost: true
			}
		case type.FETCH_POST_UPDATE_SUCCESS:
			let index =  state.Posts.findIndex(post => post.id === action.payload.id);
			state.Posts.splice(index, 1, action.payload);
			return {
				...state,
				isLoadingPost: false,
			}
		case type.FETCH_POST_UPDATE_FAILURE:
			return {
				...state,
				isLoadingPost: false,
			}
		default:
			return state;
	}
}

export default reducer;
