import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        <li>
          <Link to="/author/J._K._Rowling">J. K. Rowling</Link>
        </li>
        <li>
          <Link to="/author/J._R._R._Tolkien">J. R. R. Tolkien</Link>
        </li>
      </ul>
    </div>
  );
}
