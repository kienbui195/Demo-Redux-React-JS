import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import TodoList from './pages/TodoList/TodoList';
import Product from './pages/Product/Product';
import CreateProduct from './pages/Product/CreateProduct';
import News from './pages/News/News';
import TopStories from './pages/News/TopStories';
import LastestStories from './pages/News/LastestStories';
import BestStories from './pages/News/BestStories';
import Detail from './pages/News/Detail';
import Home from './pages/Blog/Home';
import Header from './pages/Blog/Header';
import Create from './pages/Blog/Create';
import Details from './pages/Blog/Details';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<List />} />
				<Route path='/todo' element={<TodoList />} />
				<Route path='/product' element={<Product />} />
				<Route path='/create' element={<CreateProduct />} />
				<Route path='/news' element={<News />}>
					<Route path='top-stories' element={<TopStories />} />
					<Route path='lastest-stories' element={<LastestStories />} />
					<Route path='best-stories' element={<BestStories />} />
					<Route path='detail' element={<Detail />} />
				</Route>
				<Route path='/blog' element={<Header />}>
					<Route path='home' element={<Home />} />
					<Route path='details' element={<Details />} />
				</Route>
				<Route path='/blog/create' element={<Create />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
