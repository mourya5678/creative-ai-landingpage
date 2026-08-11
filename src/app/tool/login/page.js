import Header from "@/components/Header";
import { LOGIN_URL } from "@/config";

export const metadata = {
  title: "Login to Creative AI | AI Website & App Builder",
  description: "Log in to Creative AI to access your projects and continue building websites, apps, portals, and business software with AI.",
};

export default function LoginPage() {
  return (
    <>
      <Header />
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
        <div className="text-center p-5 rounded shadow" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", maxWidth: "500px" }}>
          <h2 className="text-white mb-3">Login to Creative AI</h2>
          <p className="text-muted mb-4">Redirecting you to our secure app builder portal...</p>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <a id="direct-login-link" href={`${LOGIN_URL}`} className="btn btn-primary w-100 mt-4">
            Click here if you are not redirected
          </a>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(function() {
              var targetUrl = "${LOGIN_URL}";
              // Avoid infinite redirect loop if LOGIN_URL matches current path
              if (window.location.href.indexOf(targetUrl) === -1 && targetUrl !== window.location.pathname) {
                window.location.href = targetUrl;
              } else {
                console.log("Avoided infinite loop back to the same page.");
              }
            }, 1000);
          `,
        }}
      />
    </>
  );
}
