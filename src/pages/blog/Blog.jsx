import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
    <Helmet>
      <title>Tattoo Blog & Guides | Inkfly Tattoo Studio, Pune</title>
      <meta
        name="description"
        content="Explore tattoo aftercare advice, custom design inspiration and helpful tattoo guides from Inkfly Tattoo Studio in Wakad, Pune."
      />
      <meta
        name="keywords"
        content="tattoo blog Pune, tattoo aftercare tips, custom tattoo design ideas, tattoo guides, tattoo inspiration"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Tattoo Blog & Guides | Inkfly Tattoo Studio, Pune"
      />
      <meta
        property="og:description"
        content="Read tattoo care tips, design guides and inspiration from Inkfly Tattoo Studio."
      />
      <meta property="og:type" content="website" />
      <link rel="canonical" href="https://www.inkflytattoo.com/blogs" />
    </Helmet>
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
    <Helmet>
      <title>{`${post.title} | Inkfly Tattoo Studio`}</title>
      <meta name="description" content={post.excerpt} />
      <meta
        name="keywords"
        content={`${post.title}, ${post.category} advice, tattoo guide, tattoo tips Pune, Inkfly Tattoo Studio`}
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={`${post.title} | Inkfly Tattoo Studio`} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={`https://www.inkflytattoo.com${post.image}`}
      />
      <link
        rel="canonical"
        href={`https://www.inkflytattoo.com/blogs/${post.slug}`}
      />
    </Helmet>
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
      <Helmet>
        <title>Story Not Found | Inkfly Tattoo Studio</title>
        <meta
          name="description"
          content="This Inkfly Tattoo Studio story could not be found. Browse our tattoo articles and guides."
        />
        <meta name="keywords" content="Inkfly Tattoo Studio blog, tattoo articles, tattoo guides" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <PageTop title="STORY NOT FOUND" details="This page isn't here" />
      <main className="parent blog_not_found">
        <h1>We couldn't find that story.</h1>
        <Link to="/blogs">Browse all stories</Link>
      </main>
    </>
  );
};

export default Blog;
