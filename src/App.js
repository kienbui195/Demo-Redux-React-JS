import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import TodoList from './pages/TodoList/TodoList';
import Product from './pages/Product/Product'
import CreateProduct from './pages/Product/CreateProduct';

function App() {
	

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<List />} />
				<Route path='/todo' element={<TodoList />} />
				<Route path='/product' element={<Product />} />
				<Route path='/create' element={<CreateProduct />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
