import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScroll = () => {
	const context = useContext(ScrollContext);

	// Если контекст не был найден, выбрасываем ошибку
	if (!context) {
		throw new Error('useScroll must be used within a ScrollProvider');
	}

	return context;
};

export const ScrollProvider = ({ children }) => {
	const [shouldScroll, setShouldScroll] = useState(true);

	const toggleScroll = value => {
		setShouldScroll(value);
	};

	return <ScrollContext.Provider value={{ shouldScroll, toggleScroll }}>{children}</ScrollContext.Provider>;
};
