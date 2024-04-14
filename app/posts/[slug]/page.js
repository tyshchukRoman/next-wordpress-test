import Container from "@/components/Container";
import { SINGLE_POST_URL } from "@/lib/constants";

export default async function SinglePost({ params: { slug } }) {
  const res = await fetch(SINGLE_POST_URL + slug);
  const posts = await res.json();
  const post = posts[0];

  console.log(posts);

  return (
    <main className="single-post">
      <Container>
        <h1>{post.title.rendered}</h1>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </Container>
    </main>
  );
}
