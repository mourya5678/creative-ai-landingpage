import Header from "@/components/Header";
import WordPressSandbox from "@/components/WordPressSandbox";
import { parseWordPressHtml, getBlogBySlug } from "@/utils/blogs";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (slug === "what-is-a-no-code-website-builder-benefits-features-and-how-it-works") {
    const blog = await getBlogBySlug(slug);
    const imageUrl = blog?.banner_image || "https://creativethoughts.ai/img/c.png";
    return {
      title: "What Is a No-Code Website Builder? | Guide",
      description: "Learn what a no-code website builder is, how it works, its key benefits, features, and how to build a website without coding.",
      openGraph: {
        title: "What Is a No-Code Website Builder? | Guide",
        description: "Learn what a no-code website builder is, how it works, its key benefits, features, and how to build a website without coding.",
        images: [
          {
            url: imageUrl,
            alt: "What Is a No-Code Website Builder? | Guide",
          },
        ],
      },
    };
  }

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "404 - Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  const imageUrl = blog.banner_image || "https://creativethoughts.ai/img/c.png";

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

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  let wpData = { bodyClasses: "", bodyContent: "", stylesheets: [], inlineStyles: [] };
  try {
    const res = await fetch(`https://blog.creativethoughts.ai/${slug}/`, { cache: "no-store" });
    if (res.ok) {
      const html = await res.text();
      wpData = parseWordPressHtml(html);
    } else {
      notFound();
    }
  } catch (error) {
    console.error(`Error fetching WordPress details HTML for slug ${slug}:`, error);
    notFound();
  }

  return (
    <div style={{ backgroundColor: "#020202", minHeight: "100vh", width: "100%" }}>
      <Header />
      <WordPressSandbox
        bodyContent={wpData.bodyContent}
        stylesheets={wpData.stylesheets}
        inlineStyles={wpData.inlineStyles}
        bodyClasses={wpData.bodyClasses}
      />
    </div>
  );
}
