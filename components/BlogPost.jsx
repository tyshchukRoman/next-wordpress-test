import imagePlaceholder from "@/public/images/blog-post-placeholder.jpg";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({ slug, title, acf }) => {
  const image = acf.post_featured_image;
  const author = acf.post_author;

  return (
    <Link href={`/posts/${slug}`} className={`blog-post`}>
      <div className="blog-post__image-box">
        <Image src={image.url} alt={image.alt} width={500} height={500} />
      </div>
      <p className="blog-post__author">{author}</p>
      <h4 className="blog-post__title">{title.rendered}</h4>
    </Link>
  );
};

export default BlogPost;
