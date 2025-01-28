import React, { useState, useEffect } from 'react';

const App = () => {
	const [books, setBooks] = useState([]);
	const [query, setQuery] = useState(''); // Запрос для поиска
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [page, setPage] = useState(0); // Управление страницами
	const maxResults = 10; // Количество книг на странице

	const fetchBooks = async (searchQuery = 'bestseller', startIndex = 0) => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&startIndex=${startIndex}&maxResults=${maxResults}&key=AIzaSyAmAcNt2YEJaAyzDMRxBsDxafm-3tC3bY4`);
			const data = await response.json();
			console.log(data);

			if (data.items) {
				setBooks(prevBooks => [...prevBooks, ...data.items]);
			} else {
				setBooks([]);
			}
		} catch (err) {
			setError('Ошибка при загрузке данных.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// Загружаем книги при изменении query или страницы
		if (!query.trim()) {
			fetchBooks('bestseller', page * maxResults);
		} else {
			fetchBooks(query, page * maxResults);
		}
	}, [query, page]);

	const handleLoadMore = () => {
		setPage(prevPage => prevPage + 1); // Увеличиваем страницу
	};

	return (
		<div>
			<h1>Книги из Google Books</h1>

			{/* Поле поиска */}
			<div className='search-container'>
				<input
					type='text'
					placeholder='Введите запрос (например: React)'
					value={query}
					onChange={e => {
						setBooks([]); // Сбрасываем книги при новом запросе
						setPage(0); // Сбрасываем страницу
						setQuery(e.target.value);
					}}
				/>
				<button onClick={() => setPage(0)} disabled={loading || !query.trim()}>
					Найти
				</button>
			</div>

			{/* Загрузка / Ошибки */}
			{loading && <p>Загрузка...</p>}
			{error && <p className='error'>{error}</p>}

			{/* Сетка книг */}
			<div className='books-grid'>
				{books.map((book, index) => {
					const volumeInfo = book.volumeInfo;
					return (
						<div key={index} className='book-card'>
							<img src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/128x193'} alt={volumeInfo.title} className='book-cover' />
							<h2 className='book-title'>{volumeInfo.title}</h2>
							<p className='book-author'>
								<strong>Автор:</strong> {volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Неизвестный автор'}
							</p>
							<p className='book-published'>
								<strong>Год:</strong> {volumeInfo.publishedDate || 'Не указан'}
							</p>
						</div>
					);
				})}
			</div>

			{/* Кнопка "Загрузить еще" */}
			{books.length > 0 && (
				<button onClick={handleLoadMore} disabled={loading}>
					{loading ? 'Загрузка...' : 'Загрузить еще'}
				</button>
			)}
		</div>
	);
};

export default App;
