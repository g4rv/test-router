import { Link, useParams } from 'react-router-dom';

const SomeOther = () => {
    const {some} = useParams()
	return (
		<div>
			SomeOther
            <br />
            {some}
			<br />
			<Link to={'/test-router/'}>home</Link>
			<br />
			<br />
			<Link to={'/test-router/not-home'}>Some other</Link>
		</div>
	);
};
export default SomeOther;
