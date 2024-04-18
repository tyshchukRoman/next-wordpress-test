import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";

import { POSTS_LIST_URL } from "@/lib/constants";

const BlogGrid = async () => {
  const res = await fetch(POSTS_LIST_URL);
  const posts = await res.json();

  return (
    <Container>
      <div className="blog-grid">
        {posts.map((post) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </Container>
  );
};

export default BlogGrid;
