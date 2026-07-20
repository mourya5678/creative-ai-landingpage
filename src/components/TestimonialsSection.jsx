export default function TestimonialsSection({
  eyebrow = "Testimonial",
  title = "Loved By Founders And Businesses",
  description = "Hear from customers who turned their ideas into real products with Creative AI.",
  testimonials = [],
}) {
  return (
    <section className="cti_testimonal_new_section ct_pb_150 ct_pt_150">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ct_home_titles_cnt">
              <span className="mx-auto">{eyebrow}</span>
              <h2 className="text-center mx-auto">{title}</h2>
              <p className="text-center mx-auto">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="owl-carousel cti_testimonial_slider mt-4 pt-4">
        {testimonials.map((t) => (
          <div className="cti_testimonial_card" key={t.id}>
            <p className="cti_testimonial_text">{t.text}</p>
            <div className="cti_testimonial_user">
              <img alt={t.name} src={t.avatar} loading="lazy" />
              <div>
                <h5>{t.name}</h5>
                <span>{t.role || "Our Happy Client"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}