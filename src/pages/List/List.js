import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { setList } from '../../features/listUserSlice';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

const List = () => {
	const user = useSelector(state => state.login.user);
	const list = useSelector(state => state.list.users);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const getUsersApi = async () => {
		let reqOptions = {
			url: 'https://jsonplaceholder.typicode.com/users',
			method: 'GET',
		};

		return await axios.request(reqOptions);
	};
 
 
	useEffect(() => {
		getUsersApi()
			.then(res => dispatch(setList(res.data)))
			.catch(err => console.log(err.message));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	
	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper sx={{ textAlign: 'center', padding: 2, marginTop: 10 }}>
						<Box>
							<h1>Hello {user && user.username? user.username : 'Stranger'}</h1>
							<h2>List User</h2>
							<Button onClick={() => navigate('/')} variant='outlined' color='info'>
								Back to Login
							</Button>
							<Button onClick={() => navigate('/todo')} variant='outlined' color='info'>
								TodoList
							</Button>
							<Button onClick={() => navigate('/product')} variant='outlined' color='info'>
								Shopping Cart
							</Button>
							<Button onClick={() => navigate('/news')} variant='outlined' color='info'>
								Hacker News
							</Button>
							<Button onClick={() => navigate('/blog')} variant='outlined' color='info'>
								Blog
							</Button>
							<div>
								<TableContainer component={Paper}>
									<Table sx={{ minWidth: 700 }} aria-label='customized table'>
										<TableHead>
											<TableRow>
												<StyledTableCell>#</StyledTableCell>
												<StyledTableCell align='left'>ID</StyledTableCell>
												<StyledTableCell align='left'>Name</StyledTableCell>
												<StyledTableCell align='left'>Email</StyledTableCell>
												<StyledTableCell align='left'>Website</StyledTableCell>
												<StyledTableCell align='left'></StyledTableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{list.map((user, index) => (
												<StyledTableRow key={index}>
													<StyledTableCell component='th' scope='row'>
														{index + 1}
													</StyledTableCell>
													<StyledTableCell align='left'>{user.id}</StyledTableCell>
													<StyledTableCell align='left'>{user.name}</StyledTableCell>
													<StyledTableCell align='left'>{user.email}</StyledTableCell>
													<StyledTableCell align='left'>{user.website}</StyledTableCell>
													<StyledTableCell align='left'>
														
													</StyledTableCell>
												</StyledTableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							</div>
						</Box>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default List;
