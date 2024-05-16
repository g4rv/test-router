import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<h1>Vite + React</h1>
			<Link to={'/not-home'}>Not home</Link>
			<br />
			<br />
			<Link to={'/some-other/123'}>Some other</Link>
		</>
	);
}

export default App;
