import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import NotHome from './pages/NotHome';
import SomeOther from './pages/SomeOther';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{ path: 'not-home', element: <NotHome /> },
	{ path: 'some-other/:some', element: <SomeOther /> },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
