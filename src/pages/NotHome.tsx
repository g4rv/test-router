import { Link } from 'react-router-dom';

const NotHome = () => {
	return (
		<div>
			NotHome
			<br />
			<Link to={'/'}>home</Link>
			<br />
			<br />
			<Link to={'/some-other/124123'}>Some other</Link>
		</div>
	);
};
export default NotHome;
