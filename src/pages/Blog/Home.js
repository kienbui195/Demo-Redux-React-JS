import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewPost, like } from '../../features/blogSlice';

const Home = () => {
	const blog = useSelector(state => state.blog.blogs);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleView = item => {
		dispatch(viewPost(item));
		navigate('/blog/details');
	};
	const handleChange = (str, index) => {
		dispatch(
			like({
				type: str,
				index: index,
			})
		);
	};

	return (
		<>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs={8}>
					{blog
						? blog.map((item, index) => (
								<Paper elevation={2} sx={{ padding: 2, textAlign: 'left', marginTop: 8 }}>
									<h5>{item.title}</h5>
									<p>{item.content.slice(0, 30)}...</p>
									<Button onClick={() => handleView(item)}>View Post</Button>
									<div>by {item.author}</div>
									<div>Date: {item.date}</div>
									<div>
										{item && item.like === 1 ? (
											<>
												<input
													checked
													type='radio'
													name={`like${index}`}
													onChange={() => handleChange('like', index)}
												/>
												Like
												<input type='radio' name={`like${index}`} onChange={() => handleChange('dislike', index)} />
												Dislike
											</>
										) : (
											<>
												<input type='radio' name={`like${index}`} onChange={() => handleChange('like', index)} />
												Like
												<input
													checked
													type='radio'
													name={`like${index}`}
													onChange={() => handleChange('dislike', index)}
												/>
												Dislike
											</>
										)}
									</div>
								</Paper>
						  ))
						: ''}
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default Home;
