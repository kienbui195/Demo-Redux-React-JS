import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const item = useSelector(state => state.blog.blog);
	const navigate = useNavigate()
	
	return (
		<>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper sx={{ textAlign: 'left', padding: 2 }}>
						<h3>{item.title}</h3>
						<p>{item.content}</p>
						<p>by <strong>{item.author}</strong></p>
						<p>Time: {item.date}</p>
						<div>Like: {item.like}</div>
                        <div>Dislike: {item.dislike}</div>
						<Button variant='outlined' onClick={() => navigate('/blog/home')} >Back</Button>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default Details;
