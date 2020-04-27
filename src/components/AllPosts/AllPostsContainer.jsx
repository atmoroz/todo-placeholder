import React, {useState} from 'react';

import './allPosts.css';
import ChangePost from '../ChangePost/ChangePost';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';

const AllPostsContainer = ({title, body, id, userId, spin}) => {
	const [showForm, setShowForm] = useState(false);
	const changePost = () => {
		setShowForm(prev => !prev)
	}
	const {isLoadingPost} = useSelector(state => state);

	return(
		<div className="post">
			{(isLoadingPost && spin) && <Loading css={{ position: 'absolute',
    						left: 'calc(50% - 35px)',
    						right: '0',
    						top: 'calc(50% - 35px)',
							bottom:' 50%',
							}} />}
			<h3 className="postTitle">{title}</h3>
			<div className="postBody">{body}</div>
			<button className='button' onClick={changePost.bind(null, id)}>Change post</button>
			{showForm && <ChangePost  id={id} title={title} body={body} setShowForm={setShowForm} userId={userId} /> }
		</div>
	)
}
export default AllPostsContainer;
