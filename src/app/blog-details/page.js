import Header from "@/components/Header";
import Link from "next/link";
import { BlogDetailsSliderInit } from "@/components/PageInitializers";
import { API_URL } from "@/config";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const cleanDate = dateStr.includes("T") ? dateStr.split("T")[0] : dateStr;
  const parts = cleanDate.split("-");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return cleanDate;
};

const getBlogs = async () => {
  try {
    const res = await fetch(`${API_URL}/api/user/getBlogs`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    const json = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

export async function generateMetadata({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const slug = resolvedSearchParams?.slug;
  const blogs = await getBlogs();
  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  if (!blog) {
    return {
      title: "Creative AI Blog",
      description: "Explore AI app development ideas, product updates, and no-code app building guides.",
    };
  }

  const imageUrl = blog.banner_image
    ? (blog.banner_image.startsWith("http") ? blog.banner_image : `${API_URL}${blog.banner_image}`)
    : "https://creativethoughts.ai/img/c.png";

  return {
    title: `${blog.title} | Creative AI Blog`,
    description: blog.description || "Explore AI app development ideas, product updates, and no-code app building guides.",
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [
        {
          url: imageUrl,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function Page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const slug = resolvedSearchParams?.slug;
  const blogs = await getBlogs();

  // Find target blog, fallback to first blog in the list if not found
  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  if (!blog) {
    return (
      <>
        <Header />
        <section className="ct_pb_50 ct_pt_50 text-center">
          <div className="container">
            <h1 className="ct_fs_44 ct_fw_700 mb-4">Blog Post Not Found</h1>
            <p className="mb-4">We couldn't find the blog post you are looking for.</p>
            <Link className="ct_blue_btn_fill" href="/blog">
              Back to Blog
            </Link>
          </div>
        </section>
      </>
    );
  }

  // Get recent blogs (excluding the current one, capped at 4)
  const recentBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 4);

  const bannerImageUrl = blog.banner_image
    ? (blog.banner_image.startsWith("http") ? blog.banner_image : `${API_URL}${blog.banner_image}`)
    : "";

  return (
    <>
      <Header />
      <BlogDetailsSliderInit />

      <section className="ct_pb_50" style={{ overflow: "unset" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-4">
              <ul className="ct_blog_breadcrumb">
                <Link href="/">Home</Link>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <Link href="/blog">Blog</Link>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <li>Blog Detail</li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center mt-5 pb-5 mb-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h4 className="text-naviblue ct_fs_50 mb-0 ct_fw_600">
                {blog.title}
              </h4>
            </div>
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="ct_blog_dtl_img">
                {bannerImageUrl && (
                  <img
                    alt={blog.title || "Blog banner image"}
                    className="h-auto"
                    src={bannerImageUrl}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 mb-4 mb-lg-0">
              <div className="ct_blog_dtl_box ct_blog_sticky">
                <h1 className="text-naviblue">{blog.title}</h1>
                <div
                  className="ct_blog_dlt_text_ui"
                  dangerouslySetInnerHTML={{ __html: blog.text_editor }}
                />
              </div>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="ct_custom_sticky_blg">
                {recentBlogs.length > 0 && (
                  <div className="dev-recent-blogs">
                    <h2 className="dev-blog-heading">Recent Blogs</h2>
                    {recentBlogs.map((item) => (
                      <div key={item.id} className="dev-blog-item">
                        <Link href={`/blog-details?slug=${item.slug}`} className="text-decoration-none">
                          <h3 className="dev-blog-title">{item.title}</h3>
                        </Link>
                        <span className="dev-blog-date">
                          {formatDate(item.post_date || item.created_at)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="dev-ai-card">
                  <div className="dev-ai-card-image">
                    <img alt="Creative AI" src="/img/blog_img_345.jpg" />
                  </div>
                  <div className="dev-ai-card-content">
                    <h2 className="dev-ai-card-title">
                      From Idea to App,
                      <br />
                      Powered by Creative AI
                    </h2>
                    <p className="dev-ai-card-desc">
                      Turn your ideas into fully functional apps using intelligent
                      automation. Design, build, and launch, all in one seamless
                      workflow.
                    </p>
                    <a className="ct_blue_btn_fill">Build Your App Today!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
