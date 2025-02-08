import { createSlice } from '@reduxjs/toolkit';
import book1 from '../../img/book1.png';

// Создаем slice для корзины
const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {}, // Список товаров, где ключ — id товара, значение — { name, price, quantity }
		totalQuantity: 0, // Общее количество товаров
		isSidebarOpen: false,
		totalPrice: 0,
	},
	reducers: {
		addItem(state, action) {
			const { id, volumeInfo, saleInfo } = action.payload; // book.volumeInfo.imageLinks.thumbnail
			const title = volumeInfo?.title ?? 'Random title';
			const price = Math.round(saleInfo?.listPrice?.amount ?? 0);
			const img = volumeInfo?.imageLinks?.thumbnail ?? book1;
			const authors = volumeInfo?.authors ?? 'Random author';

			// Проверяем, если товар уже есть в корзине
			if (state.items[id]) {
				// Увеличиваем количество товара в корзине
				state.items[id].quantity += 1;
				// Увеличиваем общее количество товаров
				state.totalQuantity += 1;
			} else {
				// Если товара нет в корзине, добавляем его с количеством 1
				state.items[id] = { img, authors, title, price, quantity: 1 };
				state.totalQuantity += 1;
			}
			// Обновляем общую стоимость
			state.totalPrice += price;
		},
		removeItem(state, action) {
			const id = action.payload;
			const itemTotalPrice = (state.items[id].price ?? 0) * state.items[id].quantity;
			state.totalQuantity -= state.items[id].quantity;
			state.totalPrice -= itemTotalPrice;
			if (state.items[id]) {
				delete state.items[id];
			}
		},
		updateQuantity(state, action) {
			const { id, quantity } = action.payload;
			if (state.items[id]) {
				state.totalQuantity += quantity - state.items[id].quantity;
				state.items[id].quantity = quantity;
			}
		},
		openSidebar(state) {
			state.isSidebarOpen = !state.isSidebarOpen;
		},
		closeSidebar(state) {
			state.isSidebarOpen = false;
		},
		decrementCount(state, action) {
			const { id } = action.payload;
			if (state.items[id] && state.items[id].quantity > 0) {
				state.items[id].quantity--;
				state.totalQuantity--;
				state.sum += state.items[id].price;

				// Вычитаем стоимость за одну единицу товара
				state.totalPrice -= state.items[id].price;

				// Удаляем товар, если количество становится 0
				if (state.items[id].quantity === 0) {
					delete state.items[id];
				}
			}
		},
		incrementCount(state, action) {
			const { id } = action.payload;
			if (state.items[id]) {
				state.items[id].quantity++;
				state.totalQuantity++;
				// Добавляем стоимость за одну единицу товара
				state.totalPrice += state.items[id].price;
			}
		},
		clearCart(state) {
			if (state.items && typeof state.items === 'object') {
				state.totalQuantity = 0;
				state.items = {}; // Присваиваем пустой объект
				state.totalPrice = 0; // Сбрасываем общую стоимость на ноль напрямую
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity, openSidebar, closeSidebar, decrementCount, incrementCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
