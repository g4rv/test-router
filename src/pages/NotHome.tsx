import { Link } from 'react-router-dom';

const NotHome = () => {
	return (
		<div>
			NotHome
			<br />
			<Link to={'/test-router/'}>home</Link>
			<br />
			<br />
			<Link to={'/test-router/some-other/124123'}>Some other</Link>
		</div>
	);
};
export default NotHome;
