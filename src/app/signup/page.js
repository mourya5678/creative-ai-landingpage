import Header from "@/components/Header";
import { LOGIN_URL } from "@/config";

export const metadata = {
  title: "Sign Up for Creative AI | Start Building with AI",
  description: "Sign up for Creative AI and start building websites, apps, portals, and business software with AI without writing any code.",
};

export default function SignupPage() {
  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
        <div className="text-center p-5 rounded shadow" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "500px" }}>
          <h2 className="text-white mb-3">Creating Your Creative AI Account</h2>
          <p className="text-muted mb-4">Redirecting you to our secure app registration portal...</p>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <a href={`${LOGIN_URL}`} className="btn btn-primary w-100 mt-4">
            Click here if you are not redirected
          </a>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              window.location.href = "${LOGIN_URL}";
            }, 1000);
          `,
        }}
      />
    </>
  );
}
