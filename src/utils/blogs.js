export function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<\/?[^>]+(>|$)/g, "")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .trim();
}

export function mapWordPressPost(wpPost) {
  return {
    id: wpPost.id,
    slug: wpPost.slug,
    title: wpPost.title?.rendered || "",
    description: stripHtml(wpPost.excerpt?.rendered || ""),
    text_editor: wpPost.content?.rendered || "",
    banner_image: wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url || "",
    post_date: wpPost.date || wpPost.date_gmt || ""
  };
}

export function parseWordPressHtml(html) {
  const bodyClassMatch = html.match(/<body[^>]*class=["']([^"']+)["']/);
  const bodyClasses = bodyClassMatch ? bodyClassMatch[1] : "";

  const bodyStart = html.indexOf('<body');
  const bodyEnd = html.indexOf('</body>');
  let bodyContent = "";
  if (bodyStart !== -1 && bodyEnd !== -1) {
    const bodyTagEnd = html.indexOf('>', bodyStart);
    bodyContent = html.slice(bodyTagEnd + 1, bodyEnd);
  }

  const stylesheetRegex = /<link[^>]*rel=['"]stylesheet['"][^>]*href=['"]([^'"]+)['"][^>]*>/g;
  const stylesheets = [];
  let match;
  while ((match = stylesheetRegex.exec(html)) !== null) {
    stylesheets.push(match[1]);
  }

  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/g;
  const inlineStyles = [];
  while ((match = styleRegex.exec(html)) !== null) {
    inlineStyles.push(match[1]);
  }

  // Rewrite post URLs to /blog-details/slug
  // Exclude theme, uploads, plugins, feeds, comments, author, category, tags, wp-admin/includes/json
  bodyContent = bodyContent.replace(
    /https:\/\/creative\.techdeer\.in\/(?!(?:feed|comments|wp-json|wp-content|wp-includes|xmlrpc|wp-admin|oembed|category|author|tag)\b)([a-zA-Z0-9_-]+)\/?/g,
    '/blog-details/$1'
  );

  return {
    bodyClasses,
    bodyContent,
    stylesheets,
    inlineStyles
  };
}

export const getBlogs = async () => {
  try {
    const res = await fetch("https://blog.creativethoughts.ai/wp-json/wp/v2/posts?_embed&per_page=100", {
      cache: "no-store"
    });
    if (!res.ok) return [];
    const posts = await res.json();
    if (Array.isArray(posts)) {
      return posts.map(mapWordPressPost);
    }
    return [];
  } catch (error) {
    console.error("Error fetching blogs from WordPress:", error);
    return [];
  }
};

export const getBlogBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const res = await fetch(`https://blog.creativethoughts.ai/wp-json/wp/v2/posts?slug=${slug}&_embed`, {
      cache: "no-store"
    });
    if (!res.ok) return null;
    const posts = await res.json();
    if (Array.isArray(posts) && posts.length > 0) {
      return mapWordPressPost(posts[0]);
    }
    return null;
  } catch (error) {
    console.error(`Error fetching blog by slug ${slug}:`, error);
    return null;
  }
};
