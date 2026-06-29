"use client";

import { useState } from "react";
import Link from "next/link";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const cleanDate = dateStr.includes("T") ? dateStr.split("T")[0] : dateStr;
  const parts = cleanDate.split("-");
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return cleanDate;
};

export default function BlogList({ initialBlogs, apiUrl }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = (initialBlogs || []).filter((blog) => {
    const query = searchQuery.toLowerCase();
    const titleMatch = blog.title ? blog.title.toLowerCase().includes(query) : false;
    const descMatch = blog.description ? blog.description.toLowerCase().includes(query) : false;
    return titleMatch || descMatch;
  });

  return (
    <section className="ct_pb_50 ct_pt_50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="position-relative ct_blog_search_input">
              <input
                className="form-control"
                placeholder="Search the blog..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button aria-label="Search button">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => {
              const imageUrl = blog.banner_image
                ? (blog.banner_image.startsWith("http") ? blog.banner_image : `${apiUrl}${blog.banner_image}`)
                : "";

              return (
                <div key={blog.id} className="col-lg-6 col-md-6 mb-4">
                  <div className="ct_related_article_card">
                    <figure>
                      <div className="ct_article_img" tabIndex="0">
                        {imageUrl && <img alt={blog.title || "Blog banner"} src={imageUrl} />}
                      </div>
                      <figcaption className="mt-4 px-3">
                        <div>
                          <p className="mb-0 ct_fs_14 ct_fw_600">
                            {formatDate(blog.post_date || blog.created_at)}
                          </p>
                          <h4 className="ct_fs_18 ct_fw_700 text-truncate" title={blog.title}>
                            {blog.title}
                          </h4>
                          <p className="mb-0 ct_fs_14 ct_minimise_cnt">
                            {blog.description}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <Link className="ct_blue_btn_fill w-100 mt-4" href={`/blog-details?slug=${blog.slug}`}>
                            Learn More
                          </Link>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5">
              <p className="ct_fs_18 ct_fw_600 text-muted">No blogs found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
