import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList, deleteTask } from '../../features/listTodoSlice';

const TodoList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [form, setForm] = useState('');
	const data = useSelector(state => state.todo.task);

	const handleSubmit = e => {

		e.preventDefault();

		dispatch(setList(form));

		setForm('');
		
	};

	const handleDelete = index => {
		dispatch(deleteTask(index));
	};

	return (
		<>
			<Grid container spacing={1}>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper sx={{ textAlign: 'center', padding: 2, marginTop: 10 }}>
						<Box component='form' onSubmit={handleSubmit}>
							<h2>Todo List</h2>
							<div>
								<TextField required label='Task' name='task' onChange={e => setForm(e.target.value)} value={form} />
							</div>

							<Button type='submit' variant='outlined' color='success' sx={{ marginTop: 2 }}>
								Add
							</Button>
						</Box>
						<Button
							type='button'
							onClick={() => navigate('/home')}
							variant='outlined'
							color='success'
							sx={{ marginTop: 2 }}>
							Back
						</Button>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
			<Grid item xs>
				<Paper sx={{ textAlign: 'center', padding: 2, margin: 10 }}>
					<h2>List</h2>
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th colSpan={3}>Task</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data.map((item, index) => (
								<tr key={index}>
									<th>{index + 1}.</th>
									<th colSpan={3} style={{ textAlign: 'left' }}>
										{item}
									</th>
									<th>
										<Button variant='outlined' color='info' onClick={() => handleDelete(index)}>
											Delete
										</Button>
									</th>
									<th>
										<Button variant='outlined' color='info'>
											Finish
										</Button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</Paper>
			</Grid>
		</>
	);
};

export default TodoList;
