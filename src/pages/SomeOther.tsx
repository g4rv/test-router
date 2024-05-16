import { Link, useParams } from 'react-router-dom';

const SomeOther = () => {
    const {some} = useParams()
	return (
		<div>
			SomeOther
            <br />
            {some}
			<br />
			<Link to={'/'}>home</Link>
			<br />
			<br />
			<Link to={'/not-home'}>Some other</Link>
		</div>
	);
};
export default SomeOther;
