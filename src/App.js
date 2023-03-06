import { React } from 'react';
import './App.scss';
import Index from './components/SideBar';
import sideBar from './Data/sideBar';
import VideoDetails from './components/VideoDetails';
import NavBar from './components/NavBar/NavBar';

const App = (context) => {
	const extendedContext = { ...context, sideBar };

	return <div className="App">
		<Index { ...extendedContext }/>
		<VideoDetails/>
		<NavBar/>
	</div>;
};

export default App;
