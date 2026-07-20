export default function ComparisonTable({
  title,
  logo = "/img/cti_white_new_logo.webp",
  competitorLabel = "Traditional Development",
  rows = [],
}) {
  return (
    <section className="why_choose_creative_ai">
      <div className="container">
        <h4
          className="ct_fs_74 ct_fs_400 text-center pb-5 mx-auto text-white"
          style={{ maxWidth: "850px" }}
        >
          {title}
        </h4>

        <div className="table-responsive mt-4">
          <table className="table ct_custom_table">
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  <img loading="eager" src={logo} alt="Creative AI" width={140} height={28} />
                </th>
                <th>{competitorLabel}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>
                    <i className="fa-solid fa-check me-1 ct_text_35BE3A"></i> {row.us}
                  </td>
                  <td>{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}