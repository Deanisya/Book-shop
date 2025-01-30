import './App.css';

import Header from './components/Header/Header';
import PopularBooks from './components/PopularBooks/PopularBooks';
// import Books from './components/Books/Books';
import SectionContainer from './components/SectionContainer/SectionContainer';
import UncontrolledExample from './components/bootstrapComponents/UncontrolledExample';

function App() {
	return (
		<>
			<SectionContainer>
				<Header />
				{/* <UncontrolledExample /> */}
				{/* <Books /> */}
				<PopularBooks />
			</SectionContainer>
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

// @import '../../styles/variables.scss';
