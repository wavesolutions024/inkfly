import { Link, useParams } from "react-router-dom";
import PageTop from "../../components/page-top/PageTop";
import blogPosts from "./blogData";
import "./Blog.scss";

const BlogCard = ({ post }) => (
  <article className="blog_listing_card">
    <Link
      className="blog_listing_image"
      to={`/blogs/${post.slug}`}
      aria-label={`Read ${post.title}`}
    >
      <img
        src={post.image}
        alt=""
        loading="lazy"
        style={{ objectPosition: post.imagePosition }}
      />
      <span>{post.category}</span>
    </Link>
    <div className="blog_listing_content">
      {/* <p className="blog_read_time">{post.readingTime}</p> */}
      <h2>
        <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="blog_excerpt">{post.excerpt}</p>
      <Link className="blog_read_more" to={`/blogs/${post.slug}`}>
        Read the story <span aria-hidden="true">→</span>
      </Link>
    </div>
  </article>
);

const BlogListing = () => (
  <>
    <PageTop title="THE INKFLY JOURNAL" details="Stories behind the ink" />
    <main className="parent blog_parent">
      <div className="cont blog_cont">
        <span className="indicator">IDEAS · GUIDES · INSPIRATION</span>
        <h1>A little more about the art of ink.</h1>

        <div className="blog_listing_grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  </>
);

const BlogDetail = ({ post }) => (
  <>
    <PageTop title={post.category.toUpperCase()} details={post.title} />
    <main className="parent blog_article_parent">
      <article className="blog_article">
        <Link className="blog_back_link" to="/blogs">
          <span aria-hidden="true">←</span> All stories
        </Link>

        <header className="blog_article_header">
          <span className="indicator">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog_article_meta">
            Inkfly Tattoo Studio 
          </p>
          <p className="blog_article_lead">{post.excerpt}</p>
        </header>

        <figure className="blog_article_hero">
          <img
            src={post.image}
            alt=""
            style={{ objectPosition: post.imagePosition }}
          />
        </figure>

        <div className="blog_article_body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <aside className="blog_article_note">
            <strong>A note from Inkfly</strong>
            <p>
              Every tattoo and every person is different. Talk with your artist
              about your ideas and follow the personalized guidance they give
              you.
            </p>
          </aside>
        </div>

        <footer className="blog_article_footer">
          <span>Keep exploring</span>
          <Link to="/blogs">
            Back to all stories <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </article>
    </main>
  </>
);

const Blog = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!slug) return <BlogListing />;
  if (post) return <BlogDetail post={post} />;

  return (
    <>
      <PageTop title="STORY NOT FOUND" details="This page isn't here" />
      <main className="parent blog_not_found">
        <h1>We couldn't find that story.</h1>
        <Link to="/blogs">Browse all stories</Link>
      </main>
    </>
  );
};

export default Blog;
