import api from './Api';

export const getList = () => api.get('/posts').then(data => data).catch(error => error);
export const updatePost = ({id, titlePost, bodyPost, userId}) => {
	return (api.put(`/posts/${id}`,{
	userId: userId,
	id: id,
    title: titlePost,
  	body: bodyPost,
}).then(response => response).catch(error => error ))};
