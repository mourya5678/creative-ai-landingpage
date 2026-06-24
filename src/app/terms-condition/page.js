import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Creative AI",
  description: "Read the Terms of Use and Conditions for using the Creative AI platform, services, and applications.",
  keywords: "terms and conditions, terms of use, terms of service, creative ai",
};

export default function Page() {
  return (
    <>
      <Header />
      
      {/* Inner Hero Content S */}
      <section className="ct_py_70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="privacy-policy-box">
                <h1 className="ct_fs_35 privacy_heading ct_fw_700 mb-4">Terms of Use</h1>
                <p className="ct_fs_16 ct_clr_555">Last updated: July 11, 2025</p>

                <p className="ct_fs_14 ct_clr_555">
                  Welcome to Creative AI. Please read these Terms of Use (“Agreement”) carefully, as they govern your access to and use of our website, platform, applications, and services (“Service”).
                </p>
                <p className="ct_fs_14 ct_clr_555">
                  By accessing or using Creative AI, you (“Customer,” “you,” or “your”) agree to be bound by this Agreement, our <Link href="/privacy-policy" className="text-decoration-underline">Privacy Policy</Link>, and any other guidelines or policies we may publish. If you do not agree, please stop using the Service immediately.
                </p>
                
                <div>
                  <p className="ct_fs_14 mb-2 ct_clr_555">This Agreement is effective as of the earlier of: </p>
                  <ul className="terms-condition-list">
                    <li>(a) the date you first create an account or use the Service, or</li>
                    <li>(b) the date you sign an order form or contract referencing this Agreement.</li>
                  </ul>
                </div>

                <h2 className="ct_fs_20 terms-cond-head">1. Our Services</h2>
                <p className="ct_fs_14 ct_clr_666">
                  Creative AI is an AI-powered app builder designed to simplify software development. We provide tools, automation, and support to help you design, build, and manage applications with ease.
                </p>
                <p className="ct_fs_14 ct_clr_666">
                  We continuously improve our Service, which means features may be added, updated, or removed over time.
                </p>

                <h2 className="ct_fs_20 terms-cond-head">2. Eligibility</h2>
                <p className="ct_fs_14 ct_clr_666">To use the Service, you must:</p>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>Be at least 18 years old (or the age of legal majority in your jurisdiction).</li>
                  <li>Have the authority to enter into this Agreement if you are acting on behalf of a company or organization.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">3. Accounts</h2>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>You are responsible for keeping your account information and password secure.</li>
                  <li>You agree not to share your login credentials or allow unauthorized access to your account.</li>
                  <li>You are responsible for all activities under your account.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">4. Acceptable Use</h2>
                <p className="ct_fs_14 ct_clr_666">You agree not to use the Service to:</p>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>Break any applicable law or regulation.</li>
                  <li>Upload, distribute, or create harmful, malicious, or infringing content.</li>
                  <li>Attempt to disrupt, hack, or gain unauthorized access to the Service.</li>
                  <li>Use the platform to build or promote competing services without prior written approval.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">5. Intellectual Property</h2>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>Creative AI retains all ownership rights in the platform, including our AI models, designs, and technology.</li>
                  <li>You retain ownership of the content, data, and intellectual property you input or build using the platform.</li>
                  <li>By using the Service, you grant us a license to process and display your content solely to provide the Service.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">6. Payments & Billing</h2>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>Certain features of Creative AI may require paid subscriptions or usage fees.</li>
                  <li>By subscribing, you agree to provide accurate payment details and authorize us to charge applicable fees.</li>
                  <li>All payments are non-refundable unless required by law.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">7. Confidentiality & Data Privacy</h2>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>We respect your privacy. Please review our <Link href="/privacy-policy" className="text-decoration-underline">Privacy Policy</Link> for details.</li>
                  <li>We will not disclose your confidential information except as required to provide the Service or by law.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">8. Disclaimers & Limitation of Liability</h2>
                <ul style={{ listStyle: "disc" }} className="ps-4 terms-condition-list">
                  <li>The Service is provided “as is” without warranties of any kind.</li>
                  <li>Creative AI does not guarantee error-free or uninterrupted service.</li>
                  <li>To the maximum extent permitted by law, our liability is limited to the amount you paid for the Service in the 12 months before the claim.</li>
                </ul>

                <h2 className="ct_fs_20 terms-cond-head">9. Termination</h2>
                <p className="ct_fs_14 ct_clr_666">
                  We may suspend or terminate your account if you violate this Agreement. You may stop using the Service at any time.
                </p>

                <h2 className="ct_fs_20 terms-cond-head">10. Governing Law</h2>
                <p className="ct_fs_14 ct_clr_666">
                  This Agreement is governed by the laws of India, without regard to conflict of law principles. Any disputes will be resolved in the courts of Indore, Madhya Pradesh, unless otherwise agreed.
                </p>

                <h2 className="ct_fs_20 terms-cond-head">11. Changes to Terms</h2>
                <p className="ct_fs_14 ct_clr_666">
                  We may update these Terms from time to time. The latest version will always be available on our website. By continuing to use the Service, you agree to the updated Terms.
                </p>

                <h2 className="ct_fs_20 terms-cond-head">12. Contact Us</h2>
                <p className="ct_fs_14 mb-1 ct_clr_666">
                  If you have any questions about these Terms, you can reach us at:
                </p>
                <ul className="terms-condition-list">
                  <li>support@creative-ai.com</li>
                  <li>
                    <a href="https://www.creativethoughtsinfo.com" target="_blank" rel="noopener noreferrer">www.creativethoughtsinfo.com</a>
                  </li>
                </ul>
                
                <div className="footer c_clr_555 mt-4">
                  © 2025 Creative AI. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Hero Content E */}
    </>
  );
}
