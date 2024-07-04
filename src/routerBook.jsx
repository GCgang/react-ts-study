import { createBrowserRouter } from 'react-router-dom';
import AppBook from './AppBook';
import Home from './screens/Home';
import About from './screens/About';
import Author from './screens/Author';
import Book from './screens/Book';
import Chapters from './screens/Chapters';
import Characters from './screens/Characters';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppBook />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'author/:name',
        element: <Author />,
        children: [
          {
            path: ':book',
            element: <Book />,
            children: [
              {
                path: 'chapters',
                element: <Chapters />,
              },
              {
                path: 'characters',
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
