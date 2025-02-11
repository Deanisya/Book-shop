import React from 'react';
import { useSelector } from 'react-redux';

import RenderBooks from '../../common/RenderBooks/RenderBooks';

function ShoppingBooks() {
	const { books } = useSelector(state => state.booksList);

	return <RenderBooks books={books} />;
}

export default ShoppingBooks;
