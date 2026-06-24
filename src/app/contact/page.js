import Header from "@/components/Header";
import CalendlyWidget from "@/components/CalendlyWidget";

export const metadata = {
    title: "Contact Us | Creative AI",
    description: "Get in touch with Creative AI. Book a 30-minute consultation or find our address in Indore, India.",
};

export default function Contact() {
    return (
        <>
            <Header />

            {/* Calendly Widget Section */}
            <section className="ct_py_70 pb-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <CalendlyWidget url="https://calendly.com/creativethoughts/30min" />
                        </div>
                    </div>
                </div>
            </section>

            <hr className="ct_break_line" />

            {/* Address & Map Section */}
            <section className="ct_pt_50 ct_pb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h2 className="ct_fs_44 ct_fw_700 text-center mb-5">Our Address</h2>
                            <div
                                style={{
                                    borderRadius: "15px",
                                    overflow: "hidden",
                                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
                                    border: "1px solid #ece7f1"
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1482115127583!2d75.88449607587509!3d22.722731927449942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd39c96cc46f%3A0x95cd42e9abe66387!2sShekhar%20central%2C%20AB%20Rd%2C%20Manorama%20Ganj%2C%20Indore%2C%20Madhya%20Pradesh%20452018!5e0!3m2!1sen!2sin!4v1757948691733!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
