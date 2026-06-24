import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Creative AI",
  description: "Read the Privacy Policy of Creative AI Pvt. Ltd. regarding our software development services, client responsibilities, payment terms, intellectual property, and confidentiality.",
  keywords: "privacy policy, terms, guidelines, creative ai, software development",
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
                <h1 className="ct_fs_35 privacy_heading ct_fw_700 mb-4">Privacy Policy</h1>
                
                <section className="privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">1. Acceptance of Terms</h2>
                  <p className="ct_fs_14 ct_clr_666">
                    By using our website, requesting a quote, or engaging with our software development services, you agree to be bound by the Terms and Conditions outlined below. If you do not agree, you must not use our services.
                  </p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">2. Services Offered</h2>
                  <p className="ct_fs_18 ct_clr_666">
                    Creative AI Pvt. Ltd. provides professional software solutions including but not limited to:
                  </p>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>Web & Mobile App Development</li>
                    <li><span className="ct_dot_8_span"></span>MVP (Minimum Viable Product) Development</li>
                    <li><span className="ct_dot_8_span"></span>UI/UX Design</li>
                    <li><span className="ct_dot_8_span"></span>Software Consulting & Architecture</li>
                    <li><span className="ct_dot_8_span"></span>Backend & API Development</li>
                    <li><span className="ct_dot_8_span"></span>AI/ML Integration</li>
                    <li><span className="ct_dot_8_span"></span>Maintenance and Support Services</li>
                  </ul>
                  <p className="ct_fs_14 ct_clr_666 mt-2">
                    All projects are governed by a formal agreement, proposal, or Statement of Work (SOW).
                  </p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">3. Client Responsibilities</h2>
                  <p className="ct_fs_16 ct_clr_666">Clients engaging with us must:</p>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>Provide clear and accurate project requirements</li>
                    <li><span className="ct_dot_8_span"></span>Respond to communication in a timely manner</li>
                    <li><span className="ct_dot_8_span"></span>Approve milestones and deliverables promptly</li>
                    <li><span className="ct_dot_8_span"></span>Ensure timely payment based on agreed terms</li>
                  </ul>
                  <p className="ct_fs_14 ct_clr_666 mt-2">
                    Client inaction or delays may result in timeline shifts or project suspension.
                  </p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">4. Payment Terms</h2>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>Payment terms will be outlined in the project proposal or invoice</li>
                    <li><span className="ct_dot_8_span"></span>Typical structure: 30% upfront, 40% mid-project, 30% upon completion</li>
                    <li><span className="ct_dot_8_span"></span>Late payments may attract a service charge or lead to project delays</li>
                    <li><span className="ct_dot_8_span"></span>Payments are non-refundable once the project has commenced unless otherwise agreed</li>
                  </ul>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">5. Intellectual Property</h2>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>All intellectual property developed remains with Creative AI Pvt. Ltd. until full payment is received</li>
                    <li><span className="ct_dot_8_span"></span>Upon full payment, ownership of the final deliverables is transferred to the client</li>
                    <li><span className="ct_dot_8_span"></span>We reserve the right to display non-confidential work in our portfolio or marketing materials unless otherwise agreed</li>
                  </ul>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">6. Confidentiality</h2>
                  <p className="ct_fs_18 ct_clr_666">All information shared with us will be treated as confidential. We will not disclose or share any client data or project materials with third parties without prior consent</p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">7. Warranty & Limitations</h2>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>We aim to deliver high-quality, reliable software</li>
                    <li><span className="ct_dot_8_span"></span>However, no software is entirely error-free; we are not liable for incidental or consequential damages</li>
                    <li><span className="ct_dot_8_span"></span>Our liability is limited to the value of the services provided</li>
                  </ul>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">8. Support and Maintenance</h2>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>Post-launch support or maintenance is not included unless explicitly stated in the contract</li>
                    <li><span className="ct_dot_8_span"></span>Ongoing support can be arranged under a separate agreement</li>
                  </ul>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">9. Termination Policy</h2>
                  <p className="ct_fs_16 ct_clr_666">Either party may terminate the engagement with written notice if:</p>
                  <ul>
                    <li><span className="ct_dot_8_span"></span>The other party breaches the agreed terms</li>
                    <li><span className="ct_dot_8_span"></span>Obligations are not fulfilled</li>
                    <li><span className="ct_dot_8_span"></span>The project is inactive for more than 30 days due to client delays</li>
                  </ul>
                  <p className="ct_fs_14 ct_clr_666 mt-2">
                    Upon termination, the client is responsible for payment for all completed work to date.
                  </p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">10. Governing Law</h2>
                  <p className="ct_fs_16 ct_clr_666">These Terms and Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes will be subject to the jurisdiction of the courts in Indore, Madhya Pradesh.</p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">11. Modifications</h2>
                  <p className="ct_fs_16 ct_clr_666">Creative AI Pvt. Ltd. reserves the right to revise these Terms at any time. Changes will be posted on our website and are considered accepted if services continue.</p>
                </section>

                <section className="mt-3 privacy-policy-sec">
                  <h2 className="ct_fs_20 privacy-policy-desc">12. Contact Information</h2>
                  <p className="ct_fs_16 ct_clr_666">For questions, concerns, or support, please contact:</p>
                  <ul>
                    <li className="ct_fs_18 ct_fw_700">Creative AI Pvt. Ltd.</li>
                    <li>🌐 Website: <a href="https://www.creativethoughtsinfo.com" target="_blank" rel="noopener noreferrer">www.creativethoughtsinfo.com</a></li>
                    <li>📧 Email: <a href="mailto:info@creativethoughtsinfo.com">info@creativethoughtsinfo.com</a></li>
                    <li>📞 Phone: 0731-4877050</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inner Hero Content E */}
    </>
  );
}
