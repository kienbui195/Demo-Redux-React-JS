import { useEffect, useState } from 'react';
import axios from 'axios';

const TopStories = () => {
	const [news, setNews] = useState([]);
	const [detail, setDetail] = useState();
	const getDataApi = async () => {
		return await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
	};
	const getDetailApi = async id => {
		return await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
	};

	const handleDetail = id => {
		getDetailApi(id)
			.then(res => setDetail(res.data))
			.catch(err => console.log(err.message));
	};

	useEffect(() => {
		getDataApi()
			.then(res => setNews(res.data))
			.catch(err => console.log(err.message));
	}, []);

	return (
		<>
			<ul>
				{news &&
					news.map((item, index) => (
						<li key={index} style={{ listStyle: 'none' }}>
							<a onClick={() => handleDetail(item.id)} href>
								{item}
							</a>
						</li>
					))}
				{detail ? detail : ''}
			</ul>
		</>
	);
};

export default TopStories;
