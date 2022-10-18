import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {useState} from 'react'

const News = () => {

    const [color, setColor] = useState('')
	return (
		<>
			<Grid container spacing={2}>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<h1>Hacker News</h1>
						<div>
                            <Link to='/news/top-stories' style={{color: color, marginLeft: '5px', textAlign: 'left'}} onClick={()=>setColor('red')}>TOP STORIES</Link>
							<Link to='/news/lastest-stories' style={{color: color, marginLeft: '5px'}} onClick={()=>setColor('red')}>NEW STORIES</Link>
							<Link to='/news/best-stories' style={{ color: color, marginLeft: '5px' }} onClick={() => setColor('red')}>BEST STORIES</Link>
							<Link to='/home' >Home</Link>
						</div>
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs></Grid>
				<Grid item xs>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Outlet />
					</Paper>
				</Grid>
				<Grid item xs></Grid>
			</Grid>
		</>
	);
};

export default News;
