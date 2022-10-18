import { Outlet, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<div>
				<Grid container spacing={1}>
					<Grid item xs></Grid>
					<Grid item xs>
						<Paper elevation={3} sx={{ textAlign: 'center' }}>
							<Button onClick={() => navigate('/blog/home')}>Home</Button>
							<Button onClick={() => navigate('/blog/create')}>New Post</Button>
							<Button onClick={() => navigate('/home')}>Dashboard</Button>
						</Paper>
					</Grid>
					<Grid item xs></Grid>
				</Grid>
			</div>
			<div style={{marginTop: 10}}>
				<Outlet  />
			</div>
		</>
	);
};

export default Header;
