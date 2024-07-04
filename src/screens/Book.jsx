import { useParams, Link, Outlet } from 'react-router-dom';

export default function Book() {
  let { book } = useParams();
  book = book.replaceAll('_', ' ');
  return (
    <div>
      <h2>{book}</h2>
      <Link to="chapters">Chapters</Link>
      <br />
      <Link to="characters">characters</Link>
      <Outlet />
    </div>
  );
}
