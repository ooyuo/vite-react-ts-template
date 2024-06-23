import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '@/pages/HomePage';
import CatRoutes from './CatRoutes';
import ErrorPage from '@/pages/error/ErrorPage';

function App() {
  let routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        ...CatRoutes,
        { path: '*', element: <ErrorPage /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return <div>{element}</div>;
}

export default App;
