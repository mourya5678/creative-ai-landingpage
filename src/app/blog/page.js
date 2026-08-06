import Header from "@/components/Header";
import WordPressSandbox from "@/components/WordPressSandbox";
import { parseWordPressHtml } from "@/utils/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blogs - Creative.ai Blogs",
  description: "Explore AI app development ideas, product updates, and no-code app building guides.",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  let wpData = { bodyClasses: "", bodyContent: "", stylesheets: [], inlineStyles: [] };
  try {
    const res = await fetch("https://creative.techdeer.in/", { cache: "no-store" });
    if (res.ok) {
      const html = await res.text();
      wpData = parseWordPressHtml(html);
    }
  } catch (error) {
    console.error("Error fetching WordPress homepage HTML:", error);
  }

  return (
    <div style={{ backgroundColor: "#020202", minHeight: "100vh", width: "100%" }}>
      <Header />
      
      {wpData.bodyContent ? (
        <WordPressSandbox
          bodyContent={wpData.bodyContent}
          stylesheets={wpData.stylesheets}
          inlineStyles={wpData.inlineStyles}
          bodyClasses={wpData.bodyClasses}
        />
      ) : (
        <section className="ct_py_70 text-center text-white" style={{ minHeight: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="container">
            <h1 className="ct_fs_35 ct_fw_700 mb-3">No Blogs Available</h1>
            <p className="mb-4" style={{ color: "#a1a1aa" }}>We are currently updating our blog space. Please check back later!</p>
            <Link href="/" className="ct_blue_btn_fill">
              Go to Homepage
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
