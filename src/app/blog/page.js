import Header from "@/components/Header";
import { API_URL } from "@/config";
import Link from "next/link";
import BlogList from "@/components/BlogList";

export const metadata = {
  title: "Creative AI | AI App Builder for Mobile & Web Application",
  description: "Creative AI is a powerful AI app builder for mobile and web applications. Create fast, scalable apps without writing a single line of code and grow digitally.",
  keywords: "AI app builder, AI app generator, AI app maker, AI app creator, AI mobile app builder, AI application generator, AI retail solutions, retail AI solutions, mobile e-commerce, finance software, software solutions, AI solutions, AI-powered financial solutions, AI healthcare companies, AI healthcare, AI in healthcare, AI for manufacturing, manufacturing artificial intelligence, AI in telecommunications, telecom AI, AI-powered software, energy app, AI educational apps, AI website builder, Entertainment mobile app development, converting a website to a mobile app, converting a website to an app, creating an iPhone app, how to create an app for iPhone",
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

export default async function Page() {
  const blogs = await getBlogs();
  console.log(


    { blogs }
  )
  return (
    <>
      <Header />
      <section className="ct_py_70 ct_inner_hero_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="ct_inner_banner_w_bg">
                <h1 className="ct_fs_44 ct_fw_700 mb-2 text-center">
                  Creative{" "}
                  <span className="ct_orange_gredient_text">AI Blogs</span>
                </h1>
                <h2 className="ct_fs_18 mb-0 text-center mb-3">
                  Explore AI app development ideas, product updates, and no-code
                  app building guides.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="ct_break_line" />

      <BlogList initialBlogs={blogs} apiUrl={API_URL} />

      <hr className="ct_break_line" />
      <section className="ct_pt_50 ct_pb_50">
        <div className="container">
          <div className="col-md-12">
            <div className="ct_free_demo_bg">
              <h2 className="ct_fs_28 text-center text-white ct_fw_700 mb-2 mx-auto">
                Start Building Before Your Competitors Do
              </h2>
              <p className="mx-auto text-center text-white" style={{ maxWidth: "700px" }}>
                Turn your ideas into powerful AI-powered applications faster than
                ever with Creative AI. Build, customize, and launch in minutes, no
                complexity, just results.
              </p>
              <div className="text-center mt-4">
                <Link className="ct_blue_btn_fill ct_white_btn" href="/pricing">
                  Build in Minutes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
