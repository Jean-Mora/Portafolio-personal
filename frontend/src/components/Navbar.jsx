import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "20px",
      padding: "16px",
      borderBottom: "1px solid #ddd"
    }}>
      <Link to="/">Hoja de Vida</Link>
      <Link to="/posts">Blog</Link>
    </nav>
  );
}
