import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../api/client";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client.get(`/posts/${id}`).then(res => setPost(res.data));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <span className="post-date">{post.date}</span>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
