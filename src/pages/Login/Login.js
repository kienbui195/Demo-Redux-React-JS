import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../features/LoginSlice';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		username: '',
		password: ''
	})

	const handleInput = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		if (form) {
			navigate('/home')
			dispatch(getUser(form))
		}
	};

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper sx={{ textAlign: 'center', padding: 2, marginTop: 10 }}>
						<Box component='form' onSubmit={handleSubmit}>
							<div>
								<h2>Login</h2>
							</div>
							<div>
								<TextField name='username' label='Username' type='text' onChange={handleInput} />
							</div>
							<div>
								<TextField
									name='password'
									label='Password'
									sx={{ marginTop: 2 }}
									type='password'
									onChange={handleInput}
								/>
							</div>
							<Button type='submit' variant='contained' color='success' sx={{ marginTop: 2 }}>
								Submit
							</Button>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default Login;
