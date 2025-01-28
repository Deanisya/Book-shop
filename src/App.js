import './App.css';
import Header from './components/Header/Header';
import Books from './components/Books/Books';

function App() {
	return (
		<>
			<Header />
			<Books />
		</>
	);
}

export default App;

{
	/* <Routes>
	<Route path='/' element={<Home />} />
	<Route path='/about' element={<About />} />
	<Route path='/project/*' element={<Projects />}>
		<Route path='toDoList' element={<ToDoListRedux title='To Do List' />} />
		<Route path='animatedSocialLink' element={<AnimatedSocialLink />} />
		<Route path='slider' element={<Slider />} />
		<Route path='draggedList' element={<DragDropList />} />
		<Route path='draggedListBlocks' element={<DragDropBlocks />} />
		<Route path='draggedListThreeBlocks' element={<DragDropBlocksOnRedux />} />
	</Route>
	<Route path='/' element={<FooterPortfolio />} />
</Routes>; */
}
