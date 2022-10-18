import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {addnewPost} from '../../features/blogSlice'

const Create = () => {
	const [form, setForm] = useState({});
    const navigate = useNavigate();
    const dateNow = Date()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            ...form,
            date: dateNow,
            like: 0,
            dislike: 0
        }

        dispatch(addnewPost(item))
        navigate('/blog/home')
    };

	return (
		<>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper sx={{ textAlign: 'center', padding: 2, marginTop: 5 }}>
						<Box component='form' onSubmit={handleSubmit}>
							<h3>New Post</h3>
							<div>
								<TextField
									label='title'
									required
									type='text'
									onChange={e => setForm({ ...form, title: e.target.value })}
								/>
							</div>
							<div>
								<TextField
									label='content'
									required
									type='text'
									sx={{ marginTop: 1 }}
									onChange={e => setForm({ ...form, content: e.target.value })}
								/>
							</div>
							<div>
								<TextField
									label='author'
									required
									type='text'
									sx={{ marginTop: 1 }}
									onChange={e => setForm({ ...form, author: e.target.value })}
								/>
							</div>
							<Button variant='contained' color='success' type='submit' sx={{ marginTop: 1 }}>
								Create
							</Button>
						</Box>
						<Button sx={{ marginTop: 1 }} variant='outlined' color='success' onClick={() => navigate('/blog/home')}>
							Back
						</Button>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default Create;
