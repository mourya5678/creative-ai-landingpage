export default function BlogsSection({
  blogs = [],
  apiUrl = "",
  eyebrow = "Blogs",
  title,
  description,
}) {
  return (
    <section className="cti_blog_new_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ct_home_titles_cnt">
              <span>{eyebrow}</span>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row ct_pt_76">
          {blogs.length > 0 ? (
            blogs.slice(0, 3).map((blog) => {
              const imageUrl = blog.banner_image
                ? blog.banner_image.startsWith("http")
                  ? blog.banner_image
                  : `${apiUrl}${blog.banner_image}`
                : "";
              return (
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0" key={blog.id}>
                  <a href={`/blog-details?slug=${blog.slug}`} className="cti_blog_card d-block">
                    <div className="cti_blog_img">
                      {imageUrl && (
                        <img className="img-fluid" loading="lazy" alt={blog.title || "Blog banner"} src={imageUrl} />
                      )}
                    </div>
                    <div className="cti_blog_content">
                      <h3 className="text-truncate">{blog.title}</h3>
                      <p className="ct_minimise_cnt">{blog.description}</p>
                    </div>
                  </a>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <p className="ct_fs_18 ct_fw_600 text-muted">No blogs found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}