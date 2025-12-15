import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../api/client";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <main className="container">
      <header className="blog-header">
        <h1>📘 Blog Técnico</h1>
        <p>
          Artículos educativos sobre desarrollo web, JavaScript y React,
          explicados de forma clara y práctica.
        </p>
      </header>

      <section className="posts-list">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <span className="post-date">{post.date}</span>

            <p className="post-excerpt">
              Este artículo explica paso a paso el tema propuesto,
              con ejemplos claros y aplicados a proyectos reales.
            </p>

            <Link to={`/posts/${post.id}`} className="read-more">
              Leer artículo →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
