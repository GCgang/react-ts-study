import { useParams, Link, Outlet } from 'react-router-dom';

const books = {
  'J. K. Rowling': [
    {
      title: 'Harry_Potter_I',
    },
    {
      title: 'Harry_Potter_II',
    },
  ],
  'J. R. R. Tolkien': [
    {
      title: 'Lord_of_The_Rings_I',
    },
    {
      title: 'Lord_of_The_Rings_II',
    },
  ],
};

export default function Author() {
  let { name } = useParams();
  name = name.replaceAll('_', ' ');
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {books[name].map((book, index) => (
          <li key={index}>
            <Link to={`${book.title}`}>{book.title.replaceAll('_', ' ')}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
